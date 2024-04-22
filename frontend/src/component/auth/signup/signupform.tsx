'use client'
import React from "react";
import {Box} from "@mui/material";
import SignupFormHeader from "@/component/auth/signup/signupformheader";
import SignupFields from "@/component/auth/signup/signupfields";
import SignupFormActions from "@/component/auth/signup/signupformactions";
import {validateUsername, validateEmail, validatePassword, validateConfirmPassword} from "./validation"; // 确保路径正确
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";


export default function SignupForm() {
    const [errors, setErrors] = React.useState(Object.create({}));
    const router = useRouter();
    // validatePassword if password is valid or not


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        const username = data.get('username')
        const email = data.get('email')
        const password = data.get('password')
        const password2 = data.get('password2')

        if (!validateUsername(username as string, setErrors)
            || !validateEmail(email as string, setErrors)
            || !validatePassword(password as string, setErrors)
            || !validateConfirmPassword(password as string, password2 as string, setErrors)
        ) {
            return;
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                password2: password2
            })
        });
        const responseData = await response.json();
        if (responseData.status === 'success') {
            await signIn('credentials', {username, password,redirect: false})
            router.push('/redirect');
        } else {
            // show error message
            setErrors(responseData.errors)
        }
    }

    return (
        <Box
            sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: {
                    xs: '40vh', // which screen's width < 600px
                    sm: '45vh', // which screen's width < 960px
                    md: '55vh', // which screen's width < 1280px
                },
                marginTop: '15vh'
            }}
        >
            <SignupFormHeader/>
            <Box component="form" method='post' noValidate sx={{mt: 1,mr:5}} onSubmit={handleSubmit}
            >
                <SignupFields Errors={errors}/>
                <SignupFormActions/>
            </Box>
        </Box>
    );
}
