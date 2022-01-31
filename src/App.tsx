import { useState } from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      
      <Footer />
      <GlobalStyle />
    </>
  );
}