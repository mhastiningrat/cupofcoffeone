import React from "react";

const data = [{ no: 1, desc: "Stopper (Pendant Control)" }];

const TableHydraulic = () => {
  return (
    <>
      <div className="max-h-[300px] overflow-x-auto overflow-y-auto ">
        {data.map((i) => (
          <div
            key={i.no}
            className="w-full flex gap-4 items-center flex-row mb-2"
          >
            <label className="text-sm">{i.no}</label>
            <div className="flex flex-col flex-1">
              <label className="text-xs ">{i.desc}</label>
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

export default TableHydraulic;
