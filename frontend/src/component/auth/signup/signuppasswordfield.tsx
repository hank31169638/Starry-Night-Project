'use client'
import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {usePasswordInput} from "@/component/auth/common/handlepassword";

interface PasswordFieldProps {
    errors?: any;
    id: string,
    label: string,
}

export default function SignUpPasswordField({id, label,errors}: PasswordFieldProps) {
    const {values, handleChange, handleClickShowPassword, handleMouseDownPassword} = usePasswordInput();


    return (
        <TextField
            margin="normal"
            required
            fullWidth
            id={id}
            label={label}
            name={id}
            autoComplete="current-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            error={!!errors}
            helperText={errors || " "}
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
        />
    );
}
