'use client'
import React, {useState} from "react";
import CssBaseline from '@mui/material/CssBaseline';
import MobileDrawer from "@/component/navbar/topnavbar/items/mobliedrawer";
import StickyAppBar from "@/component/navbar/topnavbar/items/stickyappbar";
import NavBarContent from "@/component/navbar/topnavbar/items/navbarcontent";
import {useSession, signOut} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function TopNavbarUI() {
    const router = useRouter();
    const {data: session} = useSession();
    const [mobileOpen, setMobileOpen] = useState(false);
    const signout = async () => {
        await signOut({redirect:false});
        router.push('/redirect')
    }

    return (
        <>
            <CssBaseline/>
            <StickyAppBar onMenuClick={() => setMobileOpen(!mobileOpen)} isMobileMenuVisible>
                <NavBarContent session={session} signout={signout}/>
            </StickyAppBar>
            <MobileDrawer mobileOpen={mobileOpen} SetMobileOpen={setMobileOpen} handleLogout={signout}/>
        </>
    );
}
