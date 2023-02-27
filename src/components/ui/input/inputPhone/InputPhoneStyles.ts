import styled from "styled-components";

export const InputPhoneContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px 0;
`;

export const LabelCustom = styled.label`
    font: var(--medium) var(--body-4);
`;

export const InputPhoneError = styled.span`
    font: var(--medium) var(--body-4);
    color: var(--danger-200);
    margin-top: 4px;
`;