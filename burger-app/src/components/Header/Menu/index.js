import styled from "styled-components";
import ItemMenu from "./ItemMenu";

const Menu = () => {
  const menuItems = ["Home", "Orders", "Contact", "FAQ"];
  return (
    <MenuStyled>
      {menuItems.map((el, index) => (
        <ItemMenu key={el + index}>{el}</ItemMenu>
      ))}
    </MenuStyled>
  );
};

const MenuStyled = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  fontFamily: "Original Burger Font",
  textTransform: "uppercase",
  cursor: "pointer",
});

export default Menu;
