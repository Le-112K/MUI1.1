// src/components/PostCard.jsx
import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  ImageList,
  ImageListItem,
} from '@mui/material';
import { Favorite, Comment, Share } from '@mui/icons-material';

const PostCard = ({ post }) => {
  const { author, content, images, timestamp, likes, comments } = post;

  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader
        avatar={
          <Avatar src={author.avatar} alt={author.name}>
            {author.name[0]}
          </Avatar>
        }
        title={author.name}
        subheader={timestamp}
      />
      <CardContent>
        <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
          {content}
        </Typography>
        {images && images.length > 0 && (
          <ImageList cols={3} rowHeight={164} gap={8}>
            {images.map((img, index) => (
              <ImageListItem key={index}>
                <img
                  src={img}
                  alt={`Post image ${index + 1}`}
                  loading="lazy"
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <Favorite color={likes.includes('currentUser') ? 'error' : 'inherit'} />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {likes.length}
        </Typography>
        <IconButton aria-label="comment">
          <Comment />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {comments.length}
        </Typography>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostCard;