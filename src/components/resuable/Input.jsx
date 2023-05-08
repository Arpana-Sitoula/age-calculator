import React from 'react'

const Input = ({ type,value,name, onChange }) => {
    return (
        <React.Fragment>
            <input type={type} value={value} onChange={onChange} name={name}/>
        </React.Fragment>
    )
}

export default Input