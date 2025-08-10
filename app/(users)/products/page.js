const Products = async ({ searchParams }) => {
 // for server components, searchParams is a Promise
  const value = await searchParams;
  console.log("Products:", value);
  return (
    <div>
      <div>category: {value.category}</div>
      <div>Sortby:{value.sort}</div>
    </div>
  );
};
export default Products;
