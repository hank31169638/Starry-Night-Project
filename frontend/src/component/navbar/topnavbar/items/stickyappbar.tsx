'use client'
import React, {useState, useEffect, ReactNode} from 'react';
import {AppBar, Toolbar, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface StickyAppBarProps {
    children: ReactNode,
    onMenuClick: () => void,
    isMobileMenuVisible: boolean,
}

export default function StickyAppBar({children, onMenuClick, isMobileMenuVisible}: StickyAppBarProps) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const appBar = document.getElementById('myAppBar');
            if (appBar) {
                if (window.scrollY > 21) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AppBar position="sticky" id='myAppBar' sx={{
            color: 'black',
            borderRadius: '0.75rem',
            marginTop: '1.25rem',
            marginLeft: {xs: '3.125vw', sm: '16rem', md: '16rem'},
            marginRight:'1.5vw',
            width: {xs: '95vw', sm: 'auto', md: 'auto'},
            top:isSticky?'15px':'0',
            boxShadow: isSticky ? 'rgba(255, 255, 255, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem' : 'none',
            backgroundColor: isSticky ? 'rgb(255,255,255,0.8)' : 'rgb(240, 242, 245)',
            backdropFilter: isSticky ? 'saturate(300%) blur(0.175rem)' : 'none',
        }}>
            <Toolbar>
                {isMobileMenuVisible && (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={onMenuClick}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                )}
                {children}
            </Toolbar>
        </AppBar>
    );
}
