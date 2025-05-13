import React from 'react';

const AnimatedBackground: React.FC = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(120deg, #a5b4fc 0%, #38bdf8 40%, #f472b6 80%, #f0f4ff 100%)',
      backgroundSize: '200% 200%',
      animation: 'gradientMove 18s ease-in-out infinite',
      filter: 'blur(0px)',
      opacity: 0.85,
      zIndex: 0,
    }} />
    <style>{`
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}</style>
  </div>
);

export default AnimatedBackground; 