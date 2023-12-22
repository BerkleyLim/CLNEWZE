import restApiAllUser from "../util/restApiAllUser";
import restApiAuthJwt from "../util/restApiAuthJwt";

const TeacherService = () => {
  // 1) 선생님 목록 공개,
  //   요청 값 : 장르선택, offset, limit
  const teacherSelectList = async (selectMajor, offset, limit) => {
    return await restApiAllUser
      .get(
        process.env.REACT_APP_API_ROOT +
          "teacher/selectList" +
          "?major=" +
          selectMajor +
          "&pageNo=" +
          offset +
          "&limit=" +
          limit
      )
      .then((res) => {
        return res.data.data;
      })
      .catch((e) => {
        console.error(e);
        return null;
      });
  };

  // 2) 선생님 전체 카운터
  //   요청 값 : X
  const teacherSelectListAllCount = async () => {
    return await restApiAllUser
      .get(process.env.REACT_APP_API_ROOT + "teacher/selectListAllCount")
      .then((res) => {
        return res.data.data;
      })
      .catch((e) => {
        console.error(e);
        return null;
      });
  };

  return { teacherSelectList, teacherSelectListAllCount };
};

export default TeacherService;
