import React, { useState } from 'react'
import Label from './resuable/Label'
import Input from './resuable/Input'
import ArrowBtn from './ArrowBtn'

const Data = ({dateObj,onDayChange,onMonthChange,onYearChange}) => {
const now = new Date();
const nowYear = now.getUTCFullYear();
const nowMonth = now.getUTCMonth();
const nowDay = now.getUTCDate();

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

//main logic for calculating age
let yearAge = nowYear - formValue.year;
let monthAge;
let dateAge;
if(nowMonth >= formValue.month){
  monthAge = nowMonth - formValue.month;
}
else{
  yearAge--;
  monthAge = 12+ nowMonth - formValue.month;
}
if(nowDay >= formValue.day){
  dateAge = nowDay - formValue.day;
}
else{
  monthAge--;
  dateAge = 31 + nowDay - formValue.day;
  if(monthAge < 0){
    monthAge = 11;
    yearAge--;
  }
}


const handleDate = (event) =>{
  event.preventDefault();
  if(formValue.day == "" || formValue.month == "" || formValue.year==""){
    console.log("error");
  }
  else if(formValue.month<=1 || formValue.month>=12){
    console.log("invalid");
  }
  else if(formValue.year > nowYear){
    console.log("invalid");
  }

  else{
  onDayChange(dateAge);
  onYearChange(yearAge);
  onMonthChange(monthAge);
  }
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