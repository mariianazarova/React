import styled from "styled-components";
import BlogItem from "./BlogItem";

const Blog = () => {
  return (
    <BlogStyle>
      <BlogTitle> Blog </BlogTitle>
      <BlogItem></BlogItem>
      <BlogItem></BlogItem>
      <BlogItem></BlogItem>
      <BlogItem></BlogItem>
    </BlogStyle>
  );
};

const BlogStyle = styled.div({
  width: "810px",
  height:"429px",
  display: "flex",
  flexDirection: "column",
  gap: "27px",
  fontSize: "12px",
  backgroundColor:"#D9D9D9",
});
const BlogTitle = styled.h1({
  marginTop:"10px",
  fontSize: "12px",
  fontWeight:"400",
});
export default Blog;