import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from './theme';

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

ReactDOM.render(
  <React.StrictMode>
    <div>
      {/* <ThemeProvider theme={theme}>
    CssBaseline kickstart an elegant, consistent, and simple baseline to build upon.
        <CssBaseline />
        <App />
    </ThemeProvider>, */}
    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

