import CategoriesItem from "../../components/categoriesItem/categoriesItem.component";
import { ProductContext } from "../../contexts/products.context";
import "./home.styles.scss";
import { useContext } from "react";

function Home() {
  const { categories } = useContext(ProductContext);

  return (
    <div className="categories-container">
      {categories.map((category, index) => {
        return (
          <CategoriesItem category={category} key={index}></CategoriesItem>
        );
      })}
    </div>
  );
}

export default Home;
