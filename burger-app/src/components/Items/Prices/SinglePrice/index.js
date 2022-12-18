import styled from "styled-components";

const SinglePrice = ({ singleName, singlePrice }) => {
  return (
    <SinglePriceStyled>
      {singleName}: {singlePrice} ₴
    </SinglePriceStyled>
  );
};

const SinglePriceStyled = styled.div({
  textAlign: "left",
  margin: "15px 0",
});

export default SinglePrice;
