import { CreateAction } from "../../utils/reducers/reducer.util";
import { productReducerTypes } from "./products.types";

export const setProducts = (products) => {
  return CreateAction(productReducerTypes.SET_PRODUCTS, products);
};

export const setCategories = (categories) => {
  return CreateAction(productReducerTypes.SET_CATEGORIES, categories);
};

export const setCategoryProducts = (categoryProducts) => {
  return CreateAction(
    productReducerTypes.SET_CATEGORY_PRODUCTS,
    categoryProducts
  );
};
