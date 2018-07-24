import React from 'react';
import styled from 'styled-components';
import skin from './skin';

const MinusButtonStyled = styled.span`${skin}`;
const MinusButton = ({ onClickHandler }) => <MinusButtonStyled onClick={onClickHandler}> - </MinusButtonStyled>;
export default MinusButton