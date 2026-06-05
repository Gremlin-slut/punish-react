import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
  colorSchemes: {
    light: false,
    dark: true,
  },
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ThemeProvider theme={theme}>
      {/* CssBaseline kicks off the kickback theme colors onto the <body> background */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
