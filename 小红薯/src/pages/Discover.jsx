// src/pages/Discover.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
} from '@mui/material';
import {
  PhotoLibrary,
  LiveTv,
  NearMe,
  Games,
  ChevronRight,
} from '@mui/icons-material';
import AppHeader from '../components/AppHeader';
import TabNavigation from '../components/TabNavigation';

const Discover = () => {
  const navigate = useNavigate();
  const discoverItems = [
    {
      icon: <PhotoLibrary />,
      title: '朋友圈',
      onClick: () => navigate('/discover/moments'),
    },
    {
      icon: <LiveTv />,
      title: '视频号',
      onClick: () => {},
    },
    {
      icon: <NearMe />,
      title: '附近的人',
      onClick: () => {},
    },
    {
      icon: <Games />,
      title: '小游戏',
      onClick: () => {},
    },
  ];

  return (
    <Box sx={{ pb: 7 }}>
      <AppHeader title="发现" />
      <List sx={{ mt: 7, mb: 2 }}>
        {discoverItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem disablePadding>
              <ListItemButton onClick={item.onClick}>
                <ListItemIcon sx={{ color: 'primary.main' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
                <ChevronRight color="action" />
              </ListItemButton>
            </ListItem>
            {index < discoverItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
      <TabNavigation />
    </Box>
  );
};

export default Discover;