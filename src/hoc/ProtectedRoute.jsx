import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Swal from 'sweetalert2'
import AuthService from '../services/authService'

function ProtectedRoute({ roles }) {
    const authService = new AuthService()
    const isLogin = authService.isAuthenticated()

    if (!isLogin) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}

export default ProtectedRoute