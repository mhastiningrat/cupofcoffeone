import React from "react";
import EmergencyForm from "./form";
import { MdArrowBackIos } from "react-icons/md";
import Image from "next/image";

const InspectionEmergencyTool = () => {
  return (
    <>
      <div className="w-full flex justify-between mb-7 bg-[#bee6ff] px-4">
        <button className="text-[#1C6EA4] text-2xl">
          <Image src="/wong.png" width={50} height={50} alt="logo" />
        </button>
        <div className="p-4 rounded-l-full flex gap-4">
          <Image src="/wikatjj.gif" width={100} height={50} alt="logo" />
          <Image src="/safety.png" width={60} height={60} alt="logo" />
        </div>
      </div>

      <header className="w-full">
        <div className="flex gap-6">
          <button className="hover:bg-[#FFF9AF] hover:text-[#154D71]">
            <MdArrowBackIos className="text-2xl" />
          </button>
          <h2 className="text-2xl font-bold">Inspection Emergency Tools</h2>
        </div>
      </header>
      <EmergencyForm />
    </>
  );
};

export default InspectionEmergencyTool;
