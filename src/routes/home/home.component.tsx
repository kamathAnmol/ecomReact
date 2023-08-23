import CategoriesItem from "../../components/categoriesItem/categoriesItem.component";
import { CategoryContainer } from "./home.styles";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectProducts } from "../../store/products/products.selector";
function Home() {
  const products = useSelector(selectProducts);
  const catSet = new Set<string|undefined>();
  products.map((product) => {
    catSet.add(product.category)
    return 0;
  });
  const categories = [...catSet];
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
