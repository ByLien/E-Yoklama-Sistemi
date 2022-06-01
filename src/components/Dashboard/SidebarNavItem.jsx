import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const SidebarNavItem = ({ to, text }) => {

    const location = useLocation()

    return (
        <li className='sidebar-nav-item'>
            <NavLink to={to} className={location.pathname.includes(to) ? "active" : ""}>
                {text}
            </NavLink>
        </li>
    )
}

export default SidebarNavItem