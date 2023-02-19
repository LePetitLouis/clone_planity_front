import styled from "styled-components";

export const BenefitCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding-top: 16px;

    &:not(:last-child) {
        border-bottom: 1px solid var(--grey-200);
        padding-bottom: 16px;
    }
`;

export const BenefitCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
`;

export const BenefitCardTitle = styled.h2`
    font: var(--regular) var(--body-4);
    margin: 0;
`;

export const BenefitCardDescription = styled.p`
    font: var(--regular) var(--body-4);
    color: var(--grey-600);
    margin: 0;
`;

export const BenefitCardTime = styled.p`
    font: var(--regular) var(--body-4);
    color: var(--grey-600);
    margin: 0;
`;

export const BenefitCardPrice = styled.p`
    font: var(--regular) var(--body-4);
    color: var(--grey-600);
    margin: 0;
`;
