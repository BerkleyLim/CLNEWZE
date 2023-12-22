import restApiAllUser from "../util/restApiAllUser";
import restApiAuthJwt from "../util/restApiAuthJwt";

const SheetMusicService = () => {

  // 1) 악보 전체 리스트 출력
  //    페이징 네이션 처리 때문에 일부만 출력함
  const sheetMusicSelectList = async (selectGenre, offset, limit) => {
    return await restApiAllUser.get(
      process.env.REACT_APP_API_ROOT +
        "sheetmusic/selectList"
          + "?genre=" + selectGenre
          + "&pageNo=" + offset
          + "&limit=" + limit
    )
      .then((res) => { return res.data.data })
      .catch((e) => {console.error(e); return null});
  }
  return {sheetMusicSelectList}
}

export default SheetMusicService