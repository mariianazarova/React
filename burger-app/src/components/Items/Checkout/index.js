import { Button, CircularProgress } from "@mui/material";
import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";
import { useState } from "react";

const Checkout = () => {
  const [loading, setLoading] = useState(false); 

  const mockOrderData = {
    orderName: "test",
    orderPhone: "234234",
    orderFast: true,
    orderAddress: "str band",
    orderProducts: {
      bacon: 1,
      tomato: 1,
    },
    orderPrice: 300,
  };

  const handleCheckoutClick = async () => {
    try {
      setLoading(true);
      await axios.post(
        "https://burger-api-xcwp.onrender.com/orders",
        mockOrderData
      );
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

   return (
    <CheckoutStyled>
      <Button
        onClick={handleCheckoutClick}
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#F7C223",
          display: "flex",
          justifyContent: "center",
          width: "160px",
          height: "50px",
          fontFamily: "Original Burger Font",
          textTransform:"uppercase",
          color:"#3a3a3a",
          fontSize:"20px",
          marginTop:"20px",
        }}
        endIcon={!loading && <KeyboardArrowRightIcon />}
      >
        {!loading ? (
          "Order"
        ) : (
          <CircularProgress
            sx={{
              color: "#3a3a3a",
            }}
          />
        )}
      </Button>
      
    </CheckoutStyled>
  );
};

const CheckoutStyled = styled.div({
  display: "flex",
  justifyContent: "center",
});

export default Checkout;
