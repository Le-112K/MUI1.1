// src/pages/Home.jsx
import React from 'react';
import { Box, Container } from '@mui/material';
import AppHeader from '../components/AppHeader';
import TabNavigation from '../components/TabNavigation';
import PostCard from '../components/PostCard';

const Home = () => {
  const mockPosts = [
    {
      author: {
        name: '张三',
        avatar: '/assets/images/avatar1.jpg',
      },
      content: '今天天气真好，出去散步遇到了可爱的小狗！',
      images: ['/assets/images/post1.jpg', '/assets/images/post2.jpg'],
      timestamp: '2小时前',
      likes: ['user1', 'user2'],
      comments: ['comment1', 'comment2'],
    },
    // 更多帖子...
  ];

  return (
    <Box sx={{ pb: 7 }}>
      <AppHeader title="主页" />
      <Container sx={{ mt: 8, mb: 2 }}>
        {mockPosts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </Container>
      <TabNavigation />
    </Box>
  );
};

export default Home;