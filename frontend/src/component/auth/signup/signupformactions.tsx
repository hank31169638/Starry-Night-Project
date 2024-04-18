import { Button, Grid, Link } from "@mui/material";

export default function SignupFormActions() {

    return (
        <>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                註冊
            </Button>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link href="/signin" variant="body2">
                        已有帳號? 前往登入
                    </Link>
                </Grid>
            </Grid>
        </>
    );
}
