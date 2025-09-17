// src/styles/theme.ts
import { DefaultTheme } from "styled-components";

export const lightTheme = {
  colors: {
    background: "#FFFFFF",
    text: "#333333",
    primary: "#584053", // Roxo
    secondary: "#8DC6BF", // Verde água
    accent: "#FCBC66", // Amarelo
    danger: "#F97B4F", // Laranja
    cardBg: "#F9F9F9",
  },
};

export const darkTheme = {
  colors: {
    background: "#1E1E1E",
    text: "#F1F1F1",
    primary: "#8DC6BF", // Verde água ganha destaque no dark
    secondary: "#FCBC66", // Amarelo
    accent: "#F97B4F", // Laranja
    danger: "#FF6B6B",
    cardBg: "#2A2A2A",
  },
};

export const theme: DefaultTheme = lightTheme