import Link from "next/link";
import { memo } from "react";
interface props {
  projectImage: React.ReactNode;
  projectName: string;
  projectdesc: string;
  tags: string[];
  projectLink: string;
}
const ProjectCard: React.FC<props> = ({
  projectImage,
  projectName,
  projectdesc,
  tags,
  projectLink,
}) => {
  return (
    <div className="flex flex-col justify-between  px-3 py-2 gap-3 bg-gray-800 text-white font-semibold rounded-lg lg:w-[20rem] items-center">
      <div>
        <div className="relative w-full">
          {projectImage}
          <Link href={projectLink}>
            <img
              className="w-8 h-8 absolute top-2 right-1"
              src="/github.png"
              alt="gitHUb"
            />
          </Link>
        </div>
        <div className="mt-3">
          <h2 className=" text-white font-bold text-xl">{projectName}</h2>
          <p className="text-gray-300">{projectdesc}</p>
        </div>
      </div>
      <div className="flex self-start mt-2 gap-3">
        <span className="text-green-300">{tags[0]}</span>
        <span className="text-red-300">{tags[1]}</span>
        <span className="text-blue-300">{tags[2]}</span>
      </div>
    </div>
  );
};

export default memo(ProjectCard);
