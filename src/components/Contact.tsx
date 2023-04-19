import Image from "next/image";
import { memo } from "react";
const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col text-gray-600  font-sans md:items-center border-t-2 py-6"
    >
      <h3 className="mr-40">GET IN TOUCH</h3>
      <span className="text-3xl md:text-6xl font-black ">Contacts.</span>
      <div className="mt-7 flex flex-col lg:flex-row gap-10 lg:gap-20 px-6 md:px-0">
        <div className="flex gap-3 items-center">
          <div>
            <Image src="/home.png" alt={""} width={40} height={40} />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 font-semibold">Address</span>
            <span>Dehradun, Uttarakhand</span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <Image src="/mail.png" alt={""} width={40} height={40} />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 font-semibold">Email</span>
            <span>rawatneeraj925@gmail.com</span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <Image src="/phone.png" alt={""} width={40} height={40} />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 font-semibold">Phone</span>
            <span>7534807147</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
