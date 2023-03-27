import Link from "next/link";
import { memo } from "react";
interface props {
  projectImage: React.ReactNode;
  projectName: string;
  projectdesc: string;
  tags: string[];
}
const ProjectCard: React.FC<props> = ({
  projectImage,
  projectName,
  projectdesc,
  tags,
}) => {
  return (
    <div className="flex flex-col px-3 py-2 gap-3 bg-gray-800 text-white font-semibold rounded-lg md:w-[21rem] items-center">
      <div className="relative">
        {projectImage}
        <Link href={""}>
          <img
            className="w-8 h-8 absolute top-2 right-1"
            src="https://assets.stickpng.com/images/5847f98fcef1014c0b5e48c0.png"
            alt="gitHUb"
          />
        </Link>
      </div>
      <div>
        <h2 className=" text-white font-bold text-xl">{projectName}</h2>
        <p className="text-gray-300 mt-4">{projectdesc}</p>
        <div className="flex mt-2 gap-3">
          <span className="text-green-300">{tags[0]}</span>
          <span className="text-red-300">{tags[1]}</span>
          <span className="text-blue-300">{tags[2]}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectCard);
