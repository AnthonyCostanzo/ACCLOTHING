import MenuItemCard from "./components/MenuItemCard";
const Home = () => (
  <div className="bg-gray-50 ">
    <div className="flex flex-col justify-center items-center mt-5 gap-5 pb-10 ">
      <div className="grid grid-cols-2 w-11/12 md:grid-cols-3 gap-5 md:gap-8 md:w-9/12">
        <MenuItemCard
          link="/shop/sneakers"
          styles="h-48 md:h-72"
          title="Sneakers"
          url="https://images.unsplash.com/photo-1624005340901-e6cffc4e3a32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fG5pa2UlMjBkdW5rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        />
        <MenuItemCard
          link="/shop/hats"
          styles="h-48 md:h-72"
          title="Hats"
          url="https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGF0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
        />
        <MenuItemCard
          link="/shop/jackets"
          styles="col-span-2 md:col-span-1 h-60 md:h-72"
          title="Jackets"
          url="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
        />
      </div>
      <div className="grid grid-cols-2 gap-5 md:gap-7 w-11/12  md:w-9/12">
        <MenuItemCard
          link="/shop/womens"
          styles="h-72 md:h-[44vh]"
          title="Womens"
          url="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
        />
        <MenuItemCard
          link="/shop/mens"
          title="Mens"
          url="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          styles="h-72 md:h-[44vh]"
        />
      </div>
    </div>
  </div>
);

export default Home;
