import React from "react";
import resume from "../assets/CV.pdf";
import { MdOutlineFileDownload } from "react-icons/md";

const DownloadButton: React.FC = () => {
  return (
    <a
      href={resume}
      download
      className="group relative w-[8rem] md:w-[10rem] flex items-center justify-center px-4 py-6 bg-[#862d9f] text-white  overflow-hidden"
    >
      {/* Text */}
      <span
        className="absolute opacity-100 group-hover:opacity-0  transition-all duration-300 translate-y-0 group-hover:-translate-y-2"
      >
        Download CV
      </span>

      {/* Icon */}
      <MdOutlineFileDownload
        size={24}
        className="absolute opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
      />
    </a>
  );
};

export default DownloadButton;
