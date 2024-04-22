'use client'
import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {usePasswordInput} from "@/component/auth/common/handlepassword";

interface PasswordFieldProps {
    errors?: string;
    label: string,
}

export default function SignInPasswordField({label}: PasswordFieldProps) {
    const {values, handleChange, handleClickShowPassword, handleMouseDownPassword} = usePasswordInput();

    return (
        <>
            <TextField
                margin="normal"
                required
                fullWidth
                id={label}
                label={label}
                name={label}
                autoComplete="current-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                sx={{
                    marginBottom: 5,
                }}
            />
        </>
    );
}
