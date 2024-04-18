import React, { useState, ChangeEvent, MouseEvent } from "react";

export function usePasswordInput():{
    handleChange: (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => void;
    values: { password: string; showPassword: boolean };
    handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleClickShowPassword: () => void
} {
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });


    const handleChange = (prop: string) => (event: ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return {
        values,
        handleChange,
        handleClickShowPassword,
        handleMouseDownPassword,
    };
}
