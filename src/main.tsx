import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { useState, useEffect, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function OutterApp() {
  // 1. Initialize state directly from localStorage
  const [mode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode === 'dark' ? 'dark' : 'light';
  });

  // 2. Update localStorage whenever the mode changes
  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  // 3. Memoize the theme object for performance
  const theme = useMemo(
    () =>
      createTheme({
      }),
    [mode]
  );

  // // 4. Toggle function for the UI
  // const toggleTheme = () => {
  //   setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  // };

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kicks off the kickback theme colors onto the <body> background */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OutterApp />
  </StrictMode>,
)
