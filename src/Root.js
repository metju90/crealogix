import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import theme from './theme';
import { getStore, init as storeInit, registerReducer } from './redux/store';

const getInitiatedStore = () => {
    storeInit();
    registerReducer();
    return getStore();
  };

const store = getInitiatedStore();
  
export default ({ children, mockedStore }) => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={ mockedStore ? mockedStore : store}>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </Provider>
        </ThemeProvider>);
};