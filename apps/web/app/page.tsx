'use client'
import React, { useState } from "react";
import { ThemeProvider, useTheme } from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "@/components/Footer";
import { MainContainer } from "@/components/MainContainer";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { lightTheme, darkTheme } from "@/styles/theme";
import { Drawer } from "@/components/Drawer";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true)

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <Header>
        <Drawer />
        <Button variant="secondary" onClick={() => setIsLightTheme(!isLightTheme)}>Change theme</Button>
      </Header>
      <MainContainer>
        <Card>Welcome!</Card>
      </MainContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
