/* eslint-disable @next/next/no-img-element */
const Header = () => {
  return (
    <div className=" h-72">
      <div className="flex flex-col items-center justify-center text-white gap-4">
        <h1 className="text-5xl">Gianluca Blog</h1>
        <h3>
          Learn about the impact technology has psichological on individuals,
          and more.
        </h3>
        <img src="/profile2.jpeg" alt="profile" width={120} className="rounded-full"></img>
      </div>
    </div>
  );
};

export default Header;
