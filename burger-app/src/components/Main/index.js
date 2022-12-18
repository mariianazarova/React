import axios from "axios";
import React from "react";
import styled from "styled-components";
import {
  Prices,
  Burger,
  Controls,
  Checkout,
} from "../../components/Items";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      prices: [],
      ingredients: [],
      ingredientAddingOrder: [],
      orderPrice: "1.00",
    };
  }

  componentDidMount = async () => {
    console.log("I was mounted");
    try {
      this.setState({ loading: true });
      const { data } = await axios.get(
        "https://burger-api-xcwp.onrender.com/ingredients"
      );
      const ingredients = data.map((ingredient) => {
        return ingredient.name;
      });

       const quantities = data.reduce(
        (acc, curr) => ({ [curr.name]: 0, ...acc }),
        {}
      );

      this.setState({
        prices: data,
        ingredients: ingredients,
        burgerCreator: quantities,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
   
  };
  findIngredientPrice = (ingredient) => {
       return this.state.prices.find(
      (price) => price.name === ingredient
    ).price;
  };
  handleChangeBurgerIngredientQuantity = (event) => {
    event.preventDefault();
    const tags = ["svg", "path"];
    if (tags.includes(event.target.tagName)) {
      const ingredientClicked =
        event.target.parentNode.dataset["ingredient"] ||
        event.target.dataset["ingredient"]; 
      const actionClicked =
        event.target.dataset["action"] ||
        event.target.parentNode.dataset["action"]; 
      const ingredientPrice =
        this.findIngredientPrice(ingredientClicked);
            this.setState((prevState) => {
     
        const copyBurgerCreator = { ...prevState.burgerCreator };
        const copyIngredientAddingOrder = [
        ...prevState.ingredientAddingOrder,
        ];

        let newPrice = +prevState.orderPrice; 

        if (actionClicked === "decrement") {
          newPrice -= +ingredientPrice;

          const idx =
            copyIngredientAddingOrder.lastIndexOf(ingredientClicked);

          copyIngredientAddingOrder.splice(idx, 1); 
          if (copyBurgerCreator[ingredientClicked] <= 0) {
            return;
          }
          copyBurgerCreator[ingredientClicked]--;
        }
        if (actionClicked === "increment") {
          if (
            copyBurgerCreator[ingredientClicked] < 5 &&
            copyIngredientAddingOrder.length < 10
          ) {
            newPrice += +ingredientPrice;
            copyIngredientAddingOrder.push(ingredientClicked);
            copyBurgerCreator[ingredientClicked]++;
          } else {
            return;
          }
        }
        return {
          ...prevState,
          ingredientAddingOrder: copyIngredientAddingOrder,
          burgerCreator: copyBurgerCreator,
          orderPrice: newPrice.toFixed(2),
        };
      });
    }
  };

  clearBurger = () => {
    const clearerBurgerCreator = {};
    for (const ingredient in this.state.burgerCreator) {
      clearerBurgerCreator[ingredient] = 0;
    }
    if (this.state.ingredientAddingOrder.length !== 0) {
      this.setState({
        ingredientAddingOrder: [],
        burgerCreator: clearerBurgerCreator,
        orderPrice: "1.00",
      });
    }
  };

  render() {
    const {
      prices,
      ingredients,
      burgerCreator,
      loading,
      ingredientAddingOrder,
      orderPrice,
    } = this.state;
    return (
      <>
        <MainWrapper>
          <Prices loading={loading} allPrices={prices} />
          <Burger
            ingredientAddingOrder={ingredientAddingOrder}
            totalPrice={orderPrice}
          />
          <Controls
            ingredients={ingredients}
            updateBurger={this.handleChangeBurgerIngredientQuantity}
            burgerIngredients={burgerCreator}
            loading={loading}
            clearBurger={this.clearBurger}
          />
        </MainWrapper>
        <Checkout />
      </>
    );
  }
}

const MainWrapper = styled.div({
  fontFamily: "Monsterrat Regular",
  height: "70vh",
  display: "flex",
  flexWrap: "no-wrap",
  justifyContent: "center",
});

export default Main;
