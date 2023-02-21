import styled from 'styled-components';

interface props {
    color?: string;
    backgroundColor?: string;
    rounded?: boolean;
    height?: string;
    borderColor?: string;
    width?: string;
    margin?: string;
}

export const ButtonCustom = styled.button<props>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ width }) => width ? width : 'auto'};
    height: ${({ height }) => height ? height : '40px'};
    margin: ${({ margin }) => margin ? margin : '0'};
    border: 1px solid ${({ borderColor }) => borderColor ? borderColor : 'transparent' };
    background-color: ${({ backgroundColor }) => backgroundColor };
    color: ${({ color }) => color };
    font: var(--medium) var(--body-4);
    transition: opacity ease-in .3s;
    border-radius: ${({ rounded }) => rounded ? 'var(--border-radius-medium)' : '0'};
    padding: 8px 12px;
    cursor: pointer;
`;