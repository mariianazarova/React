import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from "styled-components";


import {Header, Main} from "./components";
import './index.css';

const App=()=>{
  return (
    <AppWrapper className="App">
      <Container className="container">
      <Header />
       <Main />
      </Container>
    </AppWrapper>
  );
}
const AppWrapper = styled.div({
  height: "100vh",
});

const Container = styled.div({
  width: "100%",
  maxWidth: "1127px",
  margin: "0 auto",
  paddingLeft: "16px",
  paddingRight:"16px",

});
export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <App />

);


