import React from 'react';
import Button from '@mui/material/Button';
import {useRouter} from "next/navigation";

const navItems = [['event', '活動'], ['books', '書籍資料'], ['signout', '登出']];
interface NavItemsProps {
  signout: () => void;
}
const NavItems: React.FC<NavItemsProps> = ({signout}) => {
    const router = useRouter();
    return (
        <>
            {navItems.map((item) => (
                item[0] === 'signout' ? (
                    <Button key={item[0]} onClick={signout}
                            sx={{color: "inherit", borderRadius: "0.75rem",}}>
                        {item[1]}
                    </Button>
                ) : (
                    <Button key={item[0]} onClick={() => router.push('/' + item[0])}
                            sx={{color: "inherit", borderRadius: "0.75rem",}}>
                        {item[1]}
                    </Button>
                )
            ))}
        </>
    );
};

export default NavItems;
