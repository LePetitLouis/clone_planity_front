import styled from "styled-components";

export const ListCollaboratorHeader = styled.h1`
    font: var(--medium) var(--body-1);
    margin-bottom: 12px;
    padding-top: 22px;
`;

export const ListCollaboratorContainer = styled.div`
    box-shadow: var(--shadow-regular);
    background-color: var(--white);
    border-radius: var(--border-radius-large);
    border: 1px solid var(--grey-200);
    padding: 32px;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 160px;
    overflow: hidden;
    margin-bottom: 22px;
`;