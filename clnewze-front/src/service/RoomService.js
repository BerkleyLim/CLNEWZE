import UseApi from '../util/UseApi'

const RoomService = () => {

  /**
   * (1) 악보 전체 리스트 출력 (특정 조건으로 사용자 유형 및 페이징 네이션의 따라 출력)
   * @queryKey 리액트 쿼리 사용 시 필수적인 값
   * @return {Promise<any>}
   */
  const connectGetRooms = async ({queryKey}) => {
    const [_key, { uno, page, limit, search }] = queryKey;
    const response = await UseApi.get(
      process.env.REACT_APP_API_ROOT +
      `room?`, {
        params: {uno, page, limit, search}
      }
    )
    return response?.data;
  }

  /**
   * (2) 악보 총 갯수 출력
   * @return {Promise<any>}
   */
  const connectSelectListAllCount = async () => {
    const response = await UseApi.get(
      process.env.REACT_APP_API_ROOT + "room/selectListAllCount"
    )
    return response?.data;
  }

  /**
   * (3) 드롭다운 및 장르별 메뉴 표시
   * @return {Promise<any>}
   */
  const connectRoomsGenreList = async () => {
    const response = await UseApi.get(
      process.env.REACT_APP_API_ROOT + "room/master/menu/category" )
    // console.log(response.data)
    return response?.data;
  }

  /**
   * (4) 데이터 추가 - 악보
   * @param data
   * @return {Promise<*>}
   */
  const connectRoomCreate = async (data) => {
    const response = await UseApi.post(
      process.env.REACT_APP_API_ROOT + 'room', data
    )

    return response.data;
  }

  /**
   * (5) 데이터 수정 - 악보
   * @param data
   * @return {Promise<any>}
   */
  const connectRoomUpdate = async (data) => {
    const response = await UseApi.put(
      process.env.REACT_APP_API_ROOT + 'room', data
    )
    return response.data;
  }

  /**
   * (6) 데이터 삭제 - 악보
   * @param sno 악보 인덱스 번호
   * @return {Promise<void>}
   */
  const connectRoomDelete = async (sno) => {
    const response = await UseApi.delete(
      process.env.REACT_APP_API_ROOT + 'room', {
        params: {sno}
      }
    )
    return response.data;
  }

  return {connectGetRooms, connectSelectListAllCount, connectRoomsGenreList, connectRoomCreate, connectRoomUpdate, connectRoomDelete}
}

export default RoomService
