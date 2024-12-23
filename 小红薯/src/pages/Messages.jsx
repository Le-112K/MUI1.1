// src/pages/Messages.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from '@mui/material';
import AppHeader from '../components/AppHeader';
import TabNavigation from '../components/TabNavigation';

const Messages = () => {
  const navigate = useNavigate();
  const mockChats = [
    {
      id: 1,
      name: '李四',
      avatar: '/assets/images/avatar2.jpg',
      lastMessage: '好的，明天见！',
      timestamp: '5分钟前',
      unread: 2,
    },
    // 更多聊天...
  ];

  return (
    <Box sx={{ pb: 7 }}>
      <AppHeader title="消息" />
      <List sx={{ mt: 7, mb: 2 }}>
        {mockChats.map((chat, index) => (
          <React.Fragment key={chat.id}>
            <ListItem
              button
              onClick={() => navigate(`/messages/${chat.id}`)}
              sx={{ py: 2 }}
            >
              <ListItemAvatar>
                <Avatar src={chat.avatar} alt={chat.name} />
              </ListItemAvatar>
              <ListItemText
                primary={chat.name}
                secondary={
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    noWrap
                  >
                    {chat.lastMessage}
                  </Typography>
                }
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <Typography variant="caption" color="text.secondary">
                  {chat.timestamp}
                </Typography>
                {chat.unread > 0 && (
                  <Box
                    sx={{
                      bgcolor: 'error.main',
                      color: 'white',
                      borderRadius: '50%',
                      width: 20,
                      height: 20,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mt: 0.5,
                    }}
                  >
                    <Typography variant="caption">
                      {chat.unread}
                    </Typography>
                  </Box>
                )}
              </Box>
            </ListItem>
            {index < mockChats.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
      <TabNavigation />
    </Box>
  );
};

export default Messages;