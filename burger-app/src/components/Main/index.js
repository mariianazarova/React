import styled from "styled-components";
import Banner from "./Banner";
import Blog from "./Blog";
import News from "./News";
  
const Main = () => {
    return (
      <MainStyle>
        <Banner />
        <MainItemWrapper>
        <Blog />
        <News />
        </MainItemWrapper>
      </MainStyle>
    );
  };
  
  const MainStyle = styled.div({
    textAlign: "center",
    
  });
  const MainItemWrapper = styled.div({
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-between",
   
  });
  export default Main;