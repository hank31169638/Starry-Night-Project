'use client'
import {ReactNode} from "react";
import {SessionProvider} from "next-auth/react";
import GoogleReCaptchaProviderWrapper from "@/app/(auth)/recaptcha/recaptcha-v3provider";

export default function Layout({children}: Readonly<{ children: ReactNode }>) {
    return (

        <SessionProvider>
            <GoogleReCaptchaProviderWrapper>
                {children}
            </GoogleReCaptchaProviderWrapper>
        </SessionProvider>

    )
}