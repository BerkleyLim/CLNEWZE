import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/error/ErrorPage";
import IntroductionPage from "../pages/user/introduction/IntroductionPage";
import UserInfoPage from "../pages/mypage/user/UserInfoPage";
import CareerPage from "../pages/mypage/career/CareerPage";
import MyPageTeacherPage from "../pages/mypage/teacher/MyPageTeacherPage";
import SubscriptPage from "../pages/mypage/subscript/SubscriptPage";
import MyPagePerformancePage from "../pages/mypage/performance/MyPagePerformancePage";
import SheetPage from "../pages/user/sheetmusic/SheetMusicPage";
import UserListPage from "../pages/mypage/admin/UserListPage";
import AdminRoomPage from "../pages/mypage/admin/AdminRoomPage";
import AdminTeacherPage from "../pages/mypage/admin/AdminTeacherPage";
import AdminDashBoardPage from "../pages/mypage/admin/AdminDashBoardPage";
import UserRouterLayout from "../layout/UserRouterLayout";
import MyPageLayout from "../layout/MyPageLayout";
import PerformancePage from "../pages/user/performance/PerformancePage";
import PracticePage from "../pages/user/practiceroom/PracticeRoomPage";
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
        path: 'practice/:pageNo',
        element: <PracticePage />,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'sheet/:pageNo',
        element: <SheetPage />,
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
        element: <SubscriptPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'performance/info',
        element: <MyPagePerformancePage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'sheet/info',
        element: <SheetPage/>,
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
        path: 'room',
        element: <AdminRoomPage/>,
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