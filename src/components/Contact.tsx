import { memo } from "react";
const Contact = () => {
  return (
    <div className="flex flex-col text-gray-600  font-sans">
      <h3 className="">GET IN TOUCH</h3>
      <span className="text-3xl md:text-6xl font-black ">Contacts.</span>
      <div className="flex flex-col  bg-gray-800 px-6 py-3 rounded-md mt-4">
        <form className="flex flex-col gap-2 mt-10" action="">
          <label className="text-white" htmlFor="name">
            Your Name
          </label>

          <input
            className="md:w-96 bg-gray-300 rounded-md px-6 py-2"
            id="name"
          />
          <label className="text-white mt-3" htmlFor="name">
            Your Email
          </label>
          <input
            className="md:w-96 bg-gray-300 rounded-md  px-6 py-2"
            id="name"
          />
          <label className="text-white mt-3" htmlFor="name">
            Your Message
          </label>
          <textarea
            className="md:w-96 bg-gray-300 rounded-md  px-10 py-6"
            id="name"
          />
          <button className="bg-gray-600 font-bold text-white px-5 py-2 mt-4 rounded-md shadow-2xl w-28">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default memo(Contact);
