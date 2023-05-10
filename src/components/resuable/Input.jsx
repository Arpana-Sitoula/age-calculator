import React from 'react'

const Input = ({ type,value,name,required, onChange }) => {
    return (
        <React.Fragment>
            <input type={type} value={value} required= {required} onChange={onChange} name={name}/>
        </React.Fragment>
    )
}

export default Input