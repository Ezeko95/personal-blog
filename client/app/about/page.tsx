import Image from "next/image";

const About = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-8 max-w-6xl mx-auto p-8 h-screen">
      <div className="col-span-1 relative p-4">
        <Image
          src={"/profile.jpeg"}
          alt="profile-pic"
          width={540}
          height={540}
          className="w-full h-full object-cover inset-10"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl font-bold text-left">About Me</h1>
          <p className="text-left">
            I am a full-stack developer based in the Bay Area. I am passionate
            about building applications that are scalable and user friendly. I
            have experience working with React, Typescript, Node.js, Express,
            MongoDB, PostgreSQL, and GraphQL.
          </p>
        </div>
      </div>
      <div className="absolute inset-y-0 left-1/2 w-px bg-black"></div>
    </div>
  );
};

export default About;
