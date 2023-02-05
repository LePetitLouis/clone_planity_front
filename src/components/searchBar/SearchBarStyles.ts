import styled from "styled-components";

export const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    border-radius: var(--border-radius-medium);
    background-color: var(--white);
    box-shadow: var(--shadow-regular);
    padding: 12px 32px 12px 18px;
    width: 100%;
    max-width: 976px;
`;

export const SearchBarSeparator = styled.div`
    width: 1px;
    height: 100%;
    background-color: var(--grey-200);
`;
