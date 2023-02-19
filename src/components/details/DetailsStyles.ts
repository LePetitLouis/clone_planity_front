import styled from "styled-components";

export const DetailsContainer = styled.div`
    width: 100%;
    max-width: calc(1176px + 2*var(--gutter));
    padding-left: var(--gutter);
    padding-right: var(--gutter);
    margin-left: auto;
    margin-right: auto;
    padding-top: 64px;
`;

export const DetailsHeader = styled.div`
    display: flex;
    flex-direction: column-reverse;
    padding-top: 32px;
`;

export const DetailsHeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const DetailsHeaderTitle = styled.h1`
    font: var(--semibold) var(--title-3);
    margin: 0;
`;

export const DetailsHeaderAddress = styled.span`
  display: flex;
  font: var(--regular) var(--body-5);
  flex-wrap: wrap;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: -2px;
  color: var(--grey-600);
`;

export const DetailsTitle = styled.h1`
    font: var(--semibold) var(--title-3);
    margin: 32px 0 0 0;
`;

export const DetailsSubtitle = styled.h2`
    font: var(--regular) var(--body-3);
    color: var(--grey-600);
    margin-top: 4px;
`;

export const DetailsContent = styled.div`
    display: flex;
    gap: 20px;
    margin-right: calc(12px * -0.5);
    padding-top: 32px;
    margin-left: 0;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 0;
    margin-top: 0;
`;

export const DetailsContentMain = styled.main`
    flex: 1;
`;

export const DetailsContentAside = styled.aside`
    min-width: calc(33.3333333333% - 12px - 0.3333333333px);
    max-width: calc(33.3333333333% - 12px - 0.3333333333px);
`;

export const DetailsContentTitle = styled.h1`
    font: var(--semibold) var(--title-3);
`;