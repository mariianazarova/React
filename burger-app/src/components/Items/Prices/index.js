import { Stack } from "@mui/material";
import styled from "styled-components";
import Loader from "../Loader";
import SinglePrice from "./SinglePrice";

const Prices = ({ allPrices, loading }) => {
  return (
    <PricesStyled
      direction="column"
      spacing={3}
      alignItems="center"
      justifyContent="center"
    >
      <TitleStyledPrice>Prices</TitleStyledPrice>
      <PricesWithLoader>
        {loading && <Loader />}
        {!loading &&
          allPrices.map((price) => {
            const { name: ingredientName, price: ingredientPrice } =
              price;
            return (
              <SinglePrice
                key={ingredientName + ingredientPrice}
                singleName={ingredientName}
                singlePrice={ingredientPrice}
              />
            );
          })}
      </PricesWithLoader>
    </PricesStyled>
  );
};
const TitleStyledPrice = styled.h2({
  textAlign: "center",
  fontFamily: "Original Burger Font",
 
});
const PricesStyled = styled(Stack)({
  height: "100%",
  backgroundColor: "#3a3a3a",
  color:"#ffffff",
  fontSize:"18px",
  fontFamily: "Original Burger Font",
  textTransform:"uppercase",
  borderRadius: "15px",
  alignSelf: "center",
  flexBasis: "22%",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
  
});

const PricesWithLoader = styled.div({
 
});

export default Prices;
