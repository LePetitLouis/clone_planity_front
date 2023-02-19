import styled from "styled-components";

interface props {
    strong?: boolean;
}

export const OpeningHoursCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font: var(--regular) var(--body-3);
    max-width: 376px;

    &:not(:last-child) {
        border-bottom: 1px solid var(--grey-200);
        padding-bottom: 16px;
    }
`;

export const OpeningHoursCardDay = styled.p<props>`
    color: var(--grey-600);
    margin: 0;
    font-weight: ${(props) => (props.strong ? "var(--bold)" : "var(--regular)")};
`;

export const OpeningHoursCardTime = styled.p<props>`
    color: var(--grey-600);
    margin: 0;
    font-weight: ${(props) => (props.strong ? "var(--bold)" : "var(--medium)")};
`;