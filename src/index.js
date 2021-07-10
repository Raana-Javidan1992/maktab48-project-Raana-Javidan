import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import {BrowserRouter} from "react-router-dom"
import {createTheme} from  '@material-ui/core'
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset,ThemeProvider } from '@material-ui/core/styles';



const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createTheme({
  direction: 'rtl',
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider jss={jss}> 
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider> 
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


