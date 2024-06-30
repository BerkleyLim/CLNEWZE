import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import ErrorPage from "../pages/error/ErrorPage";
import LoginLayout from "../layout/login/LoginLayout";
import MainPage from "../pages/main/MainPage";
import SchedulesManagementPage from "../pages/schedules/SchedulesManagementPage";
import DashboardManagementPage from "../pages/dashboard/DashboardManagementPage";
import SalesManagementPage from "../pages/dashboard/sub/SalesManagementPage";
import CategoryManagementPage from "../pages/category/CategoryManagementPage";
import SheetManegementPage from "../pages/category/sub/SheetManegementPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'admin-server/main',
        element: <MainPage/>,
        errorElement: <ErrorPage/>
      },
      {
        path: 'admin-server/schedules/*',
        element: <SchedulesManagementPage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: 'admin-server/dashboard',
        element: <DashboardManagementPage/>,
        errorElement: <ErrorPage/>,
        children: [
          {
            path:'sales',
            element: <SalesManagementPage/>,
            errorElement: <ErrorPage/>
          }
        ]
      },
      {
        path: 'admin-server/category',
        element: <CategoryManagementPage/>,
        errorElement: <ErrorPage/>,
        children: [
          {
            path: 'sheet/music',
            element: <SheetManegementPage/>,
            errorElement: <ErrorPage/>
          }
        ]
      },
    ]
  },
  {
    path: '/admin-server/login',
    element: <LoginLayout/>,
    errorElement: <ErrorPage/>
  }
])


export default router;
