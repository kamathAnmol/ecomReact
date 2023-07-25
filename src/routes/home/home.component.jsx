import CategoriesItem from "../../components/categoriesItem/categoriesItem.component";
import "./home.styles.scss";
import data from "../../assets/db.json";

function Home() {
  const categories = Object.values(data.categories);

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
