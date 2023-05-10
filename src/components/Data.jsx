import React, { useState } from 'react'
import Label from './resuable/Label'
import Input from './resuable/Input'
import ArrowBtn from './ArrowBtn'
import ErrorMsg from './resuable/ErrorMsg'

const Data = ({ dateObj, onDayChange, onMonthChange, onYearChange }) => {
  const now = new Date();
  const nowYear = now.getUTCFullYear();
  const nowMonth = now.getUTCMonth() + 1;
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
  if (nowMonth >= formValue.month) {
    monthAge = nowMonth - formValue.month;
  }
  else {
    yearAge--;
    monthAge = 12 + nowMonth - formValue.month;
  }
  if (nowDay >= formValue.day) {
    dateAge = nowDay - formValue.day;
  }
  else {
    monthAge--;
    dateAge = 31 + nowDay - formValue.day;
    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  let error;
  const handleDate = (event, error) => {
    event.preventDefault();

    //form validation
    if (formValue.day == "" || formValue.month == "" || formValue.year == "") {
      console.log("error");
    }
    else if (formValue.month <= 1 || formValue.month >= 12) {
      console.log("invalid");
    }
    else if (formValue.year == nowYear && formValue.month == nowMonth && formValue.day > nowDay) {
      console.log("invalid");
    }
    else if (formValue.year == nowYear && formValue.month > nowMonth) {
      console.log("invalid");
    }
    else if(formValue.year == nowYear){
      console.log("invalid");
    }
    else if (formValue.month == 2  && formValue.day >28) {
      console.log("Invalid");
    }
    else if (formValue.month == 2 && formValue.year % 4 == 0 && formValue.day >29) {
      console.log("Invalid");
    }
    else if (formValue.day <= 1 || formValue.day >= 31) {
      console.log("Invalid");
    }
    else if((formValue.month == 4 ||formValue.month == 6 ||formValue.month == 9 ||formValue.month == 11) && formValue.day > 30 ){
        console.log("Invalid");
    }

    else {
      error = <ErrorMsg time="time" />;
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
        <div>  <Input name="day" value={formValue.day} required = {true} onChange={handleChange} />
          {error}</div>
        <div>  <Input name="month" value={formValue.month} required = {true} onChange={handleChange} />
          {error}</div>
        <div>  <Input name="year" value={formValue.year} required = {true} onChange={handleChange} />
          {error}</div>
      </div>

      <div className='line'></div>

      <ArrowBtn onClick={handleDate} />

    </div>
  )
}

export default Data