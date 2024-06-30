import React, {useEffect} from "react";
import {ChevronRight} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {teacherState} from "../../../recoil/state/teacherState";
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import TeacherService from "../../../service/TeacherService";

const MainTeacherComponent = () => {
  const navigate = useNavigate();
  const {teacherSelectList} = TeacherService();
  const [teacher, setTeacher] = useRecoilState(teacherState);

  useEffect(() => {
    const fetchData = async () => {
      const data = await teacherSelectList(null, 0, 10);
      if (data) {
        setTeacher(data.data);
      }
    };

    fetchData();
  }, []);

  const TeacherComponent = ({data}) => {
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
            ● 전공 : {data?.major}
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
          선생님
        </div>
        <IconButton onClick={() => navigate("/teacher")} color="primary">
          <ChevronRight className="mr-1"/> 더보기
        </IconButton>
      </div>
      <div className="flex overflow-x-auto">
        <div className="flex flex-nowrap">
          {teacher?.map((teacher, index) => (
            <TeacherComponent key={index} data={teacher}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainTeacherComponent;
