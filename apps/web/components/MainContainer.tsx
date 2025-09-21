import styled from "styled-components";

export const MainContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  padding-left: 5rem;
  position: fixed;
`;
