import { useState } from 'react'
import './App.css'

function App() {

  const [cnt, setCnt] = useState(0)

  function OnMinus(){
      setCnt(cnt - 1)
  }
  function OnPlus(){
    setCnt(cnt + 1)
  }

  return (
    <div className="container">
      <div className="board">
        <h1 className="heading">Counter : </h1>
        <div className="buttons">
          <button onClick = {OnMinus} className='minus'>Minus -</button>
          <button onClick = {OnPlus}className='plus'>Plus +</button>
        </div>

        <h1 className="count">{cnt}</h1>
      </div>
    </div>
  )
}

export default App
