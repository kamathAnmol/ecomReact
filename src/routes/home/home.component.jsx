import CategoriesItem from "../../components/categoriesItem/categoriesItem.component";
import { useEffect } from "react";
import { CategoryContainer } from "./home.styles";
import { getProducts } from "../../utils/firebase/firebase";
import { useDispatch } from "react-redux";
import {
  setProducts,
  setCategories,
} from "../../store/products/products.action";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCategories } from "../../store/products/products.selector";
function Home() {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProductData = async () => {
      const newProducts = await getProducts();
      dispatch(setProducts(newProducts));
      const catList = [];
      newProducts.map((product) => {
        catList.push(product.category);
        return 0;
      });
      const catSet = new Set(catList);
      dispatch(setCategories([...catSet]));
    };
    getProductData();
  }, [dispatch]);
  useEffect(() => {}, []);
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
