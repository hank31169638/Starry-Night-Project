import React, {SetStateAction} from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {useRouter} from "next/navigation";

const drawerWidth = 200;
const navMobileItems = [['event', '活動'], ['books', '書籍資料'], ['profile', '個人檔案'], ['Logout', '登出']];

interface MobileDrawerProps {
    mobileOpen: boolean,
    SetMobileOpen: React.Dispatch<SetStateAction<boolean>>,
    handleLogout: React.MouseEventHandler<HTMLDivElement>,
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({mobileOpen, SetMobileOpen, handleLogout}) => {
    const router = useRouter();
    return (
        <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={() => SetMobileOpen(false)}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                display: {xs: 'block', sm: 'none'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
            }}
        >
            <Box onClick={() => SetMobileOpen(false)} sx={{textAlign: 'center'}}>
                <List>
                    {navMobileItems.map((item, index) => (
                        <ListItem key={item[0]} disablePadding>
                            <ListItemButton sx={{textAlign: 'center'}}
                                            onClick={item[0] === 'Logout' ? handleLogout : () => router.push(item[0])}>
                                <ListItemText primary={item[1]}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default MobileDrawer;
