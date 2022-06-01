import React from 'react'
import './Button.css'

const Button = ({children, ...props}) => {
    
    const btnClass = ['btn', props?.className || "", (props?.basic ? "basic" : "")].toString().replace(/,/g, " ")

    return (
        <button {...props} className={btnClass}>
            {children}
        </button>
    )
}

export {
    Button
} 