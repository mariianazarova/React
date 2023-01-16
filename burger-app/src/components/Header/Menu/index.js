import styled from "styled-components";

const Menu = () => {
    return (
    <MenuStyled>
                
        <p>Home</p>
        <p>Orders</p>
        <p>Contact</p>
        <p>FAQ</p>

     </MenuStyled>
  );
};

const MenuStyled = styled.div({
  display: "flex",
  flexDirection:"row",
  listStyle: "none",
  fontFamily: "Original Burger Font",
  textTransform:"uppercase",
  cursor: "pointer",
  gap: "20px",
  color:"#ffffff",
});

export default Menu;
