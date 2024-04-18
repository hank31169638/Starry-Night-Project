'use client'

import {GoogleReCaptchaProvider} from 'react-google-recaptcha-v3';
import {ReactNode} from "react";
export default function GoogleReCaptchaProviderWrapper( {
  children,
}: {
    children: ReactNode;
}) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_V3_SITE_KEY ?? "NOT FOUND"}
      language="zh-hans"
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}