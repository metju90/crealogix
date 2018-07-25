import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { incrementCounter, decreaseCounter } from '../../actions';
import MaximumError from 'components/MaximumError'
import MinimumError from 'components/MinimumError'
import MinusButton from 'components/MinusButton'
import PlusButton from 'components/PlusButton'
import * as skin from './skin';

class Home extends Component {
  
  handleOnIncrement = () => this.props.incrementCounter();
  handleOnDecrease = () => this.props.decreaseCounter();
  
  render() {
    const Counter = styled.span`${skin.Counter}`;
    const CounterWrapper = styled.span`${skin.CounterWrapper}`;
    const ListButton = styled(Link)`${skin.ListButton}`;
    const { count, isMaximumCountReach, isMinimumCountReach } = this.props;

    return (
        <Fragment>
          <ListButton to='/list'> See the history </ListButton>
          <CounterWrapper>
            <PlusButton onClickHandler={this.handleOnIncrement} />
            <Counter> {count} </Counter>
            <MinusButton onClickHandler={this.handleOnDecrease} />
          </CounterWrapper>
          {isMaximumCountReach && <MaximumError />}
          {isMinimumCountReach && <MinimumError />}
        </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { count } = state.counter
  const { isMaximumCountReach, isMinimumCountReach} = state.errors;
  return {
    count,
    isMinimumCountReach, 
    isMaximumCountReach
  }
}

const mapDispatchToProps =  {
    incrementCounter,
    decreaseCounter
}
Home.propTypes = {
  count: PropTypes.number.isRequired,
  isMinimumCountReach: PropTypes.bool.isRequired,
  isMaximumCountReach: PropTypes.bool.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decreaseCounter: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
