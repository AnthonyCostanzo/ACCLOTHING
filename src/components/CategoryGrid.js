import ProductGridCard from "./ProductGridCard";

const CategoryGrid = ({ products, category }) => {
  return (
    <div className="m-5 min-h-max pb-10">
      <h2 className="text-xl font-semibold mb-2 font-[Times]">
        {category[0].toUpperCase() + category.slice(1)}
      </h2>
      <div className="grid first:relative md:grid-cols-2 gap-y-20 md:gap-y-15 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductGridCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
