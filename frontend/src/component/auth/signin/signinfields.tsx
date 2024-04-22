import TextField from "@mui/material/TextField";
import SignInPasswordField from "@/component/auth/signin/signinpasswordfield";
import {RecaptchaBtn} from "@/component/auth/common/recaptcha-v2_btn";
export default function SigninFields({handleRecaptcha}: {handleRecaptcha: (token: string) => void}) {
    return (
        <>
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                style={{minHeight: '12vh'}}
            />
            <SignInPasswordField label={'password'}/>
            <RecaptchaBtn handleRecaptcha={handleRecaptcha} />
        </>
    );
}
