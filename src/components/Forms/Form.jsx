import React from "react";
import './Form.css'
const Form = ({children, ...props}) => {
    return (
        <form {...props} className="form">
            {children}
        </form>
    )
}

const FormGroup = ({text, children}) => {
    return (
        <div className="form-group">
            {children}
            <label className="input-label">{text}: </label>
        </div>
    )
}

const FormInput = ({...props}) => {

    return (
        <input
            {...props} 
            className="input-field"
            required
        />
    )
}

const FormAction = ({children}) => {
    return (
        <div className="form-action">
            {children}
        </div>
    )
}

export {
    Form,
    FormGroup,
    FormInput,
    FormAction
}