import { Stack } from "@mui/material";
import styled from "styled-components";
import Loader from "../Loader";
import SingleControl from "./SingleControl";
import { Button, CircularProgress } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Controls = ({
  ingredients,
  updateBurger,
  burgerIngredients,
  loading,
  clearBurger,
}) => {
  return (
    <ControlsStyled
      spacing={3}
      alignItems="center"
      justifyContent="center"
      onClick={updateBurger}
    >
      <TitleStyledCustomize>Customize</TitleStyledCustomize>
      {loading && <Loader />}
      {!loading &&
        ingredients.map((ingredient) => (
          <SingleControl
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
        endIcon={!loading && <KeyboardArrowRightIcon />}
      >
        {!loading ? (
          "Clear All"
        ) : (
          <CircularProgress
            sx={{
              color: "#3a3a3a",
            }}
          />
        )}
      </Button>




     
    </ControlsStyled>
  );
};
const TitleStyledCustomize = styled.h2({
  fontFamily: "Original Burger Font",
  textTransform:"uppercase",
  color:"#ffffff",
 
});
const ControlsStyled = styled(Stack)({
  height: "100%",
  backgroundColor: "#3a3a3a",
  color:"#ffffff",
  fontSize:"18px",
  fontFamily: "Original Burger Font",
  textTransform:"uppercase",
  borderRadius: "15px",
  alignSelf: "center",
  flexBasis: "22%",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
  
});

export default Controls;
