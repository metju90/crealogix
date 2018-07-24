import { css } from 'styled-components';

export const Count = ({ theme }) => css`
	padding: 5px;
	border: 1px solid ${theme.colorSet.black}
	margin: 0 5px;
`
export const BackButton = ({theme}) => css`
	${theme.elements.warning()}
`;
