import ReCAPTCHA from 'react-google-recaptcha'
import React, {useState} from "react";

const recaptchaRef: React.RefObject<ReCAPTCHA> = React.createRef()

export const RecaptchaBtn = ({handleRecaptcha}: {handleRecaptcha: (token: string) => void}) => {


    return (
        <ReCAPTCHA
            onLoad={() => console.log('ReCAPTCHA loaded')}
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY ? process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY : ""}
            onChange={token => token ? handleRecaptcha(token) : null}
            hl='zh-TW'
            className="flex"
        />
    )
}

