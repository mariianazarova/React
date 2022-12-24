import styled from "styled-components";
import ItemPrice from "./ItemPrice";
import { CircularProgress } from "@mui/material";

const Prices = ({ prices, loading }) => {
  return (
    <PricesStyled>
      <TitlePrice>Prices</TitlePrice>
      <Loader>
        {loading && <CircularProgress
        sx={{
          color: "#ffffff",
        }} />}
        {!loading &&
          prices.map((price) => {
            const { name: ingredientName, price: ingredientPrice } =
              price;
            return (
              <ItemPrice
                key={ingredientName + ingredientPrice}
                itemName={ingredientName}
                itemPrice={ingredientPrice}
              />
            );
          })}
      </Loader>
    </PricesStyled>
  );
};
const TitlePrice = styled.h2({
  textAlign: "center",
  fontFamily: "Original Burger Font",
 
});
const PricesStyled = styled.div({
  height: "100%",
  backgroundColor: "#3a3a3a",
  color:"#ffffff",
  fontSize:"18px",
  fontFamily: "Original Burger Font",
  textTransform:"uppercase",
  borderRadius: "15px",
  display:"flex",
  flexDirection:"column",
  alignSelf: "center",
  alignItems:"center",
  justifyContent:"center",
  gap:"20px",
  flexBasis:"22%",
    
});

const Loader = styled.div({});

export default Prices;