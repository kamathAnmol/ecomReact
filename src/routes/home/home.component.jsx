import CategoriesItem from "../../components/categoriesItem/categoriesItem.component";
import { ProductContext } from "../../contexts/products.context";
import { useContext } from "react";
import { CategoryContainer } from "./home.styles";

function Home() {
  const { categories } = useContext(ProductContext);

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
