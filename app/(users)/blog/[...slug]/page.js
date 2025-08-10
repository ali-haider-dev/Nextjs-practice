import { use } from "react";

const Blog = ({ params }) => {
  const { slug } = use(params);
  const cleanSlug = slug && decodeURIComponent(slug);
  const slugArray = cleanSlug.split(",");
  console.log("Slug:", slugArray);
  return (
    <>
      <h1>Slugs...</h1>
    </>
  );
};

export default Blog;
