import Image, { StaticImageData } from "next/image";
import { memo } from "react";
import "react-circular-progressbar/dist/styles.css";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
interface props {
  className?: string;
  title: string;
  orgName: string;
  works: string[];
  workingPeriod: string;
  arrowSide: "left" | "right";
  image: StaticImageData;
}
const WorkCard: React.FC<props> = ({
  className,
  title,
  orgName,
  works,
  workingPeriod,
  arrowSide,
  image,
}) => {
  return (
    <>
      <div className={`flex gap-10 flex-row-reverse lg:flex-row  ${className}`}>
        <div className="flex flex-col relative w-full border-b-4 border-indigo-600 rounded-md text-gray-200 bg-gray-800  lg:w-[25rem] px-7 py-2">
          {arrowSide == "right" && (
            <MdArrowRight className="hidden lg:block absolute top-2 text-gray-700 -right-[1rem] text-3xl" />
          )}
          <MdArrowLeft
            className={`absolute top-2 ${
              arrowSide === "left" ? "" : "lg:hidden"
            } text-gray-700 -left-[1rem] text-3xl`}
          />
          <h1 className="text-2xl text-indigo-500 font-semibold">{title}</h1>
          <span className="text-gray-300">{orgName}</span>
          <div className="flex flex-col gap-3 font-semibold">
            <div className="flex gap-2 mt-6">
              <span>-</span>
              <p>{works[0]}</p>
            </div>
            <div className="flex gap-2">
              <span>-</span>
              <p>{works[1]}</p>
            </div>
            <div className="flex gap-2">
              <span>-</span>
              <p>{works[2]}</p>
            </div>
            <div className="flex gap-2">
              <span>-</span>
              <p>{works[3]}</p>
            </div>
          </div>
          <div className=" lg:hidden font-bold text-gray-500 mt-2.5">
            {workingPeriod}
          </div>
        </div>
        <div className="-mt-7 relative">
          <div className="w-12  absolute top-7 -translate-x-1/2 left-2 bg-white rounded-full border-4 ">
            <Image src={image} alt="" />
          </div>
          <div className="h-full bg-indigo-600 w-1 ml-2 mb-0.5"></div>
        </div>
        <div className="hidden lg:block font-bold text-gray-500 mt-2.5">
          {workingPeriod}
        </div>
      </div>
    </>
  );
};

export default memo(WorkCard);
