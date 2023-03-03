import styled from "styled-components";

export const HomeTraderMain = styled.div`
  width: 100%;
  max-width: calc(1176px + 2*var(--gutter));
  padding-left: var(--gutter);
  padding-right: var(--gutter);
  margin-left: auto;
  margin-right: auto;
  padding-top: 64px;
`

export const HomeTraderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0px 32px 22px;
  box-shadow: var(--shadow-regular);
  background-color: var(--white);
  border-radius: var(--border-radius-large);
  border: 1px solid var(--grey-200);
  margin-bottom: 22px;
`

export const HomeTraderContainerCard = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  gap: 16px;
  padding-top: 16px;
  cursor: pointer;
`

export const HomeTraderCardText = styled.p`
  font: var(--regular) var(--body-4);
  color: var(--grey-600);
  margin: 0px;
`