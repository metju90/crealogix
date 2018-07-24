import React from 'react';
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components';
import Home from '../Home';
import List from '../List';
import * as skin from './skin';

const App = styled.span`${skin.App}`;

export default () => 
  <App>
    <Switch>
      <Route exact path='/list' component={List}/> 
      <Route exact patch='/' component={Home}/>
    </Switch>
  </App>

