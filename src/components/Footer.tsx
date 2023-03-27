import Image from "next/image";
import { memo } from "react";
import instagram from "../../public/instagram.png";
import linkdin from "../../public/linkdin.png";
import twitter from "../../public/twitter.png";
const Footer = () => {
  return (
    <div className="flex justify-center gap-7 px-5 py-7 bg-gray-800">
      <Image className="w-10 h-10" src={linkdin} alt={""} />
      <Image
        className="w-10 h-10 bg-gray-600 rounded-sm"
        src={twitter}
        alt={""}
      />
      <Image className="w-10 h-10" src={instagram} alt={""} />
    </div>
  );
};

export default memo(Footer);
