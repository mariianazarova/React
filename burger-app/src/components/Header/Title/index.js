import styled from "styled-components";

const Title = () => {
  return <TitleStyled>Burger App</TitleStyled>;
};

const TitleStyled = styled.h1({
  textAlign: "center",
  flexBasis: "30",
  fontFamily: "Original Burger Font",
 
});

export default Title;
