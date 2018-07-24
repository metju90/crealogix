import { css } from 'styled-components';

export const Counter = () => css`
	font-size: 18px;
	font-weight: bold;
`
export const CounterWrapper = () => css`
	width: 280px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const ListButton = ({theme}) => css`
	${theme.elements.warning()}
`;
