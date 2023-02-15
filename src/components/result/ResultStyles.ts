import styled from "styled-components";

export const ResultContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  align-items: center;
  justify-content: center;
  padding-top: 64px;
`;

export const ResultContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 2;
  background-color: var(--grey-100);
  overflow: hidden;
  overflow-y: scroll;
`;

export const ResultMap = styled.div`
  flex: 1;
  height: 100%;
`;
  