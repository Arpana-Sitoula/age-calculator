import { useReducer } from "react"
import Data from "./components/Data"
import Display from "./components/Display"

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DAY':
      return { ...state, day: action.payload };
    case 'SET_MONTH':
      return { ...state, month: action.payload };
    case 'SET_YEAR':
      return { ...state, year: action.payload };
    default:
      return state;
  }
};


function App() {
  // const [day, setDay] = useState("--");
  // const [month, setMonth] = useState("--");
  // const [year, setYear] = useState("--");


  const [state, dispatch] = useReducer(reducer, {
    day: "--",
    month: "--",
    year: "--"
  });



  const dateObj = [
    { key: 1, val: "day" },
    { key: 2, val: "month" },
    { key: 3, val: "year" }
  ]


  return (
    <div className="main">
      <div className="app">
        <div className="container">
          <Data
            dateObj={dateObj}
            onDayChange={(day) => dispatch({ type: 'SET_DAY', payload: day })}
            onMonthChange={(month) => dispatch({ type: 'SET_MONTH', payload: month })}
            onYearChange={(year) => dispatch({ type: 'SET_YEAR', payload: year })}
          />
          <Display year={state.year} month={state.month} day={state.day} />
        </div>
      </div>
    </div>
  )
}

export default App
