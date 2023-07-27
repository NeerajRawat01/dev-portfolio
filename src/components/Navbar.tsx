import Image from "next/image";
import { memo, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";
const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);
  return (
    <>
      <div className="flex px-[1.531rem] top-0 sticky z-10 bg-white bg-opacity-90 backdrop-blur shadow-2xl justify-between tracking-[0.07rem] h-[3.625rem] items-center">
        <Link className="cursor-pointer" smooth={true} to="home">
          <Image
            className="rounded-full"
            src="/myPic.jpeg"
            alt={""}
            width={45}
            height={45}
          />
        </Link>
        <div className=" gap-7 px-12 hidden md:flex">
          <Link className="cursor-pointer" to="about" smooth={true}>
            About
          </Link>
          <Link className="cursor-pointer" to="work" smooth={true}>
            Work
          </Link>
          <Link className="cursor-pointer" to="contact" smooth={true}>
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          {!menuBar ? (
            <RxHamburgerMenu
              onClick={() => setMenuBar(true)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <RxCross2
              onClick={() => setMenuBar(false)}
              className="text-2xl cursor-pointer "
            />
          )}
        </div>

        <div
          className={`transition-all duration-700 absolute ${
            menuBar ? "opacity-100" : "opacity-0"
          } rounded-lg gap-2 font-semibold right-3 top-20 px-7 py-6 bg-gradient-to-r from-gray-400  to-gray-900  text-white flex flex-col`}
        >
          <Link
            onClick={() => setMenuBar(false)}
            className="cursor-pointer"
            to="about"
            smooth={true}
          >
            About
          </Link>
          <Link
            onClick={() => setMenuBar(false)}
            className="cursor-pointer"
            to="work"
            smooth={true}
          >
            Work
          </Link>
          <Link
            onClick={() => setMenuBar(false)}
            className="cursor-pointer"
            to="contact"
            smooth={true}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
