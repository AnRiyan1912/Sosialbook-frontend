import { ProductCard } from "../../component/card/product-card/productcard";
import { NavTemplate } from "../../component/template/navtemplate";

export const Marketplace = () => {
  return (
    <NavTemplate>
      <div className=" mt-14 h-full w-full 2xl:ml-72 flex">
        <div className=" grid 2xl:grid-cols-7 grid-cols-4 gap-2 max-2xl:ml-80">
          {Array.from({ length: 50 }).map((i, index) => (
            <ProductCard />
          ))}
        </div>
      </div>
    </NavTemplate>
  );
};
