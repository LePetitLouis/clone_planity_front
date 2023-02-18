import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius-medium);
    position: relative;

    &.focused {
        box-shadow: inset 0 0 0 1px var(--grey-700);
        background-color: var(--grey-200);
    }

    &:hover {
        background-color: var(--grey-100);
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

export const SuggestionsContainer = styled.div`
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    background-color: var(--grey-100);
    border-radius: var(--border-radius-medium);
    z-index: 99;
`;

export const SuggestionsList = styled.ul`
    list-style: none;
    padding: 8px 0;
    margin: 0;
`;

export const SuggestionsItem = styled.li`
    padding: 8px 14px;
    font: var(--medium) var(--body-4);
    color: var(--grey-900);
    cursor: pointer;

    &:hover {
        background-color: var(--grey-200);
    }
`;

