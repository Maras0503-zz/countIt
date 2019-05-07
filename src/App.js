import React from 'react';
import './App.css';
import LoginForm from './components/loginForm/LoginForm.js';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import lightGreen from '@material-ui/core/colors/lightGreen';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: lightGreen
  }
}
);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <LoginForm></LoginForm>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
