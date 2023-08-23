import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopItem from "../../components/shopItem/shopItem.component";
import {
  CategoryContainer,
  CategoryHead,
  CategoryList,
} from "./category.styles";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store/products/products.selector";
import { productInterface } from "../../store/products/products.reducer";

function Category() {
  const category = useParams().category;
  const products:productInterface[] = useSelector(selectProducts);
  const [productList, setProductList] = useState<productInterface[]>([]);
  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === category?.toLocaleLowerCase()
    );
    setProductList(filteredProducts);
  }, [category, products]);
  return (
    <CategoryContainer>
      <CategoryHead>{category}</CategoryHead>
      <CategoryList>
        {productList.map((product) => {
          return <ShopItem product={product} key={product.id?.toString()}></ShopItem>;
        })}
      </CategoryList>
    </CategoryContainer>
  );
}

export default Category;
