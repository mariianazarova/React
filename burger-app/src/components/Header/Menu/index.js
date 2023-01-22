import styled from "styled-components";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <MenuStyled>
      <Link to="/">Home</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/faq">FAQ</Link>
    </MenuStyled>
  );
};

const MenuStyled = styled.div({
  display: "flex",
  flexDirection: "row",
  listStyle: "none",
  fontFamily: "Original Burger Font",
  textTransform: "uppercase",
  cursor: "pointer",
  gap: "20px",
  color: "#ffffff",
});

export default Menu;
