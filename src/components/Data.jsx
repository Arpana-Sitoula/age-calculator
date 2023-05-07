import React from 'react'
import Label from './resuable/Label'
import Input from './resuable/Input'
import ArrowBtn from './ArrowBtn'

const Data = () => {
  const date = [
    { key: 1, val: "day" },
    { key: 2, val: "month" },
    { key: 3, val: "year" }
  ]
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
     


      <ArrowBtn />
    </div>
  )
}

export default Data