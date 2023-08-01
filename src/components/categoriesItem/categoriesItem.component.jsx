import data from "../../assets/db.json";
import { ChevronRight } from "lucide-react";
import {
  CategoryBtn,
  CategoryContent,
  CategoryItemContainer,
  CategoryItemImg,
  CategoryName,
} from "./categoriesItem.styles";

const CategoriesItem = (props) => {
  const category = props.category;
  const productList = data.products;
  let img = "";
  productList.map((product) => {
    if (product.category === category) {
      img = product.thumbnail;
    }
    return 0;
  });
  return (
    <CategoryItemContainer>
      <CategoryItemImg src={img} alt="" />
      <CategoryContent>
        <CategoryName>{category}</CategoryName>
        <CategoryBtn>
          Buy Now <ChevronRight size={20} />
        </CategoryBtn>
      </CategoryContent>
    </CategoryItemContainer>
  );
};

export default CategoriesItem;
