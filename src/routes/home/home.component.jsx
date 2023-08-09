import CategoriesItem from "../../components/categoriesItem/categoriesItem.component";
import { CategoryContainer } from "./home.styles";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCategories } from "../../store/products/products.selector";
function Home() {
  const categories = useSelector(selectCategories);
  return (
    <CategoryContainer>
      {categories.map((category, index) => {
        return (
          <CategoriesItem category={category} key={index}></CategoriesItem>
        );
      })}
    </CategoryContainer>
  );
}

export default Home;
