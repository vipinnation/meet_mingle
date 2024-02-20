import images from "@/utils/images";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const NavbarComponent = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-32 py-2 glass-1 sticky">
        <div className="flex items-center">
          <img src={images.logo.src} className="w-[2.5rem]" />
          <h2 className="mx-2">Meet Mingle</h2>
        </div>

        <div className="flex items-center text-sm">
          <p className="mr-4 font-medium cursor-pointer">Home</p>
          <p className="mr-4 font-medium cursor-pointer">Calender</p>
          <p className="mr-4 font-medium cursor-pointer">Meeting</p>
          <p className="mr-4 font-medium cursor-pointer">New Meeting</p>
          <p className="mr-4 font-medium cursor-pointer bg-red-400 rounded-md py-2 px-3">
            Join a meeting
          </p>

          <p className="mr-4 text-3xl font-normal">
            <FaRegCircleUser className="font-light" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
