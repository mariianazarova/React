import styled from "styled-components";
import burger from "./../../../assets/burger.png";

const Logo = () => {
  return (
    
      <ImgStyled src={burger} alt="Logo" />
  
  );
};

const ImgStyled = styled.img({
  width:"2%",
  cursor: "pointer",
});

export default Logo;
