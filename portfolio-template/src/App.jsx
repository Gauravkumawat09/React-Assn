import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="left">
        <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt=""/>
        </div>
        <div className="right">
        <h1>About Us</h1>
        <h5>Developer & Designer</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis facere ratione, ab debitis a aliquam incidunt repudiandae saepe fugiat ducimus provident, deserunt, consequuntur officiis fugit impedit voluptatum exercitationem doloribus culpa doloremque non nam similique nihil in. Explicabo aut, eaque dicta voluptatum aperiam corrupti debitis at autem quos? Qui, architecto dolor.</p>

        <button>Let's Talk</button>
        </div>
      </div>
    </>
  )
}

export default App
