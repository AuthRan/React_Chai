import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    if(counter === 20){
      return;
    }
    counter+=1
    setCounter(counter)
  }
  const lessValue = () => {
    if(counter === 0){
      return;
    }
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Hey welcome</h1>
      <h2>Hope you're good !</h2>
      <h3>Counter: {counter}</h3>
      <button onClick={addValue}>Increase</button>
      <button onClick={lessValue}>Decrease</button>
    </>
  )
}

export default App
