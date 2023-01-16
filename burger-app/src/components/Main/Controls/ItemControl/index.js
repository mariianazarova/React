import styled from "styled-components";

const ItemControl = ({ ingredient, updateBurger, quantity }) => {
  return (
    <ItemControlStyled
      data-ingredient={ingredient}
      onClick={updateBurger}
    >
      <ButtonItemControl
        data-action="decrement"
        data-ingredient={ingredient}
      > - </ButtonItemControl>
      <QuantityStyled>{quantity}</QuantityStyled>
      <ButtonItemControl
        data-action="increment"
        data-ingredient={ingredient}
      > + </ButtonItemControl>
      <ImageStyled
      src={require(`../../../../assets/ingredients/${ingredient}.png`)}
    ></ImageStyled>
      </ItemControlStyled>
  );
};

const ItemControlStyled = styled.div({ 
  display: "flex",
  minWidth: "15%",
  alignItems: "center",
  justifyContent: "space-around",
});
 

const QuantityStyled = styled.span({
  width: "15px",
  textAlign: "center",
});

const ImageStyled = styled.img({
  width: "32px",
  marginLeft:"20px",
});

const ButtonItemControl = styled.button({
  width: "20px",
  height:"20px",
  backgroundColor:"#ffffff",
  borderRadius:"2px",
  border:"none",
  fontSize:"16px",
  cursor:"pointer",
  margin:"0 16px",
});

export default ItemControl;
export {ImageStyled};