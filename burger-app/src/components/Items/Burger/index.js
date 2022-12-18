import styled from "styled-components";

const Burger = ({ ingredientAddingOrder, totalPrice }) => {
  return (
    <BurgerStyled>
      <BurgerWrapperStyled>
        <HeadingStyled>Price: {totalPrice} </HeadingStyled>
        <TopBunStyled
          src={require("../../../assets/products/top_bun.png")}
          alt="Top bun"
        />
        {!ingredientAddingOrder.length && (
          <ParagraphStyled>
            Start by adding ingredients to your burger
          </ParagraphStyled>
        )}
        {ingredientAddingOrder.map((product, idx) => {
          return (
            <ProductIMGStyled
              key={product + idx}
              src={require(`../../../assets/products/${product}.png`)}
              alt={product}
              style={{
                bottom: 95 + idx * 9,
                zIndex: idx + 1,
              }}
            />
          );
        })}
        <BottomBunStyled
          src={require("../../../assets/products/bottom_bun.png")}
          alt="Bottom bun"
        />
      </BurgerWrapperStyled>
    </BurgerStyled>
  );
};

const BurgerStyled = styled.section({
  height: "100%",
  alignSelf: "center",
  flexBasis: "40%",
  justifyContent: "center",
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
});

const BurgerWrapperStyled = styled.div({
  position: "relative",
  backgroundColor: "#3a3a3a",
  width: "80%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "15px",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
});

const ParagraphStyled = styled.p({
  position: "absolute",
  top: "60%",
  fontFamily: "Original Burger Font",
  textTransform:"uppercase",
  color:"#ffffff",
  
});

const TopBunStyled = styled.img({
  top: 0,
  zIndex: "999999992",
  width: "300px",
});

const BottomBunStyled = styled.img({
  width: "300px",
});

const ProductIMGStyled = styled.img({
  width: "300px",
  position: "absolute",
});

const HeadingStyled = styled.h1({
  marginBottom: "60px",
  fontFamily: "Original Burger Font",
  textTransform:"uppercase",
  color:"#ffffff",
 });

export default Burger;
