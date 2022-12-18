import styled from "styled-components";
import LanguageSwitcher from "../../Items/LanguageSwitcher";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menuItems = ["Home", "Orders", "Contact", "FAQ"];
  return (
    <MenuStyled>
      <LanguageSwitcher />
      {menuItems.map((item, index) => (
        <MenuItem key={item + index}>{item}</MenuItem>
      ))}
    </MenuStyled>
  );
};

const MenuStyled = styled.ul({
  display: "flex",
  listStyle: "none",
  justifyContent: "flex-end",
  flexBasis: "35%",
  fontFamily: "Original Burger Font",
  textTransform:"uppercase",
});

export default Menu;
