import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Head from "next/head";
import Image from "next/image";
import codingImage from "../../public/programming.jpg";
import { useState } from "react";

export default function Home() {
  const [render, setRender] = useState(false);

  const handleScroll = (event: any) => {
    setRender(true);
  };
  return (
    <>
      <Head>
        <title>Neeraj | Portfolio</title>
        <meta
          name="Hey there this is neeraj a software debveloper"
          content="Neeraj Singh Porfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/myPic.jpeg" />
      </Head>
      <div className="flex flex-col justify-center items-center p-7 bg-gray-200">
        {/* Header Section */}
        <Navbar />
        {/* Home Section */}
        <div
          id="home"
          className="flex md:gap-5 md:px-44 md:py-12 xl:px-52 mt-10 md:mt-6"
        >
          <div>
            <div className="w-5 h-5 bg-indigo-700 rounded-full mt-3"></div>
            <div className="h-72 bg-gradient-to-b from-indigo-700 via-indigo-600 to-purple-200 w-1 ml-2 mb-0.5"></div>
          </div>
          <div className="flex flex-col items-center md:items-start  font-sans gap-4 ">
            <h1 className="text-6xl ml-7 md:ml-0">
              Hi, i'm <span className="text-indigo-700 font-bold"> Neeraj</span>
            </h1>
            <h2 className="w-72 text-2xl">
              I develop ,user intefaces and Web applications
            </h2>
            <div className="p-3  shadow-md">
              <Image
                className=" object-cover h-[28rem] w-[55rem] rounded-md "
                src={codingImage}
                alt={"image of coding"}
              />
            </div>
          </div>
        </div>
        {/* About Section */}
        <div id="about" className=" px-5  py-5 md:px-44 xl:px-52 md:py-12 ">
          <About />
        </div>
        {/* Skills Section */}
        <div className="scroll-mb-2 flex justify-center">
          <Skills />
        </div>
        {/* Work Section */}
        <div
          onScroll={handleScroll}
          className=" py-5 md:px-44 xl:px-60 md:py-12 "
        >
          <Work />
        </div>
        {/* Projects Section */}
        <div className=" py-5 md:px-44 md:py-12 ">
          <Projects />
        </div>
        {/* Contact Section */}
        <div className="px-5 py-5 md:px-44 xl:px-52 md:py-12 ">
          <Contact />
        </div>
        {/* Footer Section */}
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
}
