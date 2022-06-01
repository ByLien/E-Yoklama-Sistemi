import React from "react";
import Swal from "sweetalert2";
import { Button } from "../components/button/Button";
import { Card, CardBody, CardHeader } from "../components/Card/Card";
import { Form, FormAction, FormGroup, FormInput } from "../components/Forms/Form";
import AttendanceService from "../services/attendanceService";
import CodeService from "../services/codeService";

const attendanceService = new AttendanceService()
const codeService = new CodeService()
const HomePage = () => {
    const [form, setForm] = React.useState({
        studentNumber: "",
        code: "",
    })

    const handleOnInputChange = (e, key) => {
        setForm({ ...form, [key]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        if(form.code.length != 6 || form.code.match(/[^0-9]/g)){
            Swal.fire({
                title: 'Başarısız',
                text: "Yoklama Kodu 6 haneli ve sayılardan oluşmalıdır",
                icon: 'error',
            })    
            return
        }
        if(form.studentNumber.length != 10 || form.studentNumber.match(/[^0-9]/g)){
            Swal.fire({
                title: 'Başarısız',
                text: "Öğrenci numarası 10 haneli ve sayılardan oluşmalıdır",
                icon: 'error',
            })
            return    
        }
        const isExistsCode = codeService.isExists(form.code);
        if(!isExistsCode) {
            Swal.fire({
                title: 'Hata',
                text: "Yoklama Kodu Geçersiz!",
                icon: 'error',
            })
            return
        }
        const msg = attendanceService.addAttendance(form)
        if(!msg) {
            Swal.fire({
                title: 'Başarılı',
                text: "Yoklamanız alınmıştır.",
                icon: 'success',
            })
        } else {
            Swal.fire({
                title: 'Başarısız',
                text: msg,
                icon: 'error',
            })
        }
    }
    return (
        <div style={{display: "flex"}}>
            <Card>
                <CardHeader>
                    <img src={require("../assets/images/logo.png")} alt="trakya university logos" width={128} />
                    <h1>Trakya Üniversitesi</h1>
                    <h2>E-Yoklama Sistemi</h2>
                </CardHeader>
                <CardBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup text={"Okul Numarası"}>
                            <FormInput onChange={(e) => handleOnInputChange(e, "studentNumber")} name="studentNumber" text="Öğrenci numarası" type="number" />
                        </FormGroup>
                        <FormGroup text={"Yoklama Kodu"}>
                            <FormInput onChange={(e) => handleOnInputChange(e, "code")} name="code" text="Yoklama kodu" type="number" />
                        </FormGroup>
                        <Button style={{ marginTop: 30 }}>
                            Yoklamaya Katıl
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default HomePage