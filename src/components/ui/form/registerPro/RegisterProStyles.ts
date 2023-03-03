import styled from "styled-components";

export const TraderRegisterContainer = styled.div`
    max-width: calc(400px + 2*var(--gutter));
    padding: 20px var(--gutter);
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

export const TraderRegisterTitle = styled.h1`
    font: var(--medium) var(--body-1);
    margin-bottom: 20px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 40px;
`;

export const TraderRegisterContent = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;


export const RegisterProContainerCheckbox = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
`

export const RegisterProContainerCheckboxItem = styled.div`
    margin-bottom: 20px;
`