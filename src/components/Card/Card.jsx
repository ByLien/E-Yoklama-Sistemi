import React from 'react'
import './Card.css'

const Card = ({children}) => {
  return (
    <div className='card'>
        {children}
    </div>
  )
}

const CardHeader = ({children}) => {
  return (
    <div className='card-header'>
        {children}
    </div>
  )
}

const CardBody = ({children}) => {
  return (
    <div className='card-body'>
        {children}
    </div>
  )
}


export {
  Card,
  CardHeader,
  CardBody
}