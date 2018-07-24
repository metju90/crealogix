import React from 'react';
import styled from 'styled-components';
import skin from './skin';

const PlusButton = styled.span`${skin}`;
export default ({ onClickHandler }) => <PlusButton onClick={onClickHandler}> + </PlusButton>;
