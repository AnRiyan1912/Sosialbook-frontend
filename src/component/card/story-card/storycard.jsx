export const StoryCard = () => {
  return (
    <>
      <div
        className="w-36 h-56 rounded-lg text-black border-2  border-white p-1 object-cover col-auto"
        style={{
          backgroundImage: `url(https://www.demico.co/wp-content/uploads/2019/05/kata-bijak-bahasa-inggris-do-more.jpg)`,
        }}
      >
        <div className="col-auto" style={{ imageProfile: "" }}>
          <div className=" rounded-full  top-0 ">
            <img
              src="https://cdn0-production-images-kly.akamaized.net/lvGqRgI3xxeG3ICjt5zoyGqnZbE=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4480537/original/018147400_1687686028-stylish-woman-spending-time-summer-field_1_.jpg"
              alt="imageprofile"
              className="w-6 h-6 rounded-full"
            />
          </div>
          <div className="bottom-0 mt-40 ">
            <span>Jamal wicalsono</span>
          </div>
        </div>
      </div>
    </>
  );
};
