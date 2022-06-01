import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button } from '../components/button/Button'
import SidebarNavItem from '../components/Dashboard/SidebarNavItem'
import AuthService from '../services/authService'


const AdminLayout = () => {

    const handleLogoutClick = (e) => {
        e.preventDefault()

        const authService = new AuthService()
        authService.logout()
        window.location.pathname = "/"
    }

    return (
        <div className="dashboard">
            <aside className="sidebar text-center">
                <div>
                    <h1 className='brand'>
                        <Link to='/admin' style={{all: "unset", cursor: "pointer"}}>ADMIN</Link>
                    </h1>
                    <nav className="mt-5 d-block">
                        <ul className="sidebar-nav-list">
                            <SidebarNavItem to="codes" text="Yoklama Listesi" />
                        </ul>
                    </nav>
                </div>
                <div style={{textAlign: "center"}}>
                    <Button onClick={handleLogoutClick} style={{width: "auto", padding: 5, marginBottom: 20, fontSize: "1rem", background: "#e34646"}}>Çıkış Yap</Button>
                </div>
            </aside>
            <main className="dashboard-main bg-ligth text-center">
                <div>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default AdminLayout