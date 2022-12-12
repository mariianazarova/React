import styled from "styled-components";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <MenuStyle>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
    </MenuStyle>
  );
};

const MenuStyle = styled.div({
  display: "flex",
  flexDirection:"row",
  gap: "19px",
});

export default Menu;