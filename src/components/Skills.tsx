import Image from "next/image";
import { memo } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import css from "../../public/css.jpg";
import git from "../../public/git.jpg";
import html from "../../public/html.png";
import js from "../../public/javaScript.png";
import next from "../../public/next.svg";
import nodeJs from "../../public/nodeJs.jpg";
import react from "../../public/react.png";
import reduxSaga from "../../public/redux-saga.webp";
import redux from "../../public/redux.png";
import tailwind from "../../public/tailwind.png";
import ts from "../../public/typeScript.png";
const Skills = () => {
  const technologies = [
    { value: "HTML", icon: html },
    { value: "CSS", icon: css },
    { value: "TAILWIND", icon: tailwind },
    { value: "JS", icon: js },
    { value: "TS", icon: ts },
    { value: "REACT", icon: react },
    { value: "NEXT", icon: next },
    { value: "REDUX", icon: redux },
    { value: "SAGA", icon: reduxSaga },
    { value: "NODE", icon: nodeJs },
    { value: "GIT", icon: git },
  ];
  // const getValue = (v: number) => {
  //   let value;
  //   setTimeout(() => {
  //     value = v;
  //   }, 400);
  //   return value;
  // };
  return (
    <>
      <div className="flex gap-4 w-1/2 mx-10 items-center  flex-wrap">
        {technologies.map((t) => (
          <div className={`relative w-32 h-32`}>
            <CircularProgressbarWithChildren
              counterClockwise
              strokeWidth={5}
              value={100}
            >
              <Image
                className="w-12 h-12 mb-4 md:w-16 md:h-16 p-2 bg-gray-300 rounded-full"
                src={t.icon}
                alt=""
              />
              <div className="absolute top-[88px]">
                <span className="text-gray-600 font-bold">{t.value}</span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(Skills);
