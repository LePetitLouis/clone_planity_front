import styled from "styled-components";

export const ShopCardContainer = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 24px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  background-color: var(--white);

  &:hover {
    box-shadow: 0 4px 40px -4px rgb(26 27 31 / 12%);
  }
`;

export const ShopCardImage = styled.img`
  width: auto;
  height: 208px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ShopCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ShopCardTitle = styled.h3`
  font: var(--medium) var(--body-1);
  color: var(--grey-700);
`;

export const ShopCardAddress = styled.span`
  display: flex;
  font: var(--regular) var(--body-5);
  flex-wrap: wrap;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: -2px;
  color: var(--grey-600);
`;