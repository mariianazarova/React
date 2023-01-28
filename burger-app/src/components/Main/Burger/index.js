import styled from "styled-components";
import { Button } from "@mui/material";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { Typography } from "@mui/material";

const Burger = ({ ingredientAddToOrder, totalPrice, openCheckoutModal }) => {
  return (
    <BurgerWrapperStyled>
      <TitleStyled>Price: {totalPrice} ₴ </TitleStyled>
      <TopStyled
        src={require("../../../assets/products/top_bun.png")}
        alt="Top"
      />
      {!ingredientAddToOrder.length ? (
        <ParagraphStyled>
          Start by adding ingredients to your burger
        </ParagraphStyled>
      ) : (
        ingredientAddToOrder.map((product, index) => {
          return (
            <ProductImg
              key={product + index}
              src={require(`../../../assets/products/${product}.png`)}
              alt={product}
              style={{
                bottom: 95 + index * 9,
                zIndex: index + 1,
              }}
            />
          );
        })
      )}
      <BottomStyled
        src={require("../../../assets/products/bottom_bun.png")}
        alt="Bottom"
      />
      <CheckoutStyled>
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
              <Button
                onClick={() => {
                  ingredientAddToOrder.length
                    ? openCheckoutModal()
                    : bindTrigger(popupState).onClick();
                }}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#F7C223",
                  display: "flex",
                  justifyContent: "center",
                  width: "160px",
                  height: "50px",
                  fontFamily: "Original Burger Font",
                  textTransform: "uppercase",
                  color: "#3a3a3a",
                  fontSize: "20px",
                  marginTop: "20px",
                }}
              >
                Checkout
              </Button>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Typography sx={{ p: 2 }}>
                  Please fill the burger with ingredients!
                </Typography>
              </Popover>
            </div>
          )}
        </PopupState>
      </CheckoutStyled>
    </BurgerWrapperStyled>
  );
};

const BurgerWrapperStyled = styled.div({
  position: "relative",
  backgroundColor: "#3a3a3a",
  width: "40%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "15px",
});

const ParagraphStyled = styled.p({
  position: "absolute",
  top: "54%",
  fontFamily: "Original Burger Font",
  textTransform: "uppercase",
  color: "#ffffff",
});

const TopStyled = styled.img({
  zIndex: "100",
  width: "300px",
  marginTop: "4%",
});

const BottomStyled = styled.img({
  width: "300px",
  marginBottom: "18%",
});

const ProductImg = styled.img({
  width: "300px",
  position: "absolute",
  marginBottom: "10px",
});

const TitleStyled = styled.h1({
  marginTop: "40px",
  fontFamily: "Original Burger Font",
  textTransform: "uppercase",
  color: "#ffffff",
});

const CheckoutStyled = styled.div({
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  top: "100%",
});
export default Burger;
