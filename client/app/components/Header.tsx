/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Header = () => {
  // scroll to card section
  const scrollTo = () => {
    const cardSection = document.getElementById("cardSection");
    cardSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="h-screen">
      <div
        className="flex flex-col items-center justify-center text-white gap-32 h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background2-.jpg')",
          backgroundSize: "100% auto",
        }}>
        <h1 className="text-5xl">Gianluca Blog</h1>
        <h3>
          Learn about the impact technology has psychological on individuals,
          and more.
        </h3>
        <img
          src="/profile2.jpeg"
          alt="profile"
          width={120}
          className="rounded-full"></img>
        <Link href="#cardSection">
          <svg
            width="64px"
            className="animate-bounce"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M12 6V18M12 18L7 13M12 18L17 13"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"></path>{" "}
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Header;
