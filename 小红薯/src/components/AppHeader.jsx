// src/components/AppHeader.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import { ArrowBack, MoreVert } from '@mui/icons-material';

const AppHeader = ({ title, showBack = false, showMore = false, onMoreClick }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        {showBack && (
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => navigate(-1)}
            sx={{ mr: 2 }}
          >
            <ArrowBack />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {showMore && (
          <IconButton
            edge="end"
            color="inherit"
            onClick={onMoreClick}
          >
            <MoreVert />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;