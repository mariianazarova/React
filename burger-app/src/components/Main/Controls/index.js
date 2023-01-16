import styled from "styled-components";
import ItemControl from "./ItemControl";
import { Button, CircularProgress } from "@mui/material";

const Controls = ({
  ingredients,
  updateBurger,
  burgerIngredients,
  loading,
  clearBurger,
}) => {
  return (
    <ControlsStyled
     onClick={updateBurger}
    >
      <TitleCustomize>Customize</TitleCustomize>
      {loading && <CircularProgress
            sx={{
              color: "#ffffff",
            }}
          />}
      {!loading &&
        ingredients.map((ingredient) => (
          <ItemControl
            quantity={burgerIngredients[ingredient]}
            key={ingredient}
            ingredient={ingredient}
          />
        ))}
        
        <Button
       onClick={clearBurger}
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
      }}
     
      >
      Clear All
      </Button>
     
    </ControlsStyled>
  );
};
const TitleCustomize = styled.h2({
  fontFamily: "Original Burger Font",
  textTransform:"uppercase",
  color:"#ffffff",
 
});
const ControlsStyled = styled.div({
  height: "100%",
  width: "22%",
  backgroundColor: "#3a3a3a",
  color:"#ffffff",
  fontSize:"18px",
  fontFamily: "Original Burger Font",
  textTransform:"uppercase",
  borderRadius: "15px",
  display:"flex",
  flexDirection:"column",
  alignSelf: "center",
  alignItems:"center",
  justifyContent:"center",
  gap:"20px",
    
});

export default Controls;
