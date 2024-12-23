// src/pages/ChatDetail.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Paper,
} from '@mui/material';
import { Send } from '@mui/icons-material';
import AppHeader from '../components/AppHeader';
import ChatBubble from '../components/ChatBubble';

const ChatDetail = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  
  const mockMessages = [
    {
      id: 1,
      content: '你好！最近怎么样？',
      timestamp: '14:22',
      avatar: '/assets/images/avatar1.jpg',
      isSelf: false,
    },
    {
      id: 2,
      content: '挺好的，你呢？',
      timestamp: '14:23',
      avatar: '/assets/images/avatar2.jpg',
      isSelf: true,
    },
    {
      id: 3,
      content: '我也不错，周末有空一起出来喝咖啡吗？',
      timestamp: '14:25',
      avatar: '/assets/images/avatar1.jpg',
      isSelf: false,
    },
  ];

  const handleSend = () => {
    if (message.trim()) {
      // 这里应该添加发送消息的逻辑
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppHeader title="聊天" showBack />
      
      <Box sx={{ 
        flex: 1, 
        mt: 7, 
        mb: 8, 
        overflowY: 'auto',
        backgroundColor: 'grey.50'
      }}>
        {mockMessages.map((msg) => (
          <ChatBubble
            key={msg.id}
            message={msg}
            isSelf={msg.isSelf}
          />
        ))}
      </Box>

      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          p: 1,
          borderTop: 1,
          borderColor: 'grey.200',
        }}
        elevation={3}
      >
        <TextField
          fullWidth
          multiline
          maxRows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="输入消息..."
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  color="primary"
                  onClick={handleSend}
                  disabled={!message.trim()}
                >
                  <Send />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </Box>
  );
};

export default ChatDetail;