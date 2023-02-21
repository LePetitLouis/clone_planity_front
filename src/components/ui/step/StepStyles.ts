import styled from "styled-components";

export const StepHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 32px;
    cursor: default;
    margin-bottom: 8px;
`;

export const StepNumber = styled.p`
    margin-right: 4px;
    color: var(--primary-200);
    font: var(--medium) var(--body-1);
`;

export const StepTitle = styled.h1`
    font: var(--medium) var(--body-1);
`;

export const StepContainer = styled.div`
    font: var(--medium) var(--body-4);
    padding: 20px 32px;
    margin-bottom: 12px;
    box-shadow: var(--shadow-regular);
    background-color: var(--white);
    border-radius: var(--border-radius-large);
    border: 1px solid var(--grey-200);
    display: flex;
    align-items: center;
`;