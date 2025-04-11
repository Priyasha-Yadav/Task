
// Problem: Build a theme toggle component that switches between dark and light modes.

import React, { useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(prev => !prev);

  const themeStyles = {
    backgroundColor: isDark ? '#222' : '#eee',
    color: isDark ? '#fff' : '#000',
    padding: '2rem',
    textAlign: 'center',
    borderRadius: '10px',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={themeStyles}>
      <h2>{isDark ?  'Dark Mode' : 'Light Mode'}</h2>
      <button onClick={toggleTheme}>
        Switch to {isDark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
