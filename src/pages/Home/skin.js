import { css } from 'styled-components';

export const Counter = () => css`
	font-size: 18px;
	font-weight: bold;
`
export const CounterWrapper = () => css`
	width: 200px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const BackButton = ({theme}) => css`
	${theme.elements.warning()}
`;
