import { css } from 'styled-components';

const danger = () => css`
    background: #f8d7da;
    color: #721c24;
    padding: 10px;
    display: block;
    cursor: pointer;
`;

const success = () => css`
    background: #8cbf26;
    color: #155724;
    padding: 10px;
    display: block;
    cursor: pointer;
`;

const warning = () => css`
    background: #ffeeba;
    color: #856404;
    padding: 5px;
    display: block;
    cursor: pointer;
    margin-bottom: 30px;
`;

const secondary = () => css`
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    transition: color .15s;
    &:hover {
        background-color: #5a6268
    }
`;

export default {
    danger,
    warning,
    success,
    secondary
}
