import { Avatar, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

export default function SigninFormheader() {
    return (
        <>
            <Avatar sx={{m: 1, backgroundColor: 'secondary.main'}}>
                <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
                登入
            </Typography>
        </>
    );
}
