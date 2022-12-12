import styled from "styled-components";

const Banner = () => {
  return <BannerStyle>Full-width banner image</BannerStyle>;
};

const BannerStyle = styled.div({
  backgroundColor: "#d9d9d9",
  textAlign: "center",
  padding: "64px 0 66px 0",
  marginBottom: "24px",
   fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
});

export default Banner;