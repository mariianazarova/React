import styled from "styled-components";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <MenuStyled>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/orders">Orders</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
      <StyledLink to="/faq">FAQ</StyledLink>
    </MenuStyled>
  );
};

const MenuStyled = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  listStyle: "none",
  fontFamily: "Original Burger Font",
  textTransform: "uppercase",
  cursor: "pointer",
  color: "#ffffff",
});

export default Menu;
