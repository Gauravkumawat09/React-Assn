import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header.jsx'
import Color from './Color/Color.jsx'
import { Routes, Route } from "react-router-dom";


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
    <Header/>
    <Routes>
      <Route path="" element={<Color/>}></Route>
    </Routes>


    <div className="all">
    <button onClick={add}> + </button>
    <span className="counter"> {count} </span>
    <button onClick={sub}> - </button>
    </div>
    </>
  )
}

export default App
