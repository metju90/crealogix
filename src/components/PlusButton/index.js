import React from 'react';
import styled from 'styled-components';
import skin from './skin';

const StyledPlusButtoon = styled.span`${skin}`;
const PlusButton = ({ onClickHandler }) => <StyledPlusButtoon onClick={onClickHandler}> + </StyledPlusButtoon>;
export default PlusButton;