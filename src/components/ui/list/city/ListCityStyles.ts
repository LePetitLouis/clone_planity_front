import styled from "styled-components";

export const ListCityContainer = styled.div`
    flex: 1;
    display: grid;
    grid-gap: 24px;
    margin: auto;
    max-width: calc(1176px + 2*var(--gutter));
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 40px;
`;