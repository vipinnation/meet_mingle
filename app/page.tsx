import Image from "next/image";
import { FaVideo, FaVideoSlash } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { BiSolidMicrophoneOff } from "react-icons/bi";
import { FaClosedCaptioning } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { MdCallEnd } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";
import { FaHandPaper } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="absolute z-50">
          <div className="shadow-2xl rounded-lg mt-10 m-3 p-3 z-50 ">
            <h2 className="text-xl font-medium">Meeting Info</h2>
            <p className="my-2">
              <span>Date time: </span>
              <span> Feb 20/2024 11:41 am</span>
            </p>
            <p className="my-2 flex items-center">
              <span>Meeting ID:</span>
              <span className="mx-2"> Lorem ipsum </span>
              <span className="mx-1 text-xl cursor-pointer">
                <FaRegCopy />
              </span>
            </p>
            <p className="my-2">
              <span>Host:</span>
              <span> Lorem ipsum dolor</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 mx-auto gap-4 w-1/2 py-4">
          <div className="bg-black h-[16rem] w-full rounded-md shadow-xl">
            <video />
          </div>
       
          <div className="bg-black h-[16rem] w-full rounded-md shadow-xl">
            <video />
          </div>
       
          <div className="bg-black h-[16rem] w-full rounded-md shadow-xl">
            <video />
          </div>
       
          <div className="bg-black h-[16rem] w-full rounded-md shadow-xl">
            <video />
          </div>
       
         
        </div>

        <div className="absolute top-3 right-4">
          <h2>Participants</h2>
          <div className="h-[70vh] overflow-scroll">
            <div className="bg-black h-[10rem] w-[15rem] rounded-md shadow-xl mb-3"></div>
            <div className="bg-black h-[10rem] w-[15rem] rounded-md shadow-xl mb-3"></div>
            <div className="bg-black h-[10rem] w-[15rem] rounded-md shadow-xl mb-3"></div>
            <div className="bg-black h-[10rem] w-[15rem] rounded-md shadow-xl mb-3"></div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-4">
        <p className="text-4xl mx-4">
          <FaVideo />
        </p>
        <p className="text-4xl mx-4">
          <FaMicrophone />
        </p>
        <p className="text-4xl mx-4">
          <FaClosedCaptioning />
        </p>
        <p className="text-4xl mx-4">
          <IoShareOutline />
        </p>
        <p className="text-4xl mx-4">
          <MdCallEnd />
        </p>
        <p className="text-4xl mx-4">
          <IoMdChatbubbles />
        </p>
        <p className="text-4xl mx-4">
          <MdEmojiEmotions />
        </p>
        <p className="text-4xl mx-2">
          <FaHandPaper />
        </p>
      </div>

      {/* <div className="flex items-center justify-center my-8">
        <p>
          <FaVideoSlash />
        </p>
        <p>
          {" "}
          <BiSolidMicrophoneOff />
        </p>
        <p>caption</p>
        <p>Share Screen</p>
        <p>Hang up</p>
        <p>Chat</p>
        <p> Emojies</p>
      </div> */}
    </>
  );
}
