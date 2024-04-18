'use client'
import React, {useState, useEffect} from 'react';
import {Box, Grid, Divider, Avatar} from '@mui/material';


export const SideNavbarUI = () => {
    const [visible, setVisible] = useState<boolean>(true);
    useEffect(() => {
        function handleResize() {
            setVisible(() => typeof window !== 'undefined' && window.innerWidth > 600);
        }

        window.addEventListener('resize', handleResize);

        // 清理函数：组件卸载时移除监听器
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <Box
            sx={{
                p: 2,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-100vw)',
                transition: 'opacity 0.5s, transform 0.5s',
            }}
            className='left-navbar'
        >
            <Grid container rowSpacing={3} sx={{color: 'white'}}>
                <Grid item xs={12} sx={{marginTop: '1vh', textAlign: 'center', fontSize: '2rem'}}>檔案</Grid>
                <Grid item xs={12}><Divider/></Grid>
                <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                    <Avatar
                        sx={{width: '6rem', height: '6rem'}}
                    />
                </Grid>
                <Grid item xs={12}><Divider/></Grid>
                <Grid item xs={12}>姓名:</Grid>
                <Grid item xs={12}>學號:</Grid>
                <Grid item xs={12}>系級:</Grid>
            </Grid>
        </Box>
    )
}


