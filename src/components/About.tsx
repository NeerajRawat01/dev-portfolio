import { memo } from "react";
const About = () => {
  return (
    <div className="flex flex-col text-gray-600  font-sans">
      <h3 className="">INTRODUCTION</h3>
      <span className="text-3xl md:text-6xl font-black ">Overview.</span>
      <p className="mt-4 text-secondary  text-[1.063rem] max-w-3xl leading-[1.875rem]">
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Next, and Node.js.
        I'm a quick learner and collaborate closely with clients to create
        efficient, scalable, and user-friendly solutions that solve real-world
        problems. Let's work together to bring your ideas to life!
      </p>
    </div>
  );
};

export default memo(About);
