import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Button } from '../components/button/Button'
import { Card, CardBody, CardHeader } from '../components/Card/Card'
import { Form, FormGroup, FormInput } from '../components/Forms/Form'
import AuthService from '../services/authService'

const authService = new AuthService()

const LoginPage = () => {
    const navigate = useNavigate()
    const [form, setForm] = React.useState({
        username: "",
        password: "",
    })

    useEffect(() => {
        const isAuthanticated = authService.isAuthenticated()
        if(isAuthanticated) {
            navigate('/admin')
        }
    }, [])

    const handleOnInputChange = (e, key) => {
        setForm({ ...form, [key]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = authService.login(form)
        Swal.fire({
            title: data.success ? 'Başarılı' : "Başarısız",
            text: data.message,
            icon: data.success ? 'success' : 'error',
        }).finally(() => {
            if(data.success) {
                navigate("/admin")
            }
        })
    }

    return (
        <div className='login'>
            <Card>
                <CardHeader>ADMIN PANEL</CardHeader>
                <CardBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup text={"Kullanıcı Adı"}>
                            <FormInput name="username" onChange={(e) => handleOnInputChange(e, "username")} />
                        </FormGroup>
                        <FormGroup text={"Şifre"}>
                            <FormInput name="password" type="password" onChange={(e) => handleOnInputChange(e, "password")}/>
                        </FormGroup>
                        <Button style={{ marginTop: 30 }}>
                            Giriş Yap
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default LoginPage