import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';

const BreadcrumbsNav = () => (
  <Breadcrumbs aria-label="breadcrumb" separator="/" sx={{ display: 'flex', flexWrap: 'wrap' }}>
    <Link underline="hover" color="inherit" href="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.1)', // 灰色背景的悬停效果
              borderRadius: '0.625rem', // 如果你想要圆角效果
              padding: '0.05rem',
              transition: '0.5s',
            }
          }}>
      <HomeIcon fontSize="inherit"/>
    </Link>
    <Link underline="none" color="inherit">
      首頁
    </Link>
  </Breadcrumbs>
);

export default BreadcrumbsNav;
