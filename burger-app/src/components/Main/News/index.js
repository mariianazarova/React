import styled from "styled-components";
import NewsItem from "./NewsItems";

const News = () => {
  return (
    <NewsStyle>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
    </NewsStyle>
  );
};

const NewsStyle = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "9px",
});

export default News;