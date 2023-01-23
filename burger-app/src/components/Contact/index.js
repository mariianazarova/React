import styled from "styled-components";
import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://burger-api-xcwp.onrender.com/contact")
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
      <ContactStyled>
        <TitleContactStyled> Contact </TitleContactStyled>
        {items.map((item) => (
          <ol key={item.id}>
            <p> {item.phone}</p>
            <p>{item.email}</p>
            <CityStyled>
              <ItemStyled> Ivano-Frankivsk: </ItemStyled> {item.locations.if}
              <ItemStyled> Lviv: </ItemStyled> {item.locations.lviv}
              <ItemStyled> Kyiv: </ItemStyled> {item.locations.kyiv}
            </CityStyled>
            <ElementStyled>Worktime: </ElementStyled>
            {item.worktime}
          </ol>
        ))}
      </ContactStyled>
    );
  }
}

const ContactStyled = styled.div({
  width: "50%",
  margin: "0 auto",
  color: "#ffffff",
  fontFamily: "Roboto,Helvetica,Arial,sans-serif",
  textAlign: "center",
  fontWeight: "400",
  fontSize: "1rem",
  lineHeight: "1.5",
  letterSpacing: "0.00938em",
});

const CityStyled = styled.div({
  display: "flex",
  flexDirection: "column",
  marginTop: "10px",
  color: "#ffffff",
});

const ItemStyled = styled.div({
  color: "#f7c223",
});
const ElementStyled = styled.div({
  marginTop: "10px",
  color: "#f7c223",
});
const TitleContactStyled = styled.h2({
  textAlign: "center",
  fontFamily: "Original Burger Font",
  textTransform: "uppercase",
  color: "#f7c223",
  marginBottom: "20px",
});

export default Contact;
