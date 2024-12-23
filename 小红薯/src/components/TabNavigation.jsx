// src/components/TabNavigation.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home, Message, Explore, Person } from '@mui/icons-material';

const TabNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.split('/')[1] || 'home';

  return (
    <Paper 
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} 
      elevation={3}
    >
      <BottomNavigation
        value={pathname}
        onChange={(event, newValue) => {
          navigate(`/${newValue}`);
        }}
      >
        <BottomNavigationAction
          label="主页"
          value="home"
          icon={<Home />}
        />
        <BottomNavigationAction
          label="消息"
          value="messages"
          icon={<Message />}
        />
        <BottomNavigationAction
          label="发现"
          value="discover"
          icon={<Explore />}
        />
        <BottomNavigationAction
          label="我的"
          value="profile"
          icon={<Person />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default TabNavigation;