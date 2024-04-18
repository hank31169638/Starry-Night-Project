'use client'
import React, {ReactNode} from 'react';
import {Grid} from "@mui/material";
import TopNavbarUI from "@/component/navbar/topnavbar/topnavbar";
import {SideNavbarUI} from "@/component/navbar/sidenavbar/sidenavbar";
import {SessionProvider} from "next-auth/react";

export default function Template({children}:Readonly<{children:ReactNode;}>) {
    return (
        <>
            <SessionProvider>
                <Grid container>
                    <Grid item sm={false}
                          sx={{height: {sm: '100vh', md: '100vh'}, display: {xs: 'none', sm: 'flex'}}}>
                        <SideNavbarUI/>
                    </Grid>
                    <Grid item sm={12} >
                        <TopNavbarUI/>
                        <Grid sx={{marginTop:'4vh', marginLeft:'16.625rem'}}>
                            {children}
                        </Grid>
                    </Grid>
                </Grid>
            </SessionProvider>
        </>
    );
}
