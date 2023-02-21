import styled from "styled-components";

export const TimeSlotContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: 0px;
    margin-right: 0px;
    gap: 8px;
`;

export const TimeSlot = styled.div`
    max-width: 125px;
    width: 100%;
`;

export const TimeSlotHeader = styled.div`
    font: var(--medium) var(--body-4);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 14px;
    max-width: 118px;
    width: auto;
`;

export const TimeSlotHeaderDay = styled.h1`
    font: var(--medium) var(--body-4);
`;

export const TimeSlotHeaderDate = styled.span`
    font: var(--medium) var(--body-4);
    color: var(--grey-600);
`;

export const TimeSlotContent = styled.div`
    transition: height var(--timing-short) var(--ease-out);
    max-width: 118px;
    display: flex;
    flex-direction: column;
    margin-top: -4px;
    margin-bottom: -4px;
    flex-wrap: nowrap;
    align-items: center;
`;