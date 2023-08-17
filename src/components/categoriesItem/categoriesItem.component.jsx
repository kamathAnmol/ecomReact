import { ChevronRight } from "lucide-react";
import {
  CategoryBtn,
  CategoryContent,
  CategoryItemContainer,
  CategoryItemImg,
  CategoryName,
} from "./categoriesItem.styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store/products/products.selector";

const CategoriesItem = (props) => {
  const category = props.category;
  const productList = useSelector(selectProducts);
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
        <Link to={`category/${category}`}>
          <CategoryBtn>
            Buy Now <ChevronRight size={20} />
          </CategoryBtn>
        </Link>
      </CategoryContent>
    </CategoryItemContainer>
  );
};

export default CategoriesItem;
