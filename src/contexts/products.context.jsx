import { createContext, useState } from "react";

import data from "../assets/db.json";

export const ProductContext = createContext({
  products: [],
  categories: [],
});

export const ProductProvider = ({ children }) => {
  // eslint-disable-next-line
  const [products, setProducts] = useState(data.products);
  // eslint-disable-next-line
  const [categories, setCategories] = useState(Object.values(data.categories));
  const value = { products, categories };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
