import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0);

  function add(){
    setCount(count++)
  };

  function sub(){
    setCount(count--)
  };
  

  return (
    <>
    <div className="all">
    <button onClick={add}> + </button>
    <span className="counter"> {count} </span>
    <button onClick={sub}> - </button>
    </div>
    </>
  )
}

export default App
