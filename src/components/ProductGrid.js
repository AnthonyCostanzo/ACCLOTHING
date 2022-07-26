import ProductGridCard from "./ProductGridCard";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../store/category/category.selector";
import { ClipLoader } from "react-spinners";
const ProductGrid = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className="m-5">
      <h2 className="mb-2 text-xl">Shop</h2>
      {isLoading ? (
        <div className="text-center">
          <ClipLoader loading={isLoading} size={100} />
        </div>
      ) : (
        <div className="grid first:relative md:grid-cols-2 gap-y-20 md:gap-y-15 lg:grid-cols-4 gap-5">
          {Object.keys(categoriesMap).map((title) => (
            <Fragment key={title}>
              {categoriesMap[title]
                .filter((_, indx) => indx < 4)
                .map((product) => (
                  <ProductGridCard key={product.id} product={product} />
                ))}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductGrid;
