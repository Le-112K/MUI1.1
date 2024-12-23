// src/pages/Profile.jsx
import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  Avatar,
  Typography,
  Divider,
  Paper,
} from '@mui/material';
import {
  PhotoCamera,
  Wallet,
  Settings,
} from '@mui/icons-material';
import AppHeader from '../components/AppHeader';
import TabNavigation from '../components/TabNavigation';

const Profile = () => {
  const menuItems = [
    {
      icon: <PhotoCamera color="primary" />,
      title: '相册',
      subtitle: '100张照片',
    },
    {
      icon: <Wallet color="primary" />,
      title: '钱包',
      subtitle: '查看账户余额',
    },
    {
      icon: <Settings color="primary" />,
      title: '设置',
      subtitle: '隐私与安全',
    },
  ];

  return (
    <Box sx={{ pb: 7 }}>
      <AppHeader title="我的" />
      
      <Paper sx={{ mt: 7, mb: 2 }}>
        <ListItem sx={{ py: 2 }}>
          <ListItemAvatar>
            <Avatar
              sx={{ width: 64, height: 64 }}
              src="/assets/images/avatar.jpg"
              alt="个人头像"
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="h6" sx={{ ml: 2 }}>
                我的名字
              </Typography>
            }
            secondary={
              <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                微信号: myusername
              </Typography>
            }
          />
        </ListItem>
      </Paper>

      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  {item.icon}
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={item.subtitle}
                />
              </ListItemButton>
            </ListItem>
            {index < menuItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
      
      <TabNavigation />
    </Box>
  );
};

export default Profile;