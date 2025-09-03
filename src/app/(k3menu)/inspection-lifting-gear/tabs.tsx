"use client";

import { useState } from "react";
import TableKonstruksi from "./table-konstruksi";
import TableHydraulic from "./table-hydraulic";
import TableTali from "./table-tali";
import TableHook from "./table-hook";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("KONSTRUKSI BAGIAN ATAS");

  const tabs = ["KONSTRUKSI BAGIAN ATAS", "PERLENGKAPAN HYDRAULIC", "TALI KAWAT BAJA", "HOOK BLOCK"];

  return (
    <div className="w-full">
      {/* Tab header */}
      <div className="flex justify-center border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-2 py-1 focus:outline-none ${
              activeTab === tab
                ? "text-blue-600 font-medium text-xs"
                : "text-gray-600 hover:text-blue-600 text-xs"
            }`}
          >
            {tab}
            {/* underline */}
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-full bg-blue-600 transition-transform duration-300 ${
                activeTab === tab ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-6 text-center">
        {activeTab === "KONSTRUKSI BAGIAN ATAS" && <TableKonstruksi/>}
        {activeTab === "PERLENGKAPAN HYDRAULIC" && <TableHydraulic/>}
        {activeTab === "TALI KAWAT BAJA" && <TableTali/>}
        {activeTab === "HOOK BLOCK" && <TableHook/>}
      </div>
    </div>
  );
}
