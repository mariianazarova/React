import styled from "styled-components";

const Title = () => {
  return <TitleStyle>Blog name</TitleStyle>;
};

const TitleStyle = styled.h1({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
  marginLeft: "115px",
});

export default Title;