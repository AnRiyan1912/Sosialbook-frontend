import { useEffect, useState } from "react";
import { ProductCard } from "../../component/card/product-card/productcard";
import { NavTemplate } from "../../component/template/navtemplate";
import { api } from "../../api/axios";

export const Marketplace = () => {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    await api
      .get("/product/spesific")
      .then((result) => setProduct(result.data?.results))
      .catch((err) => console.log(err?.message));
  };
  console.log(product);

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <NavTemplate>
      <div className=" mt-14 h-full w-full 2xl:ml-72 flex">
        <div className=" grid 2xl:grid-cols-7 grid-cols-4 gap-2 max-2xl:ml-80 max-xl:mt-10:">
          <ProductCard product={product} />
        </div>
      </div>
    </NavTemplate>
  );
};
