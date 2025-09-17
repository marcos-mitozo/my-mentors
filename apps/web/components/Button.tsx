import styled from "styled-components";

export const Button = styled.button<{ variant?: "primary" | "secondary" | "danger" }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  color: #fff;
  background: ${({ theme, variant }) => {
    switch (variant) {
      case "secondary":
        return theme.colors.secondary;
      case "danger":
        return theme.colors.danger;
      default:
        return theme.colors.primary;
    }
  }};
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;
