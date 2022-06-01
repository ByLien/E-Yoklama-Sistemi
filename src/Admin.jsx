import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import AdminHomePage from './pages/admin/AdminHomePage'
import AttendanceListPage from './pages/admin/AttendanceListPage'
import CodeListPage from './pages/admin/CodeListPage'
import ErrorPage from './pages/ErrorPage'

const Admin = () => {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path="" element={<AdminHomePage />} />
                <Route path="codes" element={<CodeListPage />} />
                <Route path="codes/:code" element={<AttendanceListPage />} />
                <Route path='*' element={<ErrorPage to='/admin' code="404" message="Aradığın içerik bizde mevcut değil." />} />
            </Route>
        </Routes>
    )
}

export default Admin