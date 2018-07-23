import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import App from './App';
import { getStore, init as storeInit, registerReducer } from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import bootstrapCSS from './theme/bootstrap.min.css';
import theme from './theme';
import { createStore } from 'redux';

const getInitiatedStore = () => {
    storeInit();
    registerReducer;
    return getStore();
  };

const store = getInitiatedStore();
  
const getApp = () =>
  (<ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
  );

ReactDOM.render(getApp(), document.getElementById('root'));
registerServiceWorker();
