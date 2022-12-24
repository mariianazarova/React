import styled from "styled-components";

const Title = () => {
  return <TitleStyled>Burger App</TitleStyled>;
};

const TitleStyled = styled.h1({
  textAlign: "center",
  fontFamily: "Original Burger Font",
  textTransform:"uppercase",
  paddingLeft:"14%",
 });

export default Title;
