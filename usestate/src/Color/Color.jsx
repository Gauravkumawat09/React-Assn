import React, { useState } from 'react'

function Color() {

    let [color, setColor] = useState('')

    function mycolor(e) {
        color = e.target.value
        setColor(color)
        
    }


  return (
    <>
    <div className="color" style={{backgroundColor:"color"}}>
        <h1>this is our color component</h1>
       <input type="color" onChange={mycolor}/> 
    </div>
    </>
  )
}

export default Color