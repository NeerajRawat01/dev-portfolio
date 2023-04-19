import Image from "next/image";
import { memo } from "react";
import instagram from "../../public/instagram (1).png";
import linkdin from "../../public/linkedin.png";
import twitter from "../../public/twitter (1).png";
import github from "../../public/github.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className=" flex  justify-center gap-10 px-5">
        <Link target="_blank" href="https://www.linkedin.com/in/neeraj-singh0/">
          <Image className="w-10 h-10" src={linkdin} alt={""} />
        </Link>
        <Link target="_blank" href="https://twitter.com/Neerajsingghh">
          <Image className="w-10 h-10" src={twitter} alt={""} />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/Neeraj_rawat01">
          <Image className="w-10 h-10" src={instagram} alt={""} />
        </Link>
        <Link target="_blank" href="https://github.com/NeerajRawat01">
          <Image className="w-10 h-10" src={github} alt={""} />
        </Link>
      </div>
      <span className="flex justify-center p-2">
        Copyright ©2023 All rights reserved.
      </span>
    </div>
  );
};

export default memo(Footer);
