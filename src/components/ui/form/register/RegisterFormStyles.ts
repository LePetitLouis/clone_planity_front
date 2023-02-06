import styled from "styled-components";

export const RegisterFormContainer = styled.div`
    max-width: calc(400px + 2*var(--gutter));
    padding: 20px var(--gutter);
    width: 100%;
`;

export const RegisterFormTitle = styled.h1`
    font: var(--medium) var(--body-1);
    margin-bottom: 20px;
    text-align: center;
    margin-top: 0;
`;

export const RegisterFormContent = styled.form`
    display: flex;
    flex-direction: column;
`;

export const RegisterFormSeparator = styled.span`
    font: var(--bold) var(--label-2);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    color: var(--grey-600);
    margin-top: 32px;
    margin-bottom: 32px;

    &::before {
        content: "";
        flex: 1;
        height: 1px;
        background-color: var(--grey-300);
        margin-right: 16px;
    }

    &::after {
        content: "";
        flex: 1;
        height: 1px;
        background-color: var(--grey-300);
        margin-left: 16px;
    }
`;
