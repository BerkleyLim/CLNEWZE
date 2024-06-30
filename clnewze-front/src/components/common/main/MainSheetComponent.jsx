import React from "react";
import {ChevronRight} from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {sheetState} from "../../../recoil/state/sheetState";
import {Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import SheetContainer from "../../../hooks/SheetContainer";

const MainSheetComponent = () => {
  const navigate = useNavigate();
  const {useQuerySheetsList} = SheetContainer();
  const {isLoading, isError} = useQuerySheetsList(-1, 0, 10, null);
  const sheets = useRecoilValue(sheetState);

  if (isLoading) {
    return <div>isLoading....</div>;
  }
  if (isError) {
    return <div>error....</div>;
  }

  const SheetComponent = ({data}) => {
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
            {data?.artist} - {data?.title}
          </Typography>
          <Typography className="text-gray-700 text-sm truncate">
            ● 장르 : {data?.genre}
          </Typography>
          <Typography className="text-gray-700 text-sm truncate">
            ● 조회수 : {data?.viewNumber}
          </Typography>
          <Typography className="text-gray-700 text-sm truncate">
            ● 발매날짜 : {data?.releaseDate} 년
          </Typography>
          <Typography className="text-gray-700 text-sm truncate">
            ● 앨범명 : {data?.albumName}
          </Typography>
          <Typography className="text-gray-700 text-sm truncate">
            ● 상세정보 : {data?.contents}
          </Typography>
        </CardContent>
        <CardActions className="px-4 py-2 text-right text-sm text-gray-500">
          {data?.uploadDate}
        </CardActions>
      </Card>
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-left mb-12 flex items-center text-4xl font-bold">
          악보
        </div>
        <p onClick={() => navigate("/sheet")} className="flex items-center cursor-pointer text-blue-500">
          <ChevronRight className="mr-1"/> 더보기
        </p>
      </div>
      <div className="flex overflow-x-auto">
        <div className="flex flex-nowrap">
          {sheets?.map((sheet, index) => (
            <SheetComponent key={index} data={sheet}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSheetComponent;
