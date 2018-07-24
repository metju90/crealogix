import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { resetCounter } from '../../actions/index';
import * as skin from './skin';

const Count = styled.span`${skin.Count}`;
const renderHistory = history => <Count>{history}</Count>;
const BackButton = styled(Link)`${skin.BackButton}`;

const List = ({ history, resetCounter }) => {
    return (
      <Fragment> 
          <BackButton onClick={() => resetCounter()} to='/'>Back to home </BackButton>
           {history.length > 0 ? 
              history.map(renderHistory) :
              'There is nothing in the history'
           }
      </Fragment>
    );
}

List.propTypes = {
  history: PropTypes.array,
  resetCounter: PropTypes.func,
  testing: PropTypes.number.isRequired
}

const mapStateToProps = state => {
  const { history } = state.counter
  return {
    history
  }
}

const mapDispatchToProps =  {
  resetCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
