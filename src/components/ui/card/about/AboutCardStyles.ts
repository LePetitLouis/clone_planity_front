import styled from "styled-components";

export const AboutHeader = styled.h1`
    font: var(--medium) var(--body-1);
    margin-bottom: 12px;
    padding-top: 22px;
`;

export const AboutContainer = styled.div`
    box-shadow: var(--shadow-regular);
    background-color: var(--white);
    border-radius: var(--border-radius-large);
    border: 1px solid var(--grey-200);
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    font: var(--regular) var(--body-4);
    margin-bottom: 22px;
`;