import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CategoryGrid from "./components/CategoryGrid";
import { ClipLoader } from "react-spinners";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "./store/category/category.selector";

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  useEffect(
    () => setProducts(categoriesMap[category]),
    [category, categoriesMap]
  );
  return (
    <>
      {" "}
      {isLoading ? (
        <div className="text-center">
          <ClipLoader loading={isLoading} size={100} />
        </div>
      ) : (
        products &&
        products.length && (
          <CategoryGrid
            key={category}
            products={products}
            category={category}
          />
        )
      )}
    </>
  );
};

export default Category;
