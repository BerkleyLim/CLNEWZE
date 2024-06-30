import { atom } from "recoil";
// import { recoilPersist } from "recoil-persist";

// const sessionStorage =
//       typeof window !== 'undefined' ? window.sessionStorage : undefined

// const { persistAtom } = recoilPersist({
//   key: 'recoil-persist', // this key is using to store data in local storage
//   storage: sessionStorage, // configure which storage will be used to store the data
//   converter: JSON // configure how values will be serialized/deserialized in storage
// });

export const roomState = atom({
  key: 'room',
  default: [],
  // effects_UNSTABLE: [persistAtom]
});

/**
 * 검색을 위한 전역 state
 * @type {RecoilState<string>}
 */
export const roomSearchState = atom({
  key: 'roomSearchState',
  default: '',
});

/**
 * 상세보기 & 수정+추가를 위한 연습실의 관련된 데이터 정보
 * @type {RecoilState<{}>}
 */
export const roomModalDataState = atom({
  key: 'roomModalDataState',
  default: {}
})

/**
 * 전체 페이지 상태관리
 * @type {RecoilState<number>}
 */
export const roomTotalPageState= atom({
  key: 'roomPagingNationState',
  default: 1
});

export const roomPageElementState = atom({
  key: 'roomPageElementState',
  default: 10
})

/**
 * 연습실 상세 보기용 state
 * @type {RecoilState<boolean>}
 */
export const roomModalIsViewOpenState = atom({
  key: 'roomModalIsViewOpen',
  default: false
});

/**
 * 연습실 수정&추가 용 state
 * @type {RecoilState<boolean>}
 */
export const roomModalIsEditorOpenState = atom({
  key: 'roomModalIsEditorOpen',
  default: false
});

/**
 * 연습실 파일 자체 변수 - pdf 파일 (File 담는 메소드 - blob형)
 * @type {RecoilState<{}>}
 */
export const roomImageFileState = atom({
  key: 'roomImageFileState',
  default: {}
})

/**
 * 연습실 1페이지 미리보기 - jpg 파일 (File 담는 메소드 - blob형)
 * @type {RecoilState<{}>}
 */
export const roomImagePreviewState = atom({
  key: 'roomImagePreviewState',
  default: {}
})

/**
 * 폼양식 추가 / 수정 모드 (RoomEditorComponent 모드를 말함) : 추가 - false, 수정 - true
 * @type {RecoilState<boolean>}
 */
export const roomIsEditorModeState = atom({
  key: 'roomIsEditorModeState',
  default: false
})


/**
 * 장르 리스트 출력
 * @type {RecoilState<unknown>}
 */
export const roomGenresListState = atom({
  key: 'roomGenresListState',
  default: []
})


export const roomSelectedCategoryState = atom({
  key: 'roomSelectedCategoryState',
  default: 'all',
})
