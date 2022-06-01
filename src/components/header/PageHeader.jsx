import React from 'react'

const PageHeader = ({text}) => {
  return (
    <h1 style={{
        lineHeight: "1.5",
        letterSpacing: "0.1rem",
        fontSize: "2.5rem",
        textAlign: "center",
        color: "#3b4076"
    }}>
        {text}
    </h1>
  )
}

export default PageHeader