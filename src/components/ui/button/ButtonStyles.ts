import styled from 'styled-components';

export const ButtonCustom = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border: 0;
    background-color: var(--grey-900);
    color: var(--white);
    font: var(--medium) var(--body-4);
    transition: opacity ease-in .3s;
    border-radius: var(--border-radius-medium);
    padding: 8px 12px;
`;