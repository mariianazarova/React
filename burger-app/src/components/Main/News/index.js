import styled from "styled-components";
import NewsItem from "./NewsItems";

const News = () => {
  return (
    <NewsStyle>
      <NewsTitle>News</NewsTitle>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
    </NewsStyle>
  );
};

const NewsStyle = styled.div({
  width: "230px",
  height:"429px",
  display: "flex",
  flexDirection: "column",
  gap: "9px",
  backgroundColor:"#D9D9D9",
});
const NewsTitle = styled.h1({
  marginTop:"10px",
  fontSize: "12px",
  fontWeight:"400",
});

export default News;