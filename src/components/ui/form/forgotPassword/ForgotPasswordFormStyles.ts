import styled from "styled-components";

export const ForgotPasswordFormContainer = styled.div`
    max-width: calc(400px + 2*var(--gutter));
    padding: 20px var(--gutter);
    width: 100%;
`;

export const ForgotPasswordFormTitle = styled.h1`
    font: var(--medium) var(--body-1);
    margin-bottom: 20px;
    text-align: center;
    margin-top: 0;
`;

export const ForgotPasswordFormContent = styled.form`
    display: flex;
    flex-direction: column;
`;

export const ForgotPasswordFormLink = styled.a`
    background-image: linear-gradient(90deg, currentColor, currentColor);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: left 1.45em;
    padding-bottom: 0.2em;
    margin-bottom: -0.2em;
    font: var(--medium) var(--body-4);
    color: inherit;
    width: fit-content;
    margin: 15px 0;
`;

export const ForgotPasswordFormSeparator = styled.span`
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
