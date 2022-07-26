import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart/cart.reducer";

const ProductGridCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="relative group ">
      <div className=" relative h-96 md:h-80 w-11/12 md:w-full m-auto">
        <div className=" bg-gradient-to-br rounded-md from-slate-600 to-slate-800 relative h-full ">
          <img
            alt="yeezy"
            className=" rounded-md shadow-md shadow-gray-500 h-full w-full group-hover:opacity-70  transition-all duration-500 "
            src={product.imageUrl}
          />
          <div>
            <div className="flex relative top-4">
              {" "}
              <h4 className="">{product.name}</h4>
              <strong className="ml-auto mr-2">${product.price}</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col gap-2  justify-center items-center h-[38.9vh] bottom-7 md:bottom-0  w-full">
        {/* <button className="opacity-0 border-[1px] border-white transition-opacity duration-700  group-hover:opacity-100 px-3 py-2 rounded-sm bg-green-500 text-gray-50">
        Product Info
      </button> */}
        <button
          onClick={() => dispatch(cartActions.addCartItem(product))}
          className="opacity-0 text-sm bg-opacity-90 border-[1px] border-black transition-opacity duration-700  group-hover:opacity-100 px-3 py-3 rounded-sm bg-gray-50 text-gray-900 hover:bg-black hover:text-gray-50 hover:transition-colors hover:duration-200 "
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductGridCard;
