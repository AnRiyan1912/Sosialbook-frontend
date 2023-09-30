export const PageLogin = () => {
  return (
    <>
      <div className="flex justify-center mt-60">
        <div className="flex-row items-center justify-center bg-slate-200  h-48 w-48">
          <div className="col-auto items-center ">
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            <button className="bg-slate-300">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};
