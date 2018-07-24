import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { incrementCounter, decreaseCounter } from '../../actions';
import MaximumError from 'components/MaximumError'
import MinimumError from 'components/MinimumError'
import MinusButton from 'components/MinusButton'
import PlusButton from 'components/PlusButton'
import * as skin from './skin';

class App extends Component {
  
  handleOnIncrement = () => this.props.incrementCounter();
  handleOnDecrease = () => this.props.decreaseCounter();
  
  render() {
    const Counter = styled.span`${skin.Counter}`;
    const CounterWrapper = styled.span`${skin.CounterWrapper}`;
    const BackButton = styled(Link)`${skin.BackButton}`;
    const { current, isMaximumCountReach, isMinimumCountReach } = this.props;

    return (
        <Fragment>
          <BackButton to='/list'> See the history </BackButton>
          <CounterWrapper>
            <PlusButton onClickHandler={this.handleOnIncrement} />
            <Counter> {current} </Counter>
            <MinusButton onClickHandler={this.handleOnDecrease} />
          </CounterWrapper>
          {isMaximumCountReach && <MaximumError />}
          {isMinimumCountReach && <MinimumError />}
        </Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log('x ', state)
  const { current } = state.counter
  const { isMaximumCountReach, isMinimumCountReach} = state.errors;
  console.log('x ', current)
  return {
    current,
    isMinimumCountReach, 
    isMaximumCountReach
  }
}

const mapDispatchToProps =  {
    incrementCounter,
    decreaseCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
