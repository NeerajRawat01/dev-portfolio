import { Transition } from "@headlessui/react";
import { memo } from "react";
import "react-circular-progressbar/dist/styles.css";
import codeYogi from "../../public/codeYogi.png";
import devslane from "../../public/devslane.png";
import WorkCard from "./WorkCard";
const Work = () => {
  const codeYogiWorks = [
    "Worked on HTML and CSS(tailwind).",
    "Worked on React.js concepts.",
    "Worked on state management using Redux.js.",
    "Worked on Api integration.",
    "Worked on Todo App where user can add , delete , edit their tasks.",
    "Worked on Movie listing app using redux and redux saga.",
  ];
  const devslaneWorks = [
    "Developing and maintaining web applications using React.js and other related technologies.",
    "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    "Implementing responsive design and ensuring cross-browser compatibility.",
    "Participating in code reviews and providing constructive feedback to other developers.",
  ];

  return (
    <>
      <h3 id="work" className="text-gray-600">
        WHAT I HAVE DONE SO FAR
      </h3>
      <span className="text-3xl text-gray-600  md:text-6xl font-black whitespace-nowrap ">
        Work Experience.
      </span>

      <div className="lg:ml-32 mt-16 lg:w-[60rem] flex flex-col gap-4">
        <Transition
          appear={true}
          show={true}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <WorkCard
            title="React Js Trainee"
            orgName="CodeYogi"
            works={codeYogiWorks}
            workingPeriod="July 2021 - June 2022"
            arrowSide="right"
            image={codeYogi}
          />
          {/* ... */}
        </Transition>

        <WorkCard
          title="SDE Intern"
          orgName="Devslane"
          works={devslaneWorks}
          workingPeriod="August 2022 - Present"
          arrowSide="left"
          image={devslane}
          className="mt-3 lg:flex-row-reverse lg:justify-center lg:ml-[10.313rem]"
        />
      </div>
    </>
  );
};

export default memo(Work);
