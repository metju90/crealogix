import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import theme from './theme';
import Root from './Root';

injectGlobal`${theme.global()}`;

const getApp = () => (
    <Root>
      <App/>
    </Root>
  );

ReactDOM.render(getApp(), document.getElementById('root'));
registerServiceWorker();
