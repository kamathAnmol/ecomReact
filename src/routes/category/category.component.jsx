import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopItem from "../../components/shopItem/shopItem.component";
import {
  CategoryContainer,
  CategoryHead,
  CategoryList,
} from "./category.styles";
import { useSelector } from "react-redux";
import {
  selectProducts,
  selectIsLoading,
} from "../../store/products/products.selector";
import { MoonLoader } from "react-spinners";

function Category() {
  const category = useParams().category;
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === category.toLocaleLowerCase()
    );
    setProductList(filteredProducts);
  }, [category, products]);
  return (
    <CategoryContainer>
      <CategoryHead>{category}</CategoryHead>
      {isLoading ? (
        <MoonLoader></MoonLoader>
      ) : (
        <CategoryList>
          {productList.map((product) => {
            return <ShopItem product={product} key={product.id}></ShopItem>;
          })}
        </CategoryList>
      )}
    </CategoryContainer>
  );
}

export default Category;
