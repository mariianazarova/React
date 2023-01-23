import styled from "styled-components";
import React from "react";
import { SocialIcon } from 'react-social-icons';


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
            <ItemLink href="tel:item.phone"> {item.phone} </ItemLink>
           <p><ItemLink href="mailto:item.email"> {item.email} </ItemLink></p>
           
            <CityStyled>
              <ItemStyled> Ivano-Frankivsk: </ItemStyled> {item.locations.if}
              <ItemStyled> Lviv: </ItemStyled> {item.locations.lviv}
              <ItemStyled> Kyiv: </ItemStyled> {item.locations.kyiv}
            </CityStyled>
            <ElementStyled>Worktime: </ElementStyled>
            {item.worktime}
            <SocialIconStyled>
            <SocialIcon 
          bgColor="#ffffff"
          style={{ height: "32px", width: "32px"}}
            url={item.fb}/>
            <SocialIcon 
            bgColor="#ffffff"
            style={{ height: "32px", width: "32px"}}
            url={item.inst}/>
            <SocialIcon bgColor="#ffffff"
          style={{ height: "32px", width: "32px"}}
            url={item.web}/>
            </SocialIconStyled>
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
const ItemLink = styled.a({
  color: "#ffffff",
  textDecoration:"none"
});
 
const SocialIconStyled = styled.div({
  display: "flex",
  flexDirection: "row",
  marginTop: "10px",
  gap:"10px",
  justifyContent:"center"
});
export default Contact;
