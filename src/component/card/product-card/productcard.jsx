export const ProductCard = ({ product }) => {
  return (
    <>
      {product?.map((item, key) => {
        return (
          <div className="col-auto w-full bg-white p-2" key={key}>
            <div
              className=" object-cover w-48 h-48 rounded-md object-fill"
              style={{
                backgroundImage: `url(${item?.image_product})`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="p-2 mt-2">
              <div className="font-semibold">
                <span>Samsung</span>
              </div>
              <div>
                <span>Rp {item?.price}</span>
              </div>
              <div className="text-sm">
                <span>
                  {item?.provinces?.province_name +
                    ", " +
                    item?.cities.city_name}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
