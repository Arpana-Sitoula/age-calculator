import { useState } from "react"
import Data from "./components/Data"
import Display from "./components/Display"

function App() {
  const [day, setDay] = useState("--");
  const [month, setMonth] = useState("--");
  const [year, setYear] = useState("--");
  const dateObj = [
    { key: 1, val: "day" , len:2},
    { key: 2, val: "month", len:2 },
    { key: 3, val: "year", len:4}
  ]


  return (
    <div className="main">
      <div className="app">
        <div className="container">
          <Data dateObj={dateObj} onDayChange={setDay} onMonthChange={setMonth} onYearChange={setYear} />
          <Display year={year} month={month} day={day}/>
        </div>
      </div>
    </div>
  )
}

export default App
