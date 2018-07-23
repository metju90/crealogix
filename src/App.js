import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { incrementCounter, decreaseCounter } from '../src/actions';
import MaximumError from './components/MaximumError'
import MinimumError from './components/MinimumError'

class App extends Component {

  handleOnIncremenet = () => this.props.incrementCounter();
  handleOnDecrease = () => this.props.decreaseCounter();

  render() {
    const { current, isMaximumCountReach, isMinimumCountReach } = this.props;
    console.log('propzz ', this.props);

    return (
      <div className="App">
        <span onClick={this.handleOnIncremenet}> + </span>
        {current}
        <span onClick={this.handleOnDecrease}> - </span>
        {isMaximumCountReach && <MaximumError />}
        {isMinimumCountReach && <MinimumError />}
      </div>
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
