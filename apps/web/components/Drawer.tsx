import React, { useState } from "react";
import styled from "styled-components";
import { IconHelp, IconHome, IconSettings, IconStats } from "./DrawerIcons";
import { HamburgerButton } from "./HamburgerButton";

export const Drawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HamburgerButton open={open} onClick={() => setOpen(!open)} />

      <Overlay open={open} onClick={() => setOpen(false)} />

      <Container open={open}>
        <Menu>
          <MenuItem>
            <IconHome />
            Home
          </MenuItem>
          <MenuItem>
            <IconStats />
            Estatísticas
          </MenuItem>
          <MenuItem>
            <IconSettings />
            Configurações
          </MenuItem>
          <MenuItem>
            <IconHelp />
            Ajuda
          </MenuItem>
        </Menu>
      </Container>
    </>
  );
};

const Container = styled.nav<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 260px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease;
  z-index: 1000;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
  padding: 2rem 1rem;
`;

const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 900;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20%;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}22;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
