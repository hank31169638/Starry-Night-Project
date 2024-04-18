'use client'
import React, {useEffect, useState} from 'react';
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";

const RedirectPage = () => {
    const router = useRouter();
    const {data:session, status} = useSession()
    const [countdown, setCountdown] = useState(5); // 設定倒數計時5秒

    useEffect(() => {
        const timer = countdown > 0 && window.setInterval(() => setCountdown(countdown - 1), 1000);

        if (countdown === 0) {
            if (!!session) {
                router.push('/');
            } else {
                router.push('/signin');
            }
        }
        if (timer) return () => window.clearTimeout(timer);
        // every countdown change execute useEffect
    }, [countdown, router, session]);

    if (status=='loading'){
        return <div>Loading...</div>
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            height: '100%',
        }}>
            {!!session ? (
                <div>
                    <p>已登入成功！</p>
                    <p>將在{countdown}秒後跳轉至首頁</p>
                </div>
            ) : (
                <div>
                    <p>已不在登入狀態！</p>
                    <p>將在{countdown}秒後跳轉至登入頁面</p>
                </div>
            )}
        </div>

    );
};

export default RedirectPage;