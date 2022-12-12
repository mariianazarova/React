import styled from "styled-components";
import BlogItem from "./BlogItem";

const Blog = () => {
  return (
    <BlogStyle>
      <BlogItem></BlogItem>
      <BlogItem></BlogItem>
      <BlogItem></BlogItem>
      <BlogItem></BlogItem>
    </BlogStyle>
  );
};

const BlogStyle = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "27px",
});

export default Blog;