import styled from "styled-components";
import Image from "../../Image";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

const SingleControl = ({ ingredient, updateBurger, quantity }) => {
  return (
    <SingleControlStyled
      data-ingredient={ingredient}
      onClick={updateBurger}
    >
      <IndeterminateCheckBoxIcon
        data-action="decrement"
        data-ingredient={ingredient}
      />
      <SpanStyled>{quantity}</SpanStyled>
      <AddBoxIcon
        data-action="increment"
        data-ingredient={ingredient}
      />
      <Image name={ingredient} />
    </SingleControlStyled>
  );
};

const SingleControlStyled = styled.div`
  display: flex;
  min-width: 15vw;
  align-items: center;
  justify-content: space-around;
`;

const SpanStyled = styled.span({
  width: "15px",
  textAlign: "center",
});

export default SingleControl;
