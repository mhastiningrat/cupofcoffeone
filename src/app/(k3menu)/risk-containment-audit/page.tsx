import Image from "next/image";
import React from "react";
import { MdArrowBackIos } from "react-icons/md";

const RiskContainmentAudit = () => {
  return (
    <div>
      <div className="w-full flex justify-between mb-7 bg-[#bee6ff] px-4">
        <button className="text-[#1C6EA4] text-2xl">
          <Image src="/wong.png" width={50} height={50} alt="logo" />
        </button>
        <div className="p-4 rounded-l-full flex gap-4">
          <Image src="/wikatjj.gif" width={100} height={50} alt="logo" />
          <Image src="/safety.png" width={60} height={60} alt="logo" />
        </div>
      </div>

      <div className="w-full">
        <div className="flex gap-6">
          <button className="hover:bg-[#FFF9AF] hover:text-[#154D71]">
            <MdArrowBackIos className="text-2xl" />
          </button>
          <h2 className="text-2xl font-bold">Risk Containment Audit</h2>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <Image src="/akandatang.png" width={150} height={150} alt="logo" />
      </div>

      <div className="h-[500px]"></div>
    </div>
  );
};

export default RiskContainmentAudit;
