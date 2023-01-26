import styled from "styled-components";
import React from "react";
import { Grid } from "@mui/material";


class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://burger-api-xcwp.onrender.com/orders")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
        });
      });
  }

  render() {
    const { items } = this.state;

    return (
      <OrderStyled>
        <TitleOrderStyled > Orders </TitleOrderStyled >
        <OrderItemStyled>
                  {items.slice(0, 7).map((item) => (
          <Grid>
          <ol key={item._id}>
            <li> First Name: {item.orderName}</li>
            <li> Phone: {item.orderPhone} </li>
            <li> Email:{item.orderEmail}</li>
            <li> Address of order: {item.orderAddress}</li>
            <li>Products of order:</li>
            {Object.keys(item.orderProducts).map((ingredient) => {
              return (
                <li key={ingredient}>
                  {ingredient}: {item.orderProducts[ingredient]}
                </li>
              );
            })}
            Price of order: {item.orderPrice}
          </ol>
          </Grid>
        ))}
      
        </OrderItemStyled>
      </OrderStyled>
    );
   
  }
  
}

const OrderStyled = styled.div({
  backgroundImage: "grey",
  width: "90%",
  margin: "0 auto",
  color: "#ffffff",
  fontFamily: "Roboto,Helvetica,Arial,sans-serif",
  textAlign: "left",
  fontWeight: "400",
  fontSize: "1rem",
  lineHeight: "1.5",
  letterSpacing: "0.00938em",
});
const TitleOrderStyled = styled.h2({
  textAlign: "center",
  fontFamily: "Original Burger Font",
  textTransform: "uppercase",
  color: "#f7c223",
  marginBottom: "20px",
});
const OrderItemStyled = styled.div({
 display:"flex",
 flexDirection:"row",
 flexWrap:"wrap",
 gap:"20px",
  color: "white",
});

export default Orders;
