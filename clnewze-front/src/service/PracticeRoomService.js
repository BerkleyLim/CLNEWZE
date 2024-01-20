import UseApi from '../util/UseApi'

const PracticeRoomService = () => {
  // 1) 악보 전체 리스트 출력
  //    페이징 네이션 처리 때문에 일부만 출력함
  const practiceRoomSelectList = async (selectCategories, offset, limit) => {
    return await UseApi
      .get(
        process.env.REACT_APP_API_ROOT +
          "practiceroom/selectList" +
          "?categories=" +
          selectCategories +
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

  // 2) 악보 총 갯수 출력
  //
  const practiceRoomSelectListAllCount = async () => {
    return await UseApi
      .get(process.env.REACT_APP_API_ROOT + "practiceroom/selectListAllCount")
      .then((res) => {
        return res.data.data;
      })
      .catch((e) => {
        console.error(e);
        return null;
      });
  };

  // 3) 드롭다운 및 장르별 메뉴 표시
  const practiceRoomMasterMenuCategory = async () => {
    return await UseApi
      .get(process.env.REACT_APP_API_ROOT + "practiceroom/master/menu/category")
      .then((res) => {
        return res.data.data;
      })
      .catch((e) => {
        console.error(e);
        return null;
      });
  };


  // 4) 

  return {
    practiceRoomSelectList,
    practiceRoomSelectListAllCount,
    practiceRoomMasterMenuCategory,
  };
};

export default PracticeRoomService;
