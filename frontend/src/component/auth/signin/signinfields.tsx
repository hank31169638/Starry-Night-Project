import TextField from "@mui/material/TextField";
import SignInPasswordField from "@/component/auth/signin/signinpasswordfield";
export default function SigninFields() {
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
        </>
    );
}
