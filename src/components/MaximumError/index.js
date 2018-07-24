import React from 'react';
import styled from 'styled-components';
import skin from './skin';

const MaximumError = styled.div`${skin}`;
export default () => <MaximumError> You reach the highest number</MaximumError>;