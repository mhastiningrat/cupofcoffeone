import React from "react";

const data = [
  { no: 1, desc: "Kasa Steril Terbungkus", volume: "20 pcs" },
  { no: 2, desc: "Perban (Lebar 5 cm)", volume: "2 roll" },
  { no: 3, desc: "Perban (Lebar 10 cm)", volume: "2 roll" },
  { no: 4, desc: "Plester (Lebar 1,25 cm)", volume: "2 roll" },
  { no: 5, desc: "Plester Cepat", volume: "10 pcs" },
  { no: 6, desc: "Kapas (25 gram)", volume: "1 roll" },
  { no: 7, desc: "Kain Segitiga/Mitella", volume: "2 pcs" },
  { no: 8, desc: "Gunting", volume: "1 pcs" },
  { no: 9, desc: "Peniti", volume: "12 pcs" },
  { no: 10, desc: "Sarung Tangan Sekali Pakai", volume: "2 psg" },
  { no: 11, desc: "Masker", volume: "2 pcs" },
  { no: 12, desc: "Pinset", volume: "1 pcs" },
  { no: 13, desc: "Lampu Senter", volume: "1 pcs" },
  { no: 14, desc: "Gelas Untuk Cuci Mata", volume: "1 pcs" },
  { no: 15, desc: "Kantong Plastik Bersih", volume: "1 pcs" },
  { no: 16, desc: "Aquades (100 ml Lar.Saline)", volume: "1 btl" },
  { no: 17, desc: "Povidon Iodine (60ml)", volume: "1 btl" },
  { no: 18, desc: "Alkohol 70%", volume: "1 btl" },
  { no: 19, desc: "Buku Panduan Kotak P3K", volume: "1 pcs" },
  { no: 20, desc: "Buku Catatan Daftar Isi P3K", volume: "1 pcs" },
];

const TableP3K = () => {
  return (
    <>
      <div className="max-h-[300px] overflow-x-auto overflow-y-auto ">
        {data.map((i) => (
          <div className="w-full flex gap-4 items-center flex-row mb-2">
            <label className="text-sm">{i.no}</label>
            <div className="flex flex-col flex-1">
              <label className="text-xs ">{i.desc}</label>
              <label className="text-xs  text-slate-400">{i.volume}</label>
            </div>

            <input
              type="checkbox"
              className="rounded-sm checked:bg-[#154D71]"
            />
            <textarea
              className="outline-1 -outline-offset-1 outline-gray-300 rounded-lg p-1"
              rows={1}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TableP3K;
