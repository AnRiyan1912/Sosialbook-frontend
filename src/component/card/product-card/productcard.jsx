export const ProductCard = () => {
  return (
    <>
      <div className="col-auto w-full bg-white p-2 ">
        <div
          className=" object-cover w-48 h-48 rounded-md object-fill"
          style={{
            backgroundImage: `url("https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2021/12/09/2794600268.jpg")`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="p-2 mt-2">
          <div className="font-semibold">
            <span>Samsung</span>
          </div>
          <div>
            <span>Rp 4.000.000</span>
          </div>
          <div className="text-sm">
            <span>Kepulauan Riau, Batam</span>
          </div>
        </div>
      </div>
    </>
  );
};
