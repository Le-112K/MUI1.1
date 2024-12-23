// src/components/StoryItem.jsx
import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  Paper,
} from '@mui/material';
import { Add } from '@mui/icons-material';

const StoryItem = ({ story, isCreate = false }) => {
  return (
    <Paper
      sx={{
        position: 'relative',
        width: 80,
        height: 120,
        borderRadius: 2,
        overflow: 'hidden',
        mr: 1,
        cursor: 'pointer',
      }}
    >
      {isCreate ? (
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'grey.100',
          }}
        >
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: 'primary.main',
              mb: 1,
            }}
          >
            <Add />
          </Avatar>
          <Typography variant="caption" align="center">
            创建故事
          </Typography>
        </Box>
      ) : (
        <>
          <Box
            component="img"
            src={story.image}
            alt={story.username}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              p: 0.5,
              borderRadius: '50%',
              border: 3,
              borderColor: 'primary.main',
            }}
          >
            <Avatar
              src={story.avatar}
              sx={{ width: 32, height: 32 }}
            />
          </Box>
          <Typography
            variant="caption"
            sx={{
              position: 'absolute',
              bottom: 8,
              left: 8,
              right: 8,
              color: 'white',
              textAlign: 'center',
              textShadow: '0px 0px 4px rgba(0,0,0,0.5)',
            }}
          >
            {story.username}
          </Typography>
        </>
      )}
    </Paper>
  );
};

export default StoryItem;