import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import background from "./assets/bg.jpg";

import { Header, Footer, Main } from "./components";

import "./index.css";

const App = () => {
  return (
    <Wrapper className="App">
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div({
  height: "100vh",
  backgroundImage: `url(${background})`,
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "repeat",
});

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
