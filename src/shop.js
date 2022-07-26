import ProductGrid from "./components/ProductGrid";
import { Routes, Route } from "react-router-dom";
import Category from "./category";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./store/category/category.reducer";
import { useEffect } from "react";
const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <Routes>
      <Route index element={<ProductGrid />} />
      <Route path="/:category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
