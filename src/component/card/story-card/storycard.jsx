export const StoryCard = () => {
  return (
    <>
      <div className="w-32  text-white border-2  border-white p-1">
        <div className="col-auto" style={{ imageProfile: "" }}>
          <div className=" rounded-full w-5 top-0 h-5">
            <img
              src="https://cdn0-production-images-kly.akamaized.net/lvGqRgI3xxeG3ICjt5zoyGqnZbE=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4480537/original/018147400_1687686028-stylish-woman-spending-time-summer-field_1_.jpg"
              alt="imageprofile"
              width="100px"
              height="100px"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <img
              src="https://www.demico.co/wp-content/uploads/2019/05/kata-bijak-bahasa-inggris-do-more.jpg"
              alt="img-story"
            />
          </div>
          <span>Jamal wicalsono</span>
        </div>
      </div>
    </>
  );
};
