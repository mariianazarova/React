import axios from "axios";
import React from "react";
import styled from "styled-components";
import Prices from "./Prices";
import Burger from "./Burger";
import Controls from "./Controls";
import Modal  from "../Modal";


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      isCheckoutModalOpen: false,
      prices: [],
      ingredients: [],
      ingredientAddToOrder: [],
      burgerCreator:{},
      orderPrice: "1.00",
    };
  }

  componentDidMount = async () => {
      try {
      this.setState({ loading: true });
      const { data } = await axios.get(
        "https://burger-api-xcwp.onrender.com/ingredients"
      );
      const ingredients = data.map((ingredient) => {
        return ingredient.name;
      });

       const quantities = data.reduce(
        (arr, el) => ({ [el.name]: 0, ...arr }),
        {}
      );

      this.setState({
        prices: data,
        ingredients: ingredients,
        burgerCreator: quantities,
      });
    } catch (error) {
      console.log(error);
    } finally{
      this.setState({
        loading: false,
      });
    }
   
  };
  findPriceOfIngredient = (ingredient) => {
       return this.state.prices.find(
      (price) => price.name === ingredient
    ).price;
  };
 changeIngredientQuantity = (event) => {
    event.preventDefault();
    
    const ingredientClicked =
    event.target.parentNode.dataset["ingredient"] ||
    event.target.dataset["ingredient"]; 
        
    const actionClicked =
    event.target.dataset["action"] ||
    event.target.parentNode.dataset["action"]; 

    const ingredientPrice =
    this.findPriceOfIngredient(ingredientClicked);
    this.setState((prevState) => {
     
    const copyBurgerCreator = { ...prevState.burgerCreator };
    const copyIngredientAddToOrder = [
     ...prevState.ingredientAddToOrder,
        ];

    let newPrice = +prevState.orderPrice; 

        if (actionClicked === "decrement") {
          newPrice -= +ingredientPrice;

          const index =
            copyIngredientAddToOrder.lastIndexOf(ingredientClicked);

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
        return {
          ...prevState,
          ingredientAddToOrder: copyIngredientAddToOrder,
          burgerCreator: copyBurgerCreator,
          orderPrice: newPrice.toFixed(2),
        };
      });
    
  };

  clearBurger = () => {
    const clearerBurgerCreator = {};
    for (const ingredient in this.state.burgerCreator) {
      clearerBurgerCreator[ingredient] = 0;
    }
    if (this.state.ingredientAddToOrder.length !== 0) {
      this.setState({
        ingredientAddToOrder: [],
        burgerCreator: clearerBurgerCreator,
        orderPrice: "1.00",
      });
    }
  };
  openCheckoutModal=()=>{
    this.setState({isCheckoutModalOpen:true});
  }
  closeCheckoutModal=()=>{
    this.setState({isCheckoutModalOpen:false});
  }
  render() {
    const {
      prices,
      ingredients,
      burgerCreator,
      loading,
      ingredientAddToOrder,
      isCheckoutModalOpen,
      orderPrice,
    } = this.state;
    return (
     
        <MainWrapper>
          <Prices loading={loading} prices={prices} />
          <Burger
            ingredientAddToOrder={ingredientAddToOrder}
            totalPrice={orderPrice}
            openCheckoutModal={this.openCheckoutModal}
          />
          <Controls
            ingredients={ingredients}
            updateBurger={this.changeIngredientQuantity}
            burgerIngredients={burgerCreator}
            loading={loading}
            clearBurger={this.clearBurger}
          />
          <Modal isOpen={isCheckoutModalOpen} 
           burgerIngredients={burgerCreator}
           totalPrice={orderPrice}
          closeCheckoutModal={this.closeCheckoutModal}>

          </Modal>
        </MainWrapper>
           
    );
  }
}

const MainWrapper = styled.div({
  height: "70%",
  display: "flex",
  flexWrap: "no-wrap",
  justifyContent: "center",
  gap:"40px",
  
});

export default Main;
