import React from 'react';
import styled from 'styled-components';
import skin from './skin';

const MinusButton = styled.span`${skin}`;
export default ({ onClickHandler }) => <MinusButton onClick={onClickHandler}> - </MinusButton>;