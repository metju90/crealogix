import React from 'react';
import styled from 'styled-components';
import skin from './skin';

const StyledDiv = styled.div`${skin}`;
const MaximumError = () => <StyledDiv>You reach the highest number</StyledDiv>;
export default MaximumError;