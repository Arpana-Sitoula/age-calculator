import React from 'react'
import Label from './resuable/Label'
import Input from './resuable/Input'
import ArrowBtn from './ArrowBtn'

const Data = ({date}) => {

  return (
    <div className='data'>
      <div className="form">
        {date.map((dates) => {
          return (
            <Label key={dates.key} label={dates.val.toUpperCase()} />
          )
        })}
      </div>
      <div className="form">
        {date.map((dates) => {
          return (
            <Input key={dates.key} type="text" />
          )
        })}
      </div>
     
      <div className='line'></div>

      <ArrowBtn />
      
    </div>
  )
}

export default Data