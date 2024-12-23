// src/components/ChatBubble.jsx
import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const ChatBubble = ({ message, isSelf }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isSelf ? 'row-reverse' : 'row',
        alignItems: 'flex-start',
        mb: 2,
        mx: 2,
      }}
    >
      <Avatar
        src={message.avatar}
        sx={{ width: 40, height: 40, mx: 1 }}
      />
      <Box
        sx={{
          maxWidth: '70%',
          backgroundColor: isSelf ? 'primary.main' : 'grey.100',
          color: isSelf ? 'white' : 'text.primary',
          borderRadius: 2,
          p: 1.5,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 10,
            [isSelf ? 'right' : 'left']: -8,
            borderStyle: 'solid',
            borderWidth: '8px 8px 0 0',
            borderColor: `${isSelf ? 'primary.main' : 'grey.100'} transparent transparent transparent`,
            transform: isSelf ? 'rotate(45deg)' : 'rotate(-135deg)',
          },
        }}
      >
        <Typography variant="body1">{message.content}</Typography>
        <Typography variant="caption" sx={{ display: 'block', mt: 0.5, textAlign: isSelf ? 'right' : 'left' }}>
          {message.timestamp}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatBubble;