import UseApi from '../util/UseApi'

const SheetMusicService = () => {

  // 1) 악보 전체 리스트 출력
  //    페이징 네이션 처리 때문에 일부만 출력함
  const sheetMusicSelectList = async (selectGenre, offset, limit) => {
    return await UseApi.get(
      process.env.REACT_APP_API_ROOT +
        "sheetmusic/selectList"
          + "?genre=" + selectGenre
          + "&pageNo=" + offset
          + "&limit=" + limit
    )
      .then((res) => { return res.data.data })
      .catch((e) => {console.error(e); return null});
  }

  // 2) 악보 총 갯수 출력
  //   
  const sheetMusicSelectListAllCount = async () => {
    return await UseApi.get(
      process.env.REACT_APP_API_ROOT + "sheetmusic/selectListAllCount"
    )
      .then((res) => {return res.data.data})
      .catch((e) => { console.error(e); return null});
  }

  // 3) 드롭다운 및 장르별 메뉴 표시
  const sheetMusicMasterMenuCategory = async () => {
    return await UseApi.get(
      process.env.REACT_APP_API_ROOT + "sheetmusic/master/menu/category"
    )
      .then((res) => {
        return res.data.data;
      })
      .catch((e) => {console.error(e); return null});
  }

  return {sheetMusicSelectList, sheetMusicSelectListAllCount, sheetMusicMasterMenuCategory}
}

export default SheetMusicService