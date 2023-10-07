export const PostCard = () => {
  return (
    <>
      <div className="col-auto">
        <div className="flex gap-2">
          <div>
            <img
              src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"
              alt="profileimage"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          </div>
          <span className="text-sm flex items-center font-semibold">
            Andre Riyanto
          </span>
        </div>
        <div className="col-auto">
          <div className="text-xs">
            <span>Kepulauan Riau,</span>
          </div>
          <div className="text-xs">
            <span>Batam</span>
          </div>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/2526398/pexels-photo-2526398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="postimage"
            style={{ width: "400px", height: "500px" }}
          />
        </div>
      </div>
    </>
  );
};
