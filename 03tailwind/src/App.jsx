import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import Monkey from './components/Monkey'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test!</h1>
    <Monkey username="Ashu" value = 'click me' /><br></br>
    <Monkey username="Anjali" />   
    </>
  )
}

export default App

