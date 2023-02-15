import styled from "styled-components";

export const ListShopHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 24px;
  background-color: #EBECEE;
`;

export const ListShopTitle = styled.h2`
  font: var(--semibold) var(--body-3);
  margin: 0;
`;

export const ListShopSubTitle = styled.h3`
  margin: 0;
  font: var(--regular) var(--body-3);
  color: var(--grey-600);
`;

export const ListShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  margin: 0 auto;
  max-width: 1176px;
  width: 100%;
  transition: box-shadow 0.5s ease-in-out 0s;
`;