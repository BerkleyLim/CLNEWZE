import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SchedulesManagementPage from '../pages/schedules/SchedulesManagementPage'
import SalesManagementPage from '../pages/sales/SalesManagementPage'
import CategoryManagementPage from '../pages/category/CategoryManagementPage'

const MainComponentRouter = () => {
  return (
    <Routes>
      {/* 처음 진입 화면과, /schedules 시 예약 정보가 default 및 표시 */}
      <Route path="/" element={<SchedulesManagementPage />} />
      <Route
        path="/schedules"
        element={<SchedulesManagementPage />} />
      {/* 매출 관리를 표시하는 라우터 컴포넌트 */}
      <Route
        path="/sales"
        element={<SalesManagementPage />} />
      {/* 카테고리 관리를 표시하는 라우터 컴포넌트 */}
      <Route
        path="/category"
        element={<CategoryManagementPage />} />
    </Routes>
  )
}

export default MainComponentRouter