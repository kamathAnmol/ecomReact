import { createContext, useState, useEffect } from "react";

import { getProducts } from "../utils/firebase/firebase";
export const ProductContext = createContext({
  products: [],
  categories: [],
});

export const ProductProvider = ({ children }) => {
  // eslint-disable-next-line
  useEffect(() => {
    const getProductData = async () => {
      setProducts(await getProducts());
    };

    getProductData();
  }, []);
  // eslint-disable-next-line
  const [products, setProducts] = useState([]);
  const catList = [];
  products.map((product) => {
    catList.push(product.category);
    return 0;
  });
  const catSet = new Set(catList);
  const categories = [...catSet];
  const value = { products, categories };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};