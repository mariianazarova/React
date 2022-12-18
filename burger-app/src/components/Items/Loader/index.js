import styled from "styled-components";

const Loader = ({ size }) => {
  return <LoaderStyled className="lds-dual-ring"></LoaderStyled>;
};

const LoaderStyled = styled.div({
  height: "40px",
});

export default Loader;
