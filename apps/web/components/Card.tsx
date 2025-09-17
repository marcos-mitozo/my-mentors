import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: background 0.2s ease;
`;
