import React from "react";
import {ChevronRight} from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {roomState} from "../../../recoil/state/roomState";
import {Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import RoomContainer from "../../../hooks/RoomContainer";

const MainRoomComponent = () => {
  const navigate = useNavigate();
  const {useQueryRoomsList} = RoomContainer();
  const {isLoading, isError} = useQueryRoomsList(-1, 0, 10, null);
  const rooms = useRecoilValue(roomState);

  if (isLoading) {
    return <div>isLoading....</div>;
  }
  if (isError) {
    return <div>error....</div>;
  }

  const RoomComponent = ({data}) => {
    return (
      <Card className="flex flex-col w-72 h-auto rounded-lg overflow-hidden shadow-md m-2">
        <CardMedia
          component="img"
          alt="Card"
          image={data?.img}
          className="w-full h-48"
          style={{objectFit: 'contain'}}
        />
        <CardContent className="p-4 text-left">
          <Typography variant="h5" className="font-bold text-lg mb-2 truncate">
            {data?.title}
          </Typography>
          <Typography className="text-gray-700 text-sm truncate">
            ● 성함 : {data?.userName}
          </Typography>
          <Typography className="text-gray-700 text-sm truncate">
            ● 위치 : {data?.place}
          </Typography>
          <Typography className="text-gray-700 text-sm truncate">
            ● 연습실 정보 : {data?.categories}
          </Typography>
          <Typography className="text-gray-700 text-sm truncate">
            ● 대여 가격 : {data?.price}
          </Typography>
        </CardContent>
        <CardActions className="px-4 py-2 text-right text-sm text-gray-500">
          {data?.upLoadDate}
        </CardActions>
      </Card>
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-left mb-12 flex items-center text-4xl font-bold">
          연습실
        </div>
        <p onClick={() => navigate("/room")} className="flex items-center cursor-pointer text-blue-500">
          <ChevronRight className="mr-1"/> 더보기
        </p>
      </div>
      <div className="flex overflow-x-auto">
        <div className="flex flex-nowrap">
          {rooms?.map((room, index) => (
            <RoomComponent key={index} data={room}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainRoomComponent;
