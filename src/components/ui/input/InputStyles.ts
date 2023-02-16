import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius-medium);

    &.focused {
        box-shadow: inset 0 0 0 1px var(--grey-700);
        background-color: var(--grey-200);
    }
`;

export const LabelCustom = styled.label`
    font: var(--medium) var(--body-4);
    color: var(--grey-500);
    padding: 8px 14px;
`;

export const InputCustom = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border: none;
    background-color: transparent;
    font: var(--medium) var(--body-4);
    transition: opacity ease-in .3s;

    &:focus {
        outline: none;
    }
`;