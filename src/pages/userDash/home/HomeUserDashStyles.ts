import styled from "styled-components";

export const HomeUserDashContainer = styled.div`
    width: 100%;
    max-width: calc(1176px + 2*var(--gutter));
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin: 0 auto 126px;
    align-items: flex-start;
    padding-right: 0;
    padding-top: 84px;
`;

export const HomeUserDashContent = styled.div`
    flex: 1;
`;

export const HomeUserDashMenu = styled.div`
    border: 1px solid var(--grey-200);
    padding: 32px 24px 24px;
    border-radius: var(--border-radius-large);
    min-width: calc(33.3333333333% - var(--gutter) - 0.0833333333px);
    max-width: calc(33.3333333333% - var(--gutter) - 0.0833333333px);
    flex-shrink: 0;
    box-shadow: var(--shadow-regular);
`;

export const HomeUserDashMenuTitle = styled.h2`
    font: var(--medium) var(--body-1);
    margin-bottom: 20px;
`;

export const HomeUserDashMenuDescription = styled.p`
    margin-bottom: 14px;
    color: var(--grey-600);
    font: var(--regular) var(--body-3);
`;

export const HomeUserDashMenuList = styled.ul`
    display: grid;
    grid: auto-flow/1fr;
    gap: 14px;
    font: var(--regular) var(--body-3);
    margin-top: 12px;
    cursor: pointer;
    list-style-type: none;
`;

export const HomeUserDashMenuListItem = styled.li`
    color: var(--grey-600);
    transition: color var(--timing-short) var(--ease-in-out);

    &.active {
        font-weight: var(--semibold);
        color: var(--grey-700);
    }

    &.danger {
        color: var(--danger-200);
    }
`;

export const HomeUserDashMenuDivider = styled.div`
    height: 1px;
    background-color: var(--grey-200);
    margin: 10px 0;
`;

export const HomeUserDashInfos = styled.div`
    width: 100%;
    padding: 32px;
    box-shadow: var(--shadow-regular);
    background-color: var(--white);
    border-radius: var(--border-radius-large);
    border: 1px solid var(--grey-200);
    margin-bottom: 24px;
`;

export const HomeUserDashForm = styled.form`
    display: flex;
    flex-direction: column;
`;

