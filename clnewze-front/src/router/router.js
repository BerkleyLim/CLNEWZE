import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/error/ErrorPage";
import IntroductionPage from "../pages/user/introduction/IntroductionPage";
import UserInfoPage from "../pages/mypage/user/UserInfoPage";
import CareerPage from "../pages/mypage/career/CareerPage";
import MyPageTeacherPage from "../pages/mypage/teacher/MyPageTeacherPage";
import SubScriptPage from "../pages/mypage/sub/script/SubScriptPage";
import MyPagePerformancePage from "../pages/mypage/performance/MyPagePerformancePage";
import SheetMusicPage from "../pages/user/sheetmusic/SheetMusicPage";
import UserListPage from "../pages/mypage/admin/UserListPage";
import AdminPracticeRoomPage from "../pages/mypage/admin/AdminPracticeRoomPage";
import AdminTeacherPage from "../pages/mypage/admin/AdminTeacherPage";
import AdminDashBoardPage from "../pages/mypage/admin/AdminDashBoardPage";
import UserRouterLayout from "../layout/UserRouterLayout";
import MyPageLayout from "../layout/MyPageLayout";
import PerformancePage from "../pages/user/performance/PerformancePage";
import PracticeRoomPage from "../pages/user/practiceroom/PracticeRoomPage";
import TeacherPage from "../pages/user/teacher/TeacherPage";
import BlogPage from "../pages/user/blog/BlogPage";
import MainComponent from "../components/commom/main/MainComponent";


const router = createBrowserRouter([
  {
    path: '/',
    element: <UserRouterLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'main',
        element: <MainComponent />,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'introduction',
        element: <IntroductionPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'performance',
        element: <PerformancePage />,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'practiceRoom/:pageNo',
        element: <PracticeRoomPage />,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'sheetmusic/:pageNo',
        element: <SheetMusicPage />,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'teacher/:pageNo',
        element: <TeacherPage />,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'blog/:pageNo',
        element: <BlogPage />,
        errorElement: <ErrorPage/>,
      },
    ]
  },
  {
    path: '/mypage/:id/',
    element: <MyPageLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'info',
        element: <UserInfoPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'career',
        element: <CareerPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'teacher',
        element: <MyPageTeacherPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'subscript',
        element: <SubScriptPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'performance/info',
        element: <MyPagePerformancePage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'sheetmusic/info',
        element: <SheetMusicPage/>,
        errorElement: <ErrorPage/>,
      }
    ]
  },
  {
    path: '/admin/admin/',
    element: <MyPageLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'user/list',
        element: <UserListPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'practiceroom',
        element: <AdminPracticeRoomPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'teacher',
        element: <AdminTeacherPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'dashboard',
        element: <AdminDashBoardPage/>,
        errorElement: <ErrorPage/>,
      }
    ]
  }
])


export default router