import React from "react";
import { useRecoilValue } from "recoil";
import RoomContainer from "../../hooks/RoomContainer";
import { roomState } from "../../recoil/state/roomState";

const RoomListComponent = () => {
  const { handleModalOpen } = RoomContainer();
  const rooms = useRecoilValue(roomState);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {rooms?.map((room, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handleModalOpen(room, 'view')}
          >
            <img
              src={room?.img}
              alt="Card"
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h5 className="text-lg font-bold truncate w-60">{room?.title}</h5>
              <p className="text-sm truncate w-60">● 성함 : {room?.userName}</p>
              <p className="text-sm truncate w-60">● 위치 : {room?.place}</p>
              <p className="text-sm truncate w-60">● 연습실 정보 : {room?.categories} </p>
              <p className="text-sm truncate w-60">● 대여 가격: {room?.price} 원 </p>
            </div>
            <div className="px-4 py-2 text-right text-sm text-gray-500">{room?.upLoadDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomListComponent;
