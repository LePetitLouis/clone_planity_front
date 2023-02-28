import styled from "styled-components";

export const ListBenefitFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 0 32px;
    box-shadow: var(--shadow-regular);
    background-color: var(--white);
    border-radius: var(--border-radius-large);
    border: 1px solid var(--grey-200);
    padding-bottom: 22px;
    margin-bottom: 22px;
`;

export const ListBenefitFormTitle = styled.h2`
    font: var(--medium) var(--body-1);
    margin: 0;
    padding-top: 22px;
    padding-bottom: 10px;
`;

export const ListBenefitFormSubTitle = styled.h3`
    margin: 0;
    font: var(--regular) var(--body-3);
    color: var(--grey-600);
`;