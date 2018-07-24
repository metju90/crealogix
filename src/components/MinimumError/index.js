import React from 'react';
import styled from 'styled-components';
import skin from './skin';

const MinimumError = styled.div`${skin}`;
export default () => <MinimumError> Negative number not allowed </MinimumError>;