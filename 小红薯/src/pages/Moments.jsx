// src/pages/Moments.jsx
import React from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Avatar,
} from '@mui/material';
import AppHeader from '../components/AppHeader';
import PostCard from '../components/PostCard';

const Moments = () => {
  const mockPosts = [
    {
      author: {
        name: '王五',
        avatar: '/assets/images/avatar3.jpg',
      },
      content: '周末去爬山，风景真美！',
      images: ['/assets/images/post3.jpg', '/assets/images/post4.jpg'],
      timestamp: '3小时前',
      likes: ['user1', 'user3'],
      comments: ['comment1', 'comment3'],
    },
    // 更多朋友圈帖子...
  ];

  return (
    <Box>
      <AppHeader title="朋友圈" showBack />
      <Paper
        sx={{
          height: 200,
          position: 'relative',
          backgroundImage: 'url(/assets/images/cover.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mb: 2,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h6"
            color="white"
            sx={{ mr: 2, textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
          >
            我的名字
          </Typography>
          <Avatar
            sx={{ width: 60, height: 60, border: '2px solid white' }}
            src="/assets/images/avatar.jpg"
          />
        </Box>
      </Paper>
      <Container>
        {mockPosts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </Container>
    </Box>
  );
};

export default Moments;