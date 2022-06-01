import React from 'react'

const AdminHomePage = () => {
    return (
        <div className='dashboard-home'>
            <img src={require("../../assets/images/logo.png")} alt="trakya university logos" width={128} />
            <h1>Trakya Üniversitesi</h1>
            <h2>E-Yoklama Sistemi</h2>

            <h2 style={{fontSize: "2rem", color: "#cb9832"}}>
                Yönetici Paneli
            </h2>
        </div>
    )
}

export default AdminHomePage