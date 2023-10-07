import { NavTemplate } from "../../component/template/navtemplate";

export const Marketplace = () => {
  return (
    <NavTemplate>
      <div className="flex justify-center items-center ml-24">
        <div className="w-2/3 col-auto ">
          <div className="w-60 h-64 object-cover">
            <img
              src="https://asset-2.tstatic.net/bangka/foto/bank/images/2023121-Samsung-A14-rilis.jpg"
              alt="product-user"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </NavTemplate>
  );
};
