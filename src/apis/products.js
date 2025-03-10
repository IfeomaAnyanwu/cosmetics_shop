export const fetchProducts = async () => {
  try {
    const response = await fetch("http://localhost:4000/products");
    const products = await response.json();
    return products;
  } catch (err) {
    console.log(err);
  }
};
