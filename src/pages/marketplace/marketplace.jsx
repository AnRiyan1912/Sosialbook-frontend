import { ProductCard } from "../../component/card/product-card/productcard";
import { NavTemplate } from "../../component/template/navtemplate";

export const Marketplace = () => {
  return (
    <NavTemplate>
      <div className=" mt-14 h-full w-full 2xl:ml-72 flex">
        <div className=" grid grid-cols-7 gap-2">
          {Array.from({ length: 50 }).map((i, index) => (
            <ProductCard />
          ))}
        </div>
      </div>
    </NavTemplate>
  );
};
