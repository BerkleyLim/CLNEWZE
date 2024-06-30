import { atom } from "recoil";
// import { recoilPersist } from "recoil-persist";

// const sessionStorage =
//       typeof window !== 'undefined' ? window.sessionStorage : undefined

// const { persistAtom } = recoilPersist({
//   key: 'recoil-persist', // this key is using to store data in local storage
//   storage: sessionStorage, // configure which storage will be used to store the data
//   converter: JSON // configure how values will be serialized/deserialized in storage
// });

export const sheetState = atom({
  key: 'sheet',
  default: [],
  // effects_UNSTABLE: [persistAtom]
});

/**
 * 검색을 위한 전역 state
 * @type {RecoilState<string>}
 */
export const sheetSearchState = atom({
  key: 'sheetSearchState',
  default: '',
});

/**
 * 상세보기 & 수정+추가를 위한 악보의 관련된 데이터 정보
 * @type {RecoilState<{}>}
 */
export const sheetModalDataState = atom({
  key: 'sheetModalDataState',
  default: {}
})

/**
 * 전체 페이지 상태관리
 * @type {RecoilState<number>}
 */
export const sheetTotalPageState= atom({
  key: 'sheetPagingNationState',
  default: 1
});

export const sheetPageElementState = atom({
  key: 'sheetPageElementState',
  default: 10
})

/**
 * 악보 상세 보기용 state
 * @type {RecoilState<boolean>}
 */
export const sheetModalIsViewOpenState = atom({
  key: 'sheetModalIsViewOpen',
  default: false
});

/**
 * 악보 수정&추가 용 state
 * @type {RecoilState<boolean>}
 */
export const sheetModalIsEditorOpenState = atom({
  key: 'sheetModalIsEditorOpen',
  default: false
});

/**
 * 악보 파일 자체 변수 - pdf 파일 (File 담는 메소드 - blob형)
 * @type {RecoilState<{}>}
 */
export const sheetPdfFileState = atom({
  key: 'sheetPdfFileState',
  default: {}
})

/**
 * 악보 1페이지 미리보기 - jpg 파일 (File 담는 메소드 - blob형)
 * @type {RecoilState<{}>}
 */
export const sheetPdfPreviewState = atom({
  key: 'sheetPdfPreviewState',
  default: {}
})

/**
 * 폼양식 추가 / 수정 모드 (RoomEditorComponent 모드를 말함) : 추가 - false, 수정 - true
 * @type {RecoilState<boolean>}
 */
export const sheetIsEditorModeState = atom({
  key: 'sheetIsEditorModeState',
  default: false
})


/**
 * 장르 리스트 출력
 * @type {RecoilState<unknown>}
 */
export const sheetGenresListState = atom({
  key: 'sheetGenresListState',
  default: []
})


export const sheetSelectedCategoryState = atom({
  key: 'sheetSelectedCategoryState',
  default: 'all',
})
