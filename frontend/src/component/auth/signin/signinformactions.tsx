import {Button, Checkbox, FormControlLabel, Grid, Link} from "@mui/material";


export default function SigninFormActions() {
    return (
        <>
            <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="記得我"/>
            <Button type="submit" variant="contained" sx={{mt: 3, mb: 2}} fullWidth>
                登入
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        忘記密碼?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="/signup" variant="body2">
                        {"還沒有帳號 ? 前往註冊"}
                    </Link>
                </Grid>
            </Grid>
        </>
    );
}
