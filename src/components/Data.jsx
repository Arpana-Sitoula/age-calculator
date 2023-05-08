import React, { useState } from 'react'
import Label from './resuable/Label'
import Input from './resuable/Input'
import ArrowBtn from './ArrowBtn'

const Data = ({dateObj,onDayChange,onMonthChange,onYearChange}) => {
const now = new Date();
const nowYear = now.getUTCFullYear();
const nowMonth = now.getUTCMonth()+1;
const nowDay = now.getUTCDate();
console.log(now,nowYear,nowMonth,nowDay);

const [formValue, setFormValue] = useState({
  day: "",
  month: "",
  year: ""
})
const handleChange = (event) => {
  setFormValue({
    ...formValue,
    [event.target.name]: event.target.value,
  });
};
const handleDate = (event) =>{
  event.preventDefault();
  console.log(formValue.day);
  onDayChange(nowDay- formValue.day);
  onYearChange(nowYear -formValue.year);
  onMonthChange(nowMonth - formValue.month);
}


  return (
    <div className='data'>
      <div className="form">
        {dateObj.map((dates) => {
          return (
            <Label key={dates.key} label={dates.val.toUpperCase()} />
          )
        })}
      </div>
      <div className="form">
        <Input  name="day" value={formValue.day} onChange={handleChange} />
        <Input  name="month" value={formValue.month} onChange={handleChange} />
        <Input  name="year" value={formValue.year} onChange={handleChange} />
      </div>
     
      <div className='line'></div>

      <ArrowBtn onClick={handleDate}/>
      
    </div>
  )
}

export default Data