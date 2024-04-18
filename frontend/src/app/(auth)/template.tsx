import {Grid} from "@mui/material";
import {ReactNode} from "react";


export default function template({children}: Readonly<{ children: ReactNode }>) {
    return (
        <Grid container component="main" className='h-screen'>
            <Grid item className="media flex items-center justify-center " xs={false} sm={4} md={7}>
                <h1 className="text-white">
                    星夜享讀計畫
                </h1>
            </Grid>
            <Grid item className="h-screen" xs={12} sm={8} md={5}>
                {children}
            </Grid>
        </Grid>
    )
}