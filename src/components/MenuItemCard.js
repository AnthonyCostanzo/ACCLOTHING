import { Link } from "react-router-dom";
const MenuItemCard = ({ styles, url, title, link }) => (
  <div
    className={`${styles} flex items-center group bg-black justify-center relative rounded-sm shadow-md shadow-gray-500`}
  >
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "",
        backgroundPosition: "center",
      }}
      className="absolute group-hover:scale-110 duration-1000 transition-all opacity-70 bg-contain h-full w-full"
    ></div>
    <Link to={link}>
      <p className="text-xl cursor-pointer text-gray-800 opacity-80 group-hover:opacity-100 flex-col flex items-center hover:bg-opacity-90 transition-all border-[1px] border-black duration-500 bg-opacity-80 justify-center z-1 relative font-semibold bg-slate-200 h-28 w-32 ">
        {title}
        <small className="cursor-pointer h-max w-max text-gray-800 opacity-70 hover:opacity-100 flex items-center transition-all duration-500  justify-center z-1 relative font-semibold">
          Shop Now
        </small>
      </p>
    </Link>
  </div>
);

export default MenuItemCard;
