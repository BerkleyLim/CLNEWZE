const menuData = [
    // 상위 리스트 - 일정 관리
    {
        index: 1,
        title: "일정관리",  // 제목 보여주기
        className: 'hover:bg-sky-500',
        isView: true, // 보여주기 여부 설정
        isChild: false, // 자식 노드일 경우
        link: "/admin-server/schedules",
        parent: -1,    // 부모 노드 인덱스 번호 (없을 시 -1)
        icons: "bi bi-building",
        subNode: [
            {
                index: 2,
                title: "개발 일정",  // 제목 보여주기
                className: 'hover:bg-sky-500',
                isView: true, // 보여주기 여부 설정
                isChild: true, // 자식 노드일 경우
                link: "/admin-server/schedules/develop",
                parent: 1,    // 부모 노드 확인(없을 시 빈값)
                icons: "bi bi-calendar-fill"
            },
            {
                index: 3,
                title: "직원관리",  // 제목 보여주기
                className: 'hover:bg-sky-500',
                isView: true, // 보여주기 여부 설정
                isChild: true, // 자식 노드일 경우
                link: "/admin-server/schedules/employee",
                parent: 1,    // 부모 노드 확인(없을 시 빈값)
                icons: "bi bi-people-fill"
            },
        ]
    },
    // 상위 리스트 - 대시보드
    {
        index: 4,
        title: "대시보드",  // 제목 보여주기
        className: 'hover:bg-sky-500',
        isView: true, // 보여주기 여부 설정
        isChild: false, // 자식 노드일 경우
        link: "/admin-server/dashboard",
        parent: -1,    // 부모 노드 확인(없을 시 빈값)
        icons: "bi bi-clipboard-data-fill",
        subNode: [
            {
                index: 5,
                title: "클뉴즈 매출액",  // 제목 보여주기
                className: 'hover:bg-sky-500',
                isView: true, // 보여주기 여부 설정
                isChild: true, // 자식 노드일 경우
                link: "/admin-server/dashboard/sales",
                parent: 4,    // 부모 노드 확인(없을 시 빈값)
                icons: "bi bi-receipt"
            },
            {
                index: 6,
                title: "매출항목",  // 제목 보여주기
                className: 'hover:bg-sky-500',
                isView: true, // 보여주기 여부 설정
                isChild: true, // 자식 노드일 경우
                parent: 4,    // 부모 노드 확인(없을 시 빈값)
                icons: "bi bi-view-list"
            },
            {
                index: 7,
                title: "회계관리",  // 제목 보여주기
                className: 'hover:bg-sky-500',
                isView: true, // 보여주기 여부 설정
                isChild: true, // 자식 노드일 경우
                parent: 4,    // 부모 노드 확인(없을 시 빈값)
                icons: "bi bi-reception-4"
            },
        ]
    },
    // 상위 리스트 - 카테고리 관리
    {
        index: 8,
        title: "카테고리 관리",  // 제목 보여주기
        className: 'hover:bg-sky-500',
        isView: true, // 보여주기 여부 설정
        isChild: false, // 자식 노드일 경우
        link: "/admin-server/category",
        parent: -1,    // 부모 노드 확인(없을 시 빈값)
        icons: "bi bi-card-checklist",
        subNode: [
            {
                index: 9,
                title: "악보",  // 제목 보여주기
                className: 'hover:bg-sky-500',
                isView: true, // 보여주기 여부 설정
                isChild: true, // 자식 노드일 경우
                link: "/admin-server/category/sheet/music",
                parent: 8,    // 부모 노드 확인(없을 시 빈값)
                icons: "bi bi-music-note-list"
            },
            {
                index: 10,
                title: "선생님",  // 제목 보여주기
                className: 'hover:bg-sky-500',
                isView: true, // 보여주기 여부 설정
                isChild: true, // 자식 노드일 경우
                parent: 8,    // 부모 노드 확인(없을 시 빈값)
                icons: "bi bi-person-bounding-box"
            },
            {
                index: 11,
                title: "연습실",  // 제목 보여주기
                className: 'hover:bg-sky-500',
                isView: true, // 보여주기 여부 설정
                isChild: true, // 자식 노드일 경우
                parent: 8,    // 부모 노드 확인(없을 시 빈값)
                icons: "bi bi-align-center"
            },
            {
                index: 12,
                title: "공연",  // 제목 보여주기
                className: 'hover:bg-sky-500',
                isView: true, // 보여주기 여부 설정
                isChild: true, // 자식 노드일 경우
                parent: 8,    // 부모 노드 확인(없을 시 빈값)
                icons: "bi bi-ticket-perforated-fill"
            },
        ]
    },
    // 상위 리스트 - 회원관리
    {
        index: 13,
        title: "회원관리",  // 제목 보여주기
        className: 'hover:bg-sky-500',
        isView: true, // 보여주기 여부 설정
        isChild: false, // 자식 노드일 경우
        parent: -1,    // 부모 노드 확인(없을 시 빈값)
        icons: "bi bi-person-lock",
        subNode: [
            {
                index: 14,
                title: "전체회원조회",  // 제목 보여주기
                className: 'hover:bg-sky-500',
                isView: true, // 보여주기 여부 설정
                isChild: true, // 자식 노드일 경우
                parent: 13,    // 부모 노드 확인(없을 시 빈값)
                icons: "bi bi-person-lock"
            },
        ]
    },
    // 상위 리스트 - 게시물 관리
    {
        index: 15,
        title: "게시물 관리",  // 제목 보여주기
        className: 'hover:bg-sky-500',
        isView: true, // 보여주기 여부 설정
        isChild: false, // 자식 노드일 경우
        parent: -1,    // 부모 노드 확인(없을 시 빈값)
        icons: "bi bi-border-all",
        subNode: [
            {
                index: 16,
                title: "공지사항",  // 제목 보여주기
                className: 'hover:bg-sky-500',
                isView: true, // 보여주기 여부 설정
                isChild: true, // 자식 노드일 경우
                parent: 15,    // 부모 노드 확인(없을 시 빈값)
                icons: "bi bi-stickies-fill"
            },
            {
                index: 17,
                title: "QNA",  // 제목 보여주기
                className: 'hover:bg-sky-500',
                isView: true, // 보여주기 여부 설정
                isChild: true, // 자식 노드일 경우
                parent: 15,    // 부모 노드 확인(없을 시 빈값)
                icons: "bi bi-question-circle-fill"
            },
        ]
    },
]

export default menuData;
