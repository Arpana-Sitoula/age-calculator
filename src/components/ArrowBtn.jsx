import React from 'react'
import arrow from '../assets/icon-arrow.svg'
const ArrowBtn = ({onClick}) => {
  return (
    <div className='center-div'>
      <div className='arrow' onClick={onClick}>
        <img src={arrow} />
      </div>
    </div>
  )
}

export default ArrowBtn