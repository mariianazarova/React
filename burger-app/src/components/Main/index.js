import axios from "axios";
import React from "react";
import styled from "styled-components";
import Prices from "./Prices";
import Burger from "./Burger";
import Controls from "./Controls";
import Modal from "../Modal";
import { Dialog } from "@mui/material";
import { DialogContent } from "@mui/material";
import DialogContentText from "@mui/material/DialogContentText";
import { useEffect, useState } from "react";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isOrderPostRequestModalOpen, setIsOrderPostRequestModalOpen] =
    useState(false);
  const [orderPostRequestMessage, setOrderPostRequestMessage] = useState("");
  const [prices, setPrices] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [ingredientAddToOrder, setIngredientAddToOrder] = useState([]);
  const [burgerCreator, setBurgerCreator] = useState({});
  const [orderPrice, setOrderPrice] = useState("1.00");

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://burger-api-xcwp.onrender.com/ingredients")
      .then((result) => {
        setPrices(result.data);

        setIngredients(
          result.data.map((ingredient) => {
            return ingredient.name;
          })
        );

        setBurgerCreator(
          result.data.reduce((arr, el) => ({ [el.name]: 0, ...arr }), {})
        );

        setLoading(false);
      });
  }, []);

  const findPriceOfIngredient = (ingredient) => {
    return prices.find((price) => price.name === ingredient).price;
  };
  const changeIngredientQuantity = (event) => {
    event.preventDefault();

    const ingredientClicked =
      event.target.parentNode.dataset["ingredient"] ||
      event.target.dataset["ingredient"];

    const actionClicked =
      event.target.dataset["action"] ||
      event.target.parentNode.dataset["action"];

    const ingredientPrice = findPriceOfIngredient(ingredientClicked);

    const copyBurgerCreator = { ...burgerCreator };
    const copyIngredientAddToOrder = [...ingredientAddToOrder];

    let newPrice = +orderPrice;

    if (actionClicked === "decrement") {
      newPrice -= +ingredientPrice;

      const index = copyIngredientAddToOrder.lastIndexOf(ingredientClicked);

      copyIngredientAddToOrder.splice(index, 1);
      if (copyBurgerCreator[ingredientClicked] <= 0) {
        return;
      }
      copyBurgerCreator[ingredientClicked]--;
    }
    if (actionClicked === "increment") {
      if (
        copyBurgerCreator[ingredientClicked] < 5 &&
        copyIngredientAddToOrder.length < 10
      ) {
        newPrice += +ingredientPrice;
        copyIngredientAddToOrder.push(ingredientClicked);
        copyBurgerCreator[ingredientClicked]++;
      } else {
        return;
      }
    }

    setIngredientAddToOrder(copyIngredientAddToOrder);
    setBurgerCreator(copyBurgerCreator);
    setOrderPrice(newPrice.toFixed(2));
  };

  const clearBurger = () => {
    const clearerBurgerCreator = {};
    for (const ingredient in burgerCreator) {
      clearerBurgerCreator[ingredient] = 0;
    }
    if (ingredientAddToOrder.length !== 0) {
      setIngredientAddToOrder([]);
      setBurgerCreator(clearerBurgerCreator);
      setOrderPrice("1.00");
    }
  };

  const openCheckoutModal = () => {
    setIsCheckoutModalOpen(true);
  };

  const closeCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
  };

  const openOrderPostRequestModal = (message) => {
    console.log(message);

    setIsOrderPostRequestModalOpen(true);
    setOrderPostRequestMessage(message);
  };
  const closeOrderPostRequestModal = () => {
    setIsOrderPostRequestModalOpen(false);
    setOrderPostRequestMessage("");

    clearBurger();
  };

  return (
    <MainWrapper>
      <Prices loading={loading} prices={prices} />
      <Burger
        ingredientAddToOrder={ingredientAddToOrder}
        totalPrice={orderPrice}
        openCheckoutModal={openCheckoutModal}
      />
      <Controls
        ingredients={ingredients}
        updateBurger={changeIngredientQuantity}
        burgerIngredients={burgerCreator}
        loading={loading}
        clearBurger={clearBurger}
      />

      <Modal
        isOpen={isCheckoutModalOpen}
        burgerIngredients={burgerCreator}
        totalPrice={orderPrice}
        closeCheckoutModal={closeCheckoutModal}
        openOrderPostRequestModal={openOrderPostRequestModal}
        clearBurger={clearBurger}
      ></Modal>
      <Dialog
        open={isOrderPostRequestModalOpen}
        clearBurger={clearBurger}
        onClose={closeOrderPostRequestModal}
        aria-describedby="alert-dialog-description"
      >
        <DialogContent
          sx={{
            width: "500px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              fontSize: "24px",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            {orderPostRequestMessage}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </MainWrapper>
  );
};

const MainWrapper = styled.div({
  height: "70%",
  display: "flex",
  flexWrap: "no-wrap",
  justifyContent: "center",
  gap: "40px",
});

export default Main;
