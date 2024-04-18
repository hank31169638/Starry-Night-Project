import React from 'react';
import { Box } from '@mui/material';
import Dashboard from "@/component/navbar/topnavbar/items/dashboard";
import NavItems from "@/component/navbar/topnavbar/items/navitems";
import {Session} from "next-auth";

interface NavBarContentProps{
    session:Session|null,
    signout:()=>void,
}

export default function NavBarContent({ session, signout }:NavBarContentProps) {
  return (
    <>
      <Dashboard/>
      <Box sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: 'auto' }}>
        {session ? <NavItems signout={signout}/> : <div></div>}
      </Box>
    </>
  );
}
