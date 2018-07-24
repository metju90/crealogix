import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import App from './pages/App';
import { getStore, init as storeInit, registerReducer } from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import theme from './theme';
import { createStore } from 'redux';

injectGlobal`${theme.global()}`;

const getInitiatedStore = () => {
    storeInit();
    registerReducer;
    return getStore();
  };

const store = getInitiatedStore();
  
const getApp = () =>
  (<ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
  );

ReactDOM.render(getApp(), document.getElementById('root'));
registerServiceWorker();
