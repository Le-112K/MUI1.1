// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

// 页面导入
import Login from './pages/Login';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Discover from './pages/Discover';
import Profile from './pages/Profile';
import Moments from './pages/Moments';
import ChatDetail from './pages/ChatDetail';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/messages/:id" element={<ChatDetail />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/discover/moments" element={<Moments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;