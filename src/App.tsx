import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./components/Home";
import Navbar from "./components/Navigation";
import Work from "./components/WorkPages/Work";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customTheme from "./styles/theme";

import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Main from "./components/Main";


export const App = () => (
  <ChakraProvider theme={customTheme}>
    <BrowserRouter>
      <Navbar />

      {/* <ContactBar /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </ChakraProvider>
);
