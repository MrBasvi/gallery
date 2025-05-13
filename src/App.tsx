import React from 'react';
import { ConfigProvider } from 'antd';
import Gallery from './components/Gallery';
import AnimatedBackground from './components/AnimatedBackground';
import 'antd/dist/reset.css';

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      <AnimatedBackground />
      <Gallery />
    </ConfigProvider>
  );
};

export default App;
