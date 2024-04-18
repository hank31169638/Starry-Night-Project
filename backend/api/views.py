from django.shortcuts import render
from django.contrib.auth.models import User
from .serializers import UserSignupSerializers, UserSigninSerializers

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework import status

from django.core.cache import cache
from django.utils import timezone
from datetime import timedelta

import requests
from django.conf import settings


class UserSignupView(APIView):
    def post(self, request):
        serializer = UserSignupSerializers(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, created = Token.objects.get_or_create(user=user)
            response = Response({'status': 'success', 'token': token.key}, status=status.HTTP_201_CREATED)
            response.set_cookie(
                'auth_token',
                token.key,
                httponly=Token,
                samesite='Strict'
            )
            return response
        else:
            return Response({
                'status': 'error',
                'message': 'signup failed',
                'errors': serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)


class UserSigninView(APIView):
    def post(self, request):

        recaptcha_token = request.data.get('token', None)

        verify_result = self.verify_recaptcha(recaptcha_token)
        score = verify_result.get("score", None)
        if not verify_result.get("success", False):
            return Response({"status": '403', 'errors': '你可能為機器人，請再試一次.', 'score': score})

        # attempt to get username
        username = request.data.get('username', None)
        # construct a unique cache key
        # and  set in redis
        cache_key = f'login_attempts_{username}'
        attempts, attempt_time = cache.get(cache_key, [0, timezone.now() - timedelta(minutes=15)])

        # examine whether exceed attempt times
        if attempts >= 5:
            time_since_last_attempt = timezone.now() - attempt_time
            if time_since_last_attempt.total_seconds() < 900:
                # 计算剩余等待时间
                remaining_time = int(15 - time_since_last_attempt.total_seconds() / 60)
                return Response(
                    {"status": '429',
                     "errors": f"嘗試太多次, 請 {remaining_time + 1} 分鐘後再試."})

        serializer = UserSigninSerializers(data=request.data)

        if serializer.is_valid():
            user = serializer.validated_data['user']

            token, created = Token.objects.get_or_create(user=user)
            response = Response({'status': '200', 'username': f'{user}', 'score': score})
            response.set_cookie(
                'auth_token',
                token.key,
                httponly=Token,
                samesite='Strict'
            )
            # reset the signin attempt
            cache.set(cache_key, [0, timezone.now()], timeout=900)
            return response
        else:
            if username:
                attempts += 1
                cache.set(cache_key, [attempts, timezone.now()], timeout=900)
            return Response({"status": '401', 'errors': "登入失敗，請確認帳號密碼是否正確。"})

    def verify_recaptcha(self, token):
        payload = {
            "secret": settings.RECAPTCHA_SECRET_KEY,
            "response": token
        }
        response = requests.post(
            "https://www.google.com/recaptcha/api/siteverify", data=payload)
        response_json = response.json()
        # success 是一个布尔值，表示验证码是否有效
        success = response_json.get("success", False)
        # score 是 reCAPTCHA v3 返回的用户分数，范围从0.0到1.0
        score = response_json.get("score", None)
        # success is a boolean value indicating whether the captcha is valid or not
        return {
            "success": success,
            "score": score
        }
