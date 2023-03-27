import { memo } from "react";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div className="flex flex-col text-gray-600  font-sans">
      <h3 className="">MY WORK</h3>
      <span className="text-3xl md:text-6xl font-black ">Projects.</span>
      <p className="mt-4 text-secondary  text-[1.063rem] max-w-3xl leading-[1.875rem]">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>
      <div className="flex gap-5 flex-wrap mt-16">
        <ProjectCard
          projectImage={
            <img
              className="rounded-lg h-40 w-96"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkE5jM8Zd0Py2ogYOaTfVK5k3a6WKX9OsHzg&usqp=CAU"
              alt=""
            />
          }
          projectdesc=" Web-based platform that allows users to search, book, and manage car
          rentals from various providers, providing a convenient and efficient
          solution for transportation needs."
          projectName="Car Rental"
          tags={["#react", "#next", "#tailwind"]}
        />
        <ProjectCard
          projectImage={
            <img
              className="rounded-lg h-40 w-96"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkE5jM8Zd0Py2ogYOaTfVK5k3a6WKX9OsHzg&usqp=CAU"
              alt=""
            />
          }
          projectdesc=" Web-based platform that allows users to search, book, and manage car
          rentals from various providers, providing a convenient and efficient
          solution for transportation needs."
          projectName="Car Rental"
          tags={["#react", "#next", "#tailwind"]}
        />
        <ProjectCard
          projectImage={
            <img
              className="rounded-lg h-40 w-96"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkE5jM8Zd0Py2ogYOaTfVK5k3a6WKX9OsHzg&usqp=CAU"
              alt=""
            />
          }
          projectdesc=" Web-based platform that allows users to search, book, and manage car
          rentals from various providers, providing a convenient and efficient
          solution for transportation needs."
          projectName="Car Rental"
          tags={["#react", "#next", "#tailwind"]}
        />
        <ProjectCard
          projectImage={
            <img
              className="rounded-lg h-40 w-96"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkE5jM8Zd0Py2ogYOaTfVK5k3a6WKX9OsHzg&usqp=CAU"
              alt=""
            />
          }
          projectdesc=" Web-based platform that allows users to search, book, and manage car
          rentals from various providers, providing a convenient and efficient
          solution for transportation needs."
          projectName="Car Rental"
          tags={["#react", "#next", "#tailwind"]}
        />
      </div>
    </div>
  );
};

export default memo(Projects);
