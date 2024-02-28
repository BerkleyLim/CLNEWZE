const menuData = [
  // 상위 리스트 - 일정 관리
  {
    style:{
      textAlign: "left",
      borderColor: "transparent",
      width: "100%",
      backgroundColor: "transparent",
      color: "#333",
      padding: "10% 1% 0 15%",
      fontSize: "1.2em",
    },  // bootstrap 기반으로 ListGroupItem css 추가 설정
    title: "일정관리",  // 제목 보여주기
    isView: true, // 보여주기 여부 설정
    link: "/schedules"
  },
  {
    style:{
      textAlign: "left",
      borderColor: "transparent",
      width: "100%",
      backgroundColor: "transparent",
      color: "#333",
      padding: "3% 1% 0 25%",
      fontSize: "1em"
    },  // bootstrap 기반으로 ListGroupItem css 추가 설정
    title: "개발 일정",  // 제목 보여주기
    isView: true, // 보여주기 여부 설정
  },
  {
    style:{
      textAlign: "left",
      borderColor: "transparent",
      width: "100%",
      backgroundColor: "transparent",
      color: "#333",
      padding: "3% 1% 0 25%",
      fontSize: "1em"
    },  // bootstrap 기반으로 ListGroupItem css 추가 설정
    title: "직원관리",  // 제목 보여주기
    isView: true, // 보여주기 여부 설정
  },
  // 상위 리스트 - 대시보드
  {
    style:{
      textAlign: "left",
      borderColor: "transparent",
      width: "100%",
      backgroundColor: "transparent",
      color: "#333",
      padding: "10% 1% 0 15%",
      fontSize: "1.2em",
    },  // bootstrap 기반으로 ListGroupItem css 추가 설정
    title: "대시보드",  // 제목 보여주기
    isView: true, // 보여주기 여부 설정
    link: "/dashboard"
  },
  // 하위 리스트 - 매출 관리 하위
  {
    style:{
      textAlign: "left",
      borderColor: "transparent",
      width: "100%",
      backgroundColor: "transparent",
      color: "#333",
      padding: "3% 1% 0 25%",
      fontSize: "1em",
    },  // bootstrap 기반으로 ListGroupItem css 추가 설정
    title: "클뉴즈 매출액",  // 제목 보여주기
    isView: true, // 보여주기 여부 설정
    link: "/dashboard/sales"
  },
  {
    style:{
      textAlign: "left",
      borderColor: "transparent",
      width: "100%",
      backgroundColor: "transparent",
      color: "#333",
      padding: "3% 1% 0 25%",
      fontSize: "1em"
    },  // bootstrap 기반으로 ListGroupItem css 추가 설정
    title: "매출항목",  // 제목 보여주기
    isView: true, // 보여주기 여부 설정
  },
  {
    style:{
      textAlign: "left",
      borderColor: "transparent",
      width: "100%",
      backgroundColor: "transparent",
      color: "#333",
      padding: "3% 1% 0 25%",
      fontSize: "1em"
    },  // bootstrap 기반으로 ListGroupItem css 추가 설정
    title: "회계관리",  // 제목 보여주기
    isView: true, // 보여주기 여부 설정
  },
  // 상위 리스트 - 카테고리 관리
  {
    style:{
      textAlign: "left",
      borderColor: "transparent",
      width: "100%",
      backgroundColor: "transparent",
      color: "#333",
      padding: "10% 1% 0 15%",
      fontSize: "1.2em",
    },  // bootstrap 기반으로 ListGroupItem css 추가 설정
    title: "카테고리 관리",  // 제목 보여주기
    isView: true, // 보여주기 여부 설정
    link: "/category"
  },
  // 하위 리스트 - 카테고리 관리 하위
  {
    style:{
      textAlign: "left",
      borderColor: "transparent",
      width: "100%",
      backgroundColor: "transparent",
      color: "#333",
      padding: "3% 1% 0 25%",
      fontSize: "1em",
    },  // bootstrap 기반으로 ListGroupItem css 추가 설정
    title: "악보",  // 제목 보여주기
    isView: true, // 보여주기 여부 설정
    link: "/category/sheet/music"
  },
  // 하위 리스트 - 카테고리 관리 하위
  {
    style:{
      textAlign: "left",
      borderColor: "transparent",
      width: "100%",
      backgroundColor: "transparent",
      color: "#333",
      padding: "3% 1% 0 25%",
      fontSize: "1em",
    },  // bootstrap 기반으로 ListGroupItem css 추가 설정
    title: "선생님",  // 제목 보여주기
    isView: true, // 보여주기 여부 설정
  },
  // 하위 리스트 - 카테고리 관리 하위
  {
    style:{
      textAlign: "left",
      borderColor: "transparent",
      width: "100%",
      backgroundColor: "transparent",
      color: "#333",
      padding: "3% 1% 0 25%",
      fontSize: "1em",
    },  // bootstrap 기반으로 ListGroupItem css 추가 설정
    title: "연습실",  // 제목 보여주기
    isView: true, // 보여주기 여부 설정
  },
  // 하위 리스트 - 카테고리 관리 하위
  {
    style:{
      textAlign: "left",
      borderColor: "transparent",
      width: "100%",
      backgroundColor: "transparent",
      color: "#333",
      padding: "3% 1% 0 25%",
      fontSize: "1em",
    },  // bootstrap 기반으로 ListGroupItem css 추가 설정
    title: "공연",  // 제목 보여주기
    isView: true, // 보여주기 여부 설정
  },
  // 상위 리스트 - 회원관리
  {
    style:{
      textAlign: "left",
      borderColor: "transparent",
      width: "100%",
      backgroundColor: "transparent",
      color: "#333",
      padding: "10% 1% 0 15%",
      fontSize: "1.2em",
    },  // bootstrap 기반으로 ListGroupItem css 추가 설정
    title: "회원관리",  // 제목 보여주기
    isView: true, // 보여주기 여부 설정
  },
  // 하위 리스트 - 그룹사용자관리 하위
  {
    style:{
      textAlign: "left",
      borderColor: "transparent",
      width: "100%",
      backgroundColor: "transparent",
      color: "#333",
      padding: "3% 1% 0 25%",
      fontSize: "1em",
    },  // bootstrap 기반으로 ListGroupItem css 추가 설정
    title: "전체회원조회",  // 제목 보여주기
    isView: true, // 보여주기 여부 설정
  },
  // 상위 리스트 - 게시물 관리
  {
    style:{
      textAlign: "left",
      borderColor: "transparent",
      width: "100%",
      backgroundColor: "transparent",
      color: "#333",
      padding: "10% 1% 0 15%",
      fontSize: "1.2em",
    },  // bootstrap 기반으로 ListGroupItem css 추가 설정
    title: "게시물 관리",  // 제목 보여주기
    isView: true, // 보여주기 여부 설정
  },
  // 하위 리스트 - 게시물 관리 하위
  {
    style:{
      textAlign: "left",
      borderColor: "transparent",
      width: "100%",
      backgroundColor: "transparent",
      color: "#333",
      padding: "3% 1% 0 25%",
      fontSize: "1em",
    },  // bootstrap 기반으로 ListGroupItem css 추가 설정
    title: "공지사항",  // 제목 보여주기
    isView: true, // 보여주기 여부 설정
  },
  // 하위 리스트 - 게시물 관리 하위
  {
    style:{
      textAlign: "left",
      borderColor: "transparent",
      width: "100%",
      backgroundColor: "transparent",
      color: "#333",
      padding: "3% 1% 0 25%",
      fontSize: "1em",
    },  // bootstrap 기반으로 ListGroupItem css 추가 설정
    title: "QNA",  // 제목 보여주기
    isView: true, // 보여주기 여부 설정
  },
]

export default menuData;