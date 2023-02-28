import styled from "styled-components";

export const BenefitFormContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding-top: 16px;
    cursor: pointer;

    &:not(:last-child) {
        border-bottom: 1px solid var(--grey-200);
        padding-bottom: 16px;
    }
`;

export const BenefitFormContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
`;

export const BenefitFormTitle = styled.h2`
    font: var(--regular) var(--body-4);
    margin: 0;
`;

export const BenefitFormDescription = styled.p`
    font: var(--regular) var(--body-4);
    color: var(--grey-600);
    margin: 0;
`;

export const BenefitFormTime = styled.p`
    font: var(--regular) var(--body-4);
    color: var(--grey-600);
    margin: 0;
`;

export const BenefitFormPrice = styled.p`
    font: var(--regular) var(--body-4);
    color: var(--grey-600);
    margin: 0;
`;
