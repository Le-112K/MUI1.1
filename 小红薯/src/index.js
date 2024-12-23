// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 创建根元素
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline 重置浏览器默认样式 */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// 性能监测
reportWebVitals(console.log);

// 如果你想要一个基本的性能监测函数，可以添加以下文件：
// src/reportWebVitals.js
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // 累积布局偏移
      getFID(onPerfEntry); // 首次输入延迟
      getFCP(onPerfEntry); // 首次内容绘制
      getLCP(onPerfEntry); // 最大内容绘制
      getTTFB(onPerfEntry); // 首字节时间
    });
  }
};

export default reportWebVitals;