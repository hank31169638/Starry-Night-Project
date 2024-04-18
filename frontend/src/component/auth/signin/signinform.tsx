'use client'
import React, {useState} from "react";
import {Box} from "@mui/material";
import SigninFormHeader from "@/component/auth/signin/signinformheader";
import SigninFields from "@/component/auth/signin/signinfields";
import SigninFormaActions from "@/component/auth/signin/signinformactions";
import ErrorField from "@/component/auth/common/errorfield";
import {useGoogleReCaptcha} from "react-google-recaptcha-v3";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function SigninForm() {
    const router = useRouter();
    const [errors, setErrors] = useState(" ");
    const {executeRecaptcha} = useGoogleReCaptcha();

    const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get('username')
        const password = data.get('password')

        if (executeRecaptcha) {
            const recaptchaToken = await executeRecaptcha('inquirySubmit');
            if (username && password) {// 检查其输出

                fetch(`${process.env.NEXT_PUBLIC_API_URL}/signin`, {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        username: username,
                        password: password,
                        token: recaptchaToken,
                    })
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.status === '200') {
                            signIn('credentials', {username, callbackUrl: '/', redirect: false});
                            router.push('/redirect')
                        } else {
                            // 403 maybe is a robot
                            //429 status code means too many requests
                            setErrors(data.errors)
                        }
                    })
            } else {
                // if username or password is empty don't submit form to server(backend)
                setErrors('帳號或密碼為空')
            }
        }
    }

    return (
        <Box
            sx={{
                my: 24,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: {
                    xs: '40vh', // which screen's width < 600px
                    sm: '45vh', // which screen's width < 960px
                    md: '55vh', // which screen's width < 1280px
                }
                , marginTop: '25vh',
            }}
        >
            <SigninFormHeader/>
            <Box component="form" method='post' noValidate sx={{mt: 1}} onSubmit={handleSignIn}>
                <ErrorField error={errors}/>
                <SigninFields/>
                <SigninFormaActions/>
            </Box>
        </Box>
    );
}

