import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu";
import Title from "./Title";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Title />
      <Menu />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div({
  height: "10%",
  paddingLeft: "16px",
  paddingRight: "16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#ffffff",
});

export default Header;
