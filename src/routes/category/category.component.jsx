import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/products.context";
import ShopItem from "../../components/shopItem/shopItem.component";
import {
  CategoryContainer,
  CategoryHead,
  CategoryList,
} from "./category.styles";

function Category() {
  const category = useParams().category;
  const { setCategoryName, categoryProducts } = useContext(ProductContext);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    setCategoryName(category);
    setProductList(categoryProducts);
  }, [category, categoryProducts, setCategoryName]);
  console.log(categoryProducts);
  return (
    <CategoryContainer>
      <CategoryHead>{category}</CategoryHead>
      <CategoryList>
        {productList.map((product) => {
          return <ShopItem product={product} key={product.id}></ShopItem>;
        })}
      </CategoryList>
    </CategoryContainer>
  );
}

export default Category;
