import Data from "./components/Data"
import Display from "./components/Display"

function App() {
  const date = [
    { key: 1, val: "day" },
    { key: 2, val: "month" },
    { key: 3, val: "year" }
  ]

  return (
    <div className="main">
      <div className="app">
        <div className="container">
          <Data date={date}/>
          <Display year="38" month="3" day="26"/>
        </div>
      </div>
    </div>
  )
}

export default App
