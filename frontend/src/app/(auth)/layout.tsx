'use client'
import {ReactNode} from "react";
import {SessionProvider} from "next-auth/react";
import GoogleReCaptchaProviderWrapper from "@/component/auth/common/recaptcha-v3provider";

export default function Layout({children}: Readonly<{ children: ReactNode }>) {
    return (

        <SessionProvider>
            <GoogleReCaptchaProviderWrapper>
                {children}
            </GoogleReCaptchaProviderWrapper>
        </SessionProvider>

    )
}