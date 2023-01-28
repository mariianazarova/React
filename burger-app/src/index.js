import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer, Main } from "./components";

import "./index.css";
import Orders from "./components/Orders";
import Faq from "./components/Faq";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Wrapper className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route id="1" path="/" element={<Main />} />
          <Route id="3" path="/orders" element={<Orders />} />
          <Route id="4" path="/contact" element={<Contact />} />
          <Route id="5" path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  height: "100vh",
});

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
