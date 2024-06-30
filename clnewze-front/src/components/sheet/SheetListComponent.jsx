import React from "react";
import { useRecoilValue } from "recoil";
import SheetContainer from "../../hooks/SheetContainer";
import { sheetState } from "../../recoil/state/sheetState";

const SheetListComponent = () => {
  const { handleModalOpen } = SheetContainer();
  const sheets = useRecoilValue(sheetState);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sheets?.map((sheet, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handleModalOpen(sheet, 'view')}
          >
            <img
              src={sheet?.img}
              alt="Card"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h5 className="text-lg font-bold truncate w-60">{sheet?.artist} - {sheet?.title}</h5>
              <p className="text-sm truncate w-60">● 장르 : {sheet?.genre}</p>
              <p className="text-sm truncate w-60">● 조회수 : {sheet?.viewNumber}</p>
              <p className="text-sm truncate w-60">● 발매날짜 : {sheet?.releaseDate} 년</p>
              <p className="text-sm truncate w-60">● 앨범명 : {sheet?.albumName}</p>
              <p className="text-sm truncate w-60">● 상세정보 : {sheet?.contents}</p>
            </div>
            <div className="px-4 py-2 text-right text-sm text-gray-500">{sheet?.upLoadDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SheetListComponent;
