import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/button/Button'
import PageHeader from '../../components/header/PageHeader'
import AttendanceService from '../../services/attendanceService'
import CodeService from '../../services/codeService'

const codeService = new CodeService()
const attendanceService = new AttendanceService()

const AttendanceListPage = () => {
    const [attendances, setAttendances] = useState([])
    const {code} = useParams()

    useEffect(() => {
        const isExistsCode = codeService.isExists(code)
        if(!isExistsCode) {
            window.location.href = "/admin/codes"
        }

        const attendances = attendanceService.getAttendanceByCode(code)
        setAttendances(attendances)
    }, [])

    return (
        <div className='container'>
            <PageHeader text={"Yoklama Listesi"} />
            <div>
                <h2 style={{color: "Highlight"}}>
                    Yoklama Kodu: {code || "Yoklama Kodu Yok"}
                </h2>
            </div>

            <div className='m2'>
                <table>
                    <thead>
                        <tr>
                            <th>Derse Katılan Öğrenci Numaraları</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendances?.map((attendance, index) => (
                            <tr key={index}>
                                <td>{attendance.studentNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AttendanceListPage