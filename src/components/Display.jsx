import React from 'react'

const Display = ({year,month,day}) => {
  return (
    <div className='age'>
    <span>{year}</span> years<br/>
      <span>{month}</span> months<br/>
      <span>{day}</span> days
    </div>
  )
}

export default Display