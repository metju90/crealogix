import React from 'react';
import styled from 'styled-components';
import skin from './skin';

const styledDiv = styled.div`${skin}`;
const MaximumError = () => <styledDiv>You reach the highest number</styledDiv>;
export default MaximumError;