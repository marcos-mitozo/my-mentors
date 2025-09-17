import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  display: flex;
  justify-content: end;
  align-items: center;
`;
