import React from "react";
import Tabs from "./tabs";

const data = [
  { no: 1, question: "Tali Angkat Beban Utama" },
  { no: 2, question: "Tali Derek" },	
  { no: 3, question: "Tali Pendan" },
  { no: 4, question: "Tali Buka / Tutup Bucket" }

];

const TableTali = () => {
  return (
    <>
      <div className="max-h-[300px] overflow-x-auto overflow-y-auto ">
        {data.map((i) => (
          <div key={i.no} className="w-full flex gap-4 items-center flex-row mb-2">
            <label className="text-sm">{i.no}</label>
            <div className="flex flex-col flex-1">
              <label className="text-xs text-left">{i.question}</label>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs flex item-center gap-2">
                <input
                  type="checkbox"
                  className="rounded-sm checked:bg-[#154D71]"
                />{" "}
                Remaining Ratio 90% Or More
              </span>
              <span className="text-xs flex item-center gap-2">
                <input
                  type="checkbox"
                  className="rounded-sm checked:bg-[#154D71]"
                />{" "}
                Remaining Ratio 75% Or More
              </span>
              <span className="text-xs flex item-center gap-2">
                <input
                  type="checkbox"
                  className="rounded-sm checked:bg-[#154D71]"
                />{" "}
                Remaining Ratio 50% Or More
              </span>
              <span className="text-xs flex item-center gap-2">
                <input
                  type="checkbox"
                  className="rounded-sm checked:bg-[#154D71]"
                />{" "}
                Remaining Ratio 20% Or More
              </span>
              <span className="text-xs flex item-center gap-2">
                <input
                  type="checkbox"
                  className="rounded-sm checked:bg-[#154D71]"
                />{" "}
                Remaining Ratio 20% Or More
              </span>
            </div>

            <textarea
              className="outline-1 -outline-offset-1 outline-gray-300 rounded-lg p-1"
              rows={5}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TableTali;
