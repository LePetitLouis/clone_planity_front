import styled from "styled-components";

export const CityCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius-medium);
    background-color: var(--white);
    opacity: 1;
    transition: opacity ease-in .3s;
    width: 100%;
    max-width: 976px;
    cursor: pointer;
`;

export const CityCardImage = styled.img`
    width: 100%;
    height: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: var(--border-radius-medium);
`;

export const CityCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    padding: 12px 32px 12px 18px;
`;

export const CityCardTitle = styled.p`
    font: var(--regular) var(--body-4);
    color: var(--grey-600);
`;

export const CityCardDescription = styled.h2`
    font: var(--medium) var(--body-2);
`;