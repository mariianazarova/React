import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";
import Title from "./Title";

const Header = (props) => {
  return (
    <HeaderStyled>
      <Logo />
      <Title />
      <Menu />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div({
  height: "10vh",
  padding: "0 15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color:"#ffffff",
});

export default Header;
