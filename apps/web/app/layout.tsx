'use client'
import { Button } from "@/components/Button";
import { Drawer } from "@/components/Drawer";
import { darkTheme, lightTheme } from "@/styles/theme";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLightTheme, setIsLightTheme] = useState(true)

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <Header>
            <Drawer />
            <Button variant="secondary" onClick={() => setIsLightTheme(!isLightTheme)}>Change theme</Button>
          </Header>
          {children}
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}

export const Footer = styled.footer`
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  text-align: center;
  position: fixed;
  bottom: 0;
`;

export const Header = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  display: flex;
  justify-content: end;
  align-items: center;
`;
