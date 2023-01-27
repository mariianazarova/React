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
        <TitleOrderStyled> Orders </TitleOrderStyled>
        <OrderItemStyled>
          <table>
            <tr>
              <th className="first-column">First Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address of order</th>
              <th>Products of order</th>
              <th>Price of order</th>
            </tr>
            {items.slice(0).reverse().map((item) => (
              <tr key={item._id}>
                <td className="first-column"> {item.orderName}</td>
                <td> {item.orderPhone} </td>
                <td> {item.orderEmail}</td>
                <td> {item.orderAddress}</td>
                <td>
                  {Object.keys(item.orderProducts).map((ingredient) => {
                    return (
                      <span key={ingredient}>
                        {ingredient}: {item.orderProducts[ingredient]}
                        &nbsp;&nbsp;
                      </span>
                    );
                  })}
                </td>
                <td>{item.orderPrice}</td>
              </tr>
            ))}
          </table>
        </OrderItemStyled>
      </OrderStyled>
    );
  }
}

const OrderStyled = styled.div({
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
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "20px",
  color: "white",
  backgroundColor: "#3a3a3a",
  borderRadius: "10px",
});

export default Orders;
