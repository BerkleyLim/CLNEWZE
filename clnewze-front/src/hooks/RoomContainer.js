import { useResetRecoilState, useSetRecoilState } from "recoil";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  roomImageFileState, roomImagePreviewState,
  roomIsEditorModeState,
  roomModalDataState,
  roomModalIsEditorOpenState,
  roomModalIsViewOpenState,
  roomPageElementState, roomPdfFileState, roomPdfPreviewState,
  roomState,
  roomTotalPageState,
} from "../recoil/state/roomState";
import RoomService from "../service/RoomService";

const RoomContainer = () => {
  const setRooms = useSetRecoilState(roomState);
  const setIsViewModal = useSetRecoilState(roomModalIsViewOpenState);
  const setIsEditorModal = useSetRecoilState(roomModalIsEditorOpenState);
  const setTotalPage = useSetRecoilState(roomTotalPageState);
  const setPageElement = useSetRecoilState(roomPageElementState);
  const setModalData = useSetRecoilState(roomModalDataState);
  const resetModalData = useResetRecoilState(roomModalDataState);
  const resetImagePreview = useResetRecoilState(roomImagePreviewState);
  const resetImageFile= useResetRecoilState(roomImageFileState);
  const queryClient = useQueryClient();

  // editor 폼 모드 수정, 추가 이거 변환시키는 state
  const setIsEditorMode = useSetRecoilState(roomIsEditorModeState);

  const { connectGetRooms, connectRoomsGenreList, connectRoomCreate, connectRoomUpdate, connectRoomDelete } = RoomService();

  /**
   * (1) 리액트 쿼리로 악보 리스트 추가
   * @param uno 사용자 인덱스 번호
   * @param page 페이지 시작번호
   * @param limit 페이지 사이즈
   * @param search 검색
   * @return {UseQueryResult<*, unknown>}
   */
  const useQueryRoomsList = (uno, page, limit, search) => {
    return useQuery(
      ['rooms', { uno, page, limit, search }],
      connectGetRooms,
      {
        onSuccess: (data) => {
          // console.log(data)
          setRooms(data?.data?.data?.room)
          setTotalPage(data?.data?.totalPage);
          setPageElement(data?.data?.pageElement);
        }
      }
    );
  }

  /**
   * react query 를 활용한 악보 추가
   * @type {UseMutationResult<*, unknown, void, unknown>}
   */
  const addRoomsMutation = useMutation(connectRoomCreate, {
    onSuccess: () => {
      queryClient.invalidateQueries('rooms');
    }
  });


  /**
   * react query를 활용한 악보 수정
   * @type {UseMutationResult<*, unknown, void, unknown>}
   */
  const updateRoomsMutation = useMutation(connectRoomUpdate, {
    onSuccess: () => {
      queryClient.invalidateQueries('rooms');
    }
  });

  /**
   * react query를 활용한 악보 삭제
   * @type {UseMutationResult<*, unknown, void, unknown>}
   */
  const deleteRoomsMutation = useMutation(connectRoomDelete, {
    onSuccess: () => {
      queryClient.invalidateQueries('rooms');
    },
    onError: (error) => {
      console.error("Error deleting room:", error);
    }
  });

  /**
   * (2) 악보 상세 보기,
   *
   * @param room 악보 상세보기용 데이터
   * @param mode 'view' 악보상세보기, 'editor' 악보수정, 'create' 악보 생성
   */
  const handleModalOpen = (room, mode) => {
    if (mode === 'view' || mode === 'editor') {
      setModalData(room);
    }

    if (mode === 'create' || mode === 'editor') {
      setIsViewModal(false);
      setIsEditorModal(true);

      setIsEditorMode((mode !== 'create'))
    } else {
      setIsViewModal(true);
      setIsEditorModal(false);
    }
  };

  /**
   * (3) 모달 닫기, 전부 닫고 모달 상세보기의 데이터 전부 초기화
   */
  const handleModalClose = () => {
    setIsViewModal(false);
    setIsEditorModal(false);
    resetModalData();
    resetImagePreview();
    resetImageFile();
  };

  /**
   * (4) react-query를 활용한 악보 내 장르 카테고리 리스트 출력
   * @return {UseQueryResult<*, unknown>}
   */
  const useQueryRoomsGenreList = () => {
    return useQuery(['roomsGenreList'], connectRoomsGenreList, {
      onSuccess: (data) => {
        // console.log(data);
      },
    });
  };

  /**
   * (5) 악보 생성
   * @param data 입력 폼 데이터
   */
  const handleRoomCreateForm = (data) => {
    addRoomsMutation.mutate(data); // 수정된 부분: mutate 메서드를 호출하여 데이터를 전송
  };

  /**
   * (6) 악보 수정
   * @param data 수정 폼 데이터
   */
  const handleRoomUpdateForm = (data) => {
    updateRoomsMutation.mutate(data);
  }

  /**
   * (7) 악보 삭제
   * @param sno
   */
  const handleRoomDeleteForm = (sno) => {
    deleteRoomsMutation.mutate(sno);
    handleModalClose();
  }

  return {
    handleModalOpen,
    useQueryRoomsGenreList,
    useQueryRoomsList,
    handleModalClose,
    handleRoomCreateForm,
    handleRoomUpdateForm,
    handleRoomDeleteForm
  };
};

export default RoomContainer;
