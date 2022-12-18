import styled from "styled-components";

const MenuItem = ({ children }) => {
  return <MenuItemStyled>{children}</MenuItemStyled>;
};

const MenuItemStyled = styled.li({
  cursor: "pointer",
  marginLeft: "15px",
  color:"#ffffff",

});

export default MenuItem;
