import styled from "styled-components";

const ItemPrice = ({ itemName, itemPrice }) => {
  return (
    <ItemPriceStyled>
      {itemName}: {itemPrice} ₴
    </ItemPriceStyled>
  );
};

const ItemPriceStyled = styled.div({
  textAlign: "left",
  margin: "16px 0",
});

export default ItemPrice;
