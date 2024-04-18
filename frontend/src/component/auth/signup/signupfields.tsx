import React from "react";
import TextField from "@mui/material/TextField";
import SignUpPasswordField from "@/component/auth/signup/signuppasswordfield";

interface SignupFieldsProps {
    Errors: {
        username: string,
        email: string,
        password: string,
        password2: string,
        non_field_errors: string
    };
}
export default function SignupFields({Errors}:SignupFieldsProps) {

    return (
        <>
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="UserName"
                name="username"
                autoComplete="name"
                autoFocus
                error={!!Errors.username}
                helperText={Errors.username || " "}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={!!Errors.email}
                helperText={Errors.email || " "}
            />
            <SignUpPasswordField label="Password" id="password" errors={Errors.password}/>
            <SignUpPasswordField label="Confirm Password" id="password2" errors={Errors.password2 || Errors.non_field_errors}/>
        </>
    );
}
