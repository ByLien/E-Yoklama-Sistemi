import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = ({code, message, to="/", text="Anasayfaya Dön"}) => {
  return (
    <div className='fullpage'>
        <div className='error-body'>
            <h1 className='error-code'>{code}</h1>
            <h4 className='error-text'>{message}</h4>

            <div style={{fontSize: "1.5rem"}}>
                <Link to={to}>{text}</Link>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage