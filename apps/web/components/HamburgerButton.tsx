import React from "react";
import styled from "styled-components";

interface Props {
  open: boolean;
  onClick: () => void;
}

export const HamburgerButton: React.FC<Props> = ({ open, onClick }) => {
  return (
    <Button onClick={onClick}>
      <span />
      <span />
      <span />
    </Button>
  );
};

const Button = styled.button<{ open?: boolean }>`
  position: fixed;
  top: 1rem;
  left: 2rem;
  width: 35px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;

  span {
    height: 4px;
    width: 100%;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  ${({ open }) =>
    open &&
    `
      span:nth-child(1) {
        transform: rotate(45deg) translateY(10px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg) translateY(-10px);
      }
  `}
`;
