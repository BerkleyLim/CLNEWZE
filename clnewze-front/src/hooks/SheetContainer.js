import { useResetRecoilState, useSetRecoilState } from "recoil";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  sheetIsEditorModeState,
  sheetModalDataState,
  sheetModalIsEditorOpenState,
  sheetModalIsViewOpenState,
  sheetPageElementState, sheetPdfFileState, sheetPdfPreviewState,
  sheetState,
  sheetTotalPageState,
} from "../recoil/state/sheetState";
import SheetService from "../service/SheetService";

const SheetContainer = () => {
  const setSheets = useSetRecoilState(sheetState);
  const setIsViewModal = useSetRecoilState(sheetModalIsViewOpenState);
  const setIsEditorModal = useSetRecoilState(sheetModalIsEditorOpenState);
  const setTotalPage = useSetRecoilState(sheetTotalPageState);
  const setPageElement = useSetRecoilState(sheetPageElementState);
  const setModalData = useSetRecoilState(sheetModalDataState);
  const resetModalData = useResetRecoilState(sheetModalDataState);
  const resetPdfPreview = useResetRecoilState(sheetPdfPreviewState);
  const resetPdfFile= useResetRecoilState(sheetPdfFileState);
  const queryClient = useQueryClient();

  // editor 폼 모드 수정, 추가 이거 변환시키는 state
  const setIsEditorMode = useSetRecoilState(sheetIsEditorModeState);

  const { connectGetSheets, connectSheetsGenreList, connectSheetCreate, connectSheetUpdate, connectSheetDelete } = SheetService();

  /**
   * (1) 리액트 쿼리로 악보 리스트 추가
   * @param uno 사용자 인덱스 번호
   * @param page 페이지 시작번호
   * @param limit 페이지 사이즈
   * @param search 검색
   * @return {UseQueryResult<*, unknown>}
   */
  const useQuerySheetsList = (uno, page, limit, search) => {
    return useQuery(
      ['sheets', { uno, page, limit, search }],
      connectGetSheets,
      {
        onSuccess: (data) => {
          // console.log(data)
          setSheets(data?.data?.data?.sheet)
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
  const addSheetsMutation = useMutation(connectSheetCreate, {
    onSuccess: () => {
      queryClient.invalidateQueries('sheets');
    }
  });


  /**
   * react query를 활용한 악보 수정
   * @type {UseMutationResult<*, unknown, void, unknown>}
   */
  const updateSheetsMutation = useMutation(connectSheetUpdate, {
    onSuccess: () => {
      queryClient.invalidateQueries('sheets');
    }
  });

  /**
   * react query를 활용한 악보 삭제
   * @type {UseMutationResult<*, unknown, void, unknown>}
   */
  const deleteSheetsMutation = useMutation(connectSheetDelete, {
    onSuccess: () => {
      queryClient.invalidateQueries('sheets');
    },
    onError: (error) => {
      console.error("Error deleting sheet:", error);
    }
  });

  /**
   * (2) 악보 상세 보기,
   *
   * @param sheet 악보 상세보기용 데이터
   * @param mode 'view' 악보상세보기, 'editor' 악보수정, 'create' 악보 생성
   */
  const handleModalOpen = (sheet, mode) => {
    if (mode === 'view' || mode === 'editor') {
      setModalData(sheet);
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
    resetPdfPreview();
    resetPdfFile();
  };

  /**
   * (4) react-query를 활용한 악보 내 장르 카테고리 리스트 출력
   * @return {UseQueryResult<*, unknown>}
   */
  const useQuerySheetsGenreList = () => {
    return useQuery(['sheetsGenreList'], connectSheetsGenreList, {
      onSuccess: (data) => {
        // console.log(data);
      },
    });
  };

  /**
   * (5) 악보 생성
   * @param data 입력 폼 데이터
   */
  const handleSheetCreateForm = (data) => {
    addSheetsMutation.mutate(data); // 수정된 부분: mutate 메서드를 호출하여 데이터를 전송
  };

  /**
   * (6) 악보 수정
   * @param data 수정 폼 데이터
   */
  const handleSheetUpdateForm = (data) => {
    updateSheetsMutation.mutate(data);
  }

  /**
   * (7) 악보 삭제
   * @param sno
   */
  const handleSheetDeleteForm = (sno) => {
    deleteSheetsMutation.mutate(sno);
    handleModalClose();
  }

  return {
    handleModalOpen,
    useQuerySheetsGenreList,
    useQuerySheetsList,
    handleModalClose,
    handleSheetCreateForm,
    handleSheetUpdateForm,
    handleSheetDeleteForm
  };
};

export default SheetContainer;
