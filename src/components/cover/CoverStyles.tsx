import styled from "styled-components";

export const CoverContainer = styled.div`
    background: url("https://res.cloudinary.com/planity/image/upload/v1669112033/portail/illustrations/HOMEPAGE/MAIN/1440-1920/Duo_1.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CoverTitle = styled.h1`
    font: var(--regular) var(--title-alt-5);
    color: var(--white);
    text-align: center;
    margin-bottom: 12px;
    text-shadow: 0 4px 8px rgb(26 27 31 / 8%);
`;

export const CoverSubtitle = styled.h2`
    font: var(--regular) var(--body-3);
    color: var(--white);
    text-align: center;
    margin-bottom: 24px;
`;
