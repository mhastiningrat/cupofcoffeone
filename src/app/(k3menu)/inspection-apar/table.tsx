import React from "react";

const data = [
  { no: 1, question: "Apakah APAR dapat dijangkau dengan mudah dan tidak terhalanng?" },
  { no: 2, question: "Apakah APAR diletakkan pada area yang telah ditetapkan?" },
  { no: 3, question: "Apakah APAR disimpan dengan cara digantung atau di kotak penyimpanan khusus?" },
  { no: 4, question: "Apakah APAR digantung pada ketinggian 120 cm dari dasar?" },
  { no: 5, question: "Apakah penggunaan APAR dapat dibaca dengan jelas?" },
  { no: 6, question: "Apakah selang (hose) dalam keadaan baik?" },
  { no: 7, question: "Apakah lubang selang tidak tertutup sesuatu?" },
  { no: 8, question: "Apakah handle dalam kondisi baik?" },
  { no: 9, question: "Apakah safety pin dalam kondisi baik?" },
  { no: 10, question: "Apakah tabung dalam kondisi baik dan tidak berkarat?" },
  { no: 11, question: "Apakah petunjuk tekanan dalam posisi normal (hijau)?" },
  { no: 12, question: "Apakah berat APAR dalam kondisi normal?" },
  { no: 13, question: "Apakah label pada tabung masih lengkap dan jelas?" },
  { no: 14, question: "Apakah kartu pemeriksaan APAR masih ada dan dalam kondisi baik?" },
  { no: 15, question: "Apakah tanda petunjuk APAR (Segitiga APAR) tersedia dengan jelas?" },
  { no: 16, question: "Apakah APAR yang diperiksa sudah masuk dalam daftar APAR?" }
];

const TableAPAR = () => {
  return (
    <>
      <div className="max-h-[300px] overflow-x-auto overflow-y-auto ">
        {data.map((i) => (
          <div className="w-full flex gap-4 items-center flex-row mb-2">
            <label className="text-sm">{i.no}</label>
            <div className="flex flex-col flex-1">
              <label className="text-xs ">{i.question}</label>
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

export default TableAPAR;
