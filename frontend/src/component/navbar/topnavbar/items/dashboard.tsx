import React from 'react';
import Typography from '@mui/material/Typography';
import BreadcrumbsNav from '@/component/navbar/topnavbar/items/breadcrumbsnav';

const Dashboard = () => (
  <div>
    <BreadcrumbsNav />
    <Typography component='h6'>
      儀表板
    </Typography>
  </div>
);

export default Dashboard;
