import styled from "styled-components";
import React from "react";

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
        <h1> Orders </h1>
        {items.map((item) => (
          <ol key={item.id}>

            First Name: {item.orderName}, Phone: {item.orderPhone}, Email:
            {item.orderEmail}
            Address of order: {item.orderAddress}
            Products of order:
            <li>
                
             {Object.entries(item.Products)}
                      
             </li>     
           
            Price of order: {item.orderPrice}
          </ol>
        ))}
      </OrderStyled>
    );
  }
}

const OrderStyled = styled.div({
  backgroundImage: "grey",
  color: "white",
});

export default Orders;
