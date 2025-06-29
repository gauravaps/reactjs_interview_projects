import React, { useState } from 'react'

function App() {
const [color ,setcolor] = useState("#000000")
const [typeColor ,settypeColor] = useState('hex')

const randonColorGenerator =(length)=>{
  return Math.floor(Math.random() * length);
}



let hex = [1,2,3,4,5,6,7,8,9, 'A','B','C','D','E','F'];
const hexcolorhandle =()=>{
  let hexColor = '#'
  for(let i =0 ; i<6; i++){
   hexColor +=hex[randonColorGenerator(hex.length)];
  }
  setcolor(hexColor);
  console.log(hexColor);
  
}

let rgbHandleColor =() =>{
  let r =randonColorGenerator(256);
  let g=randonColorGenerator(256);
  let b=randonColorGenerator(256);
  setcolor(`rgb(${r},${g},${b})`)
  console.log(color);
  

  
}



  return (
    <div style={{
      width:"100%",
      height:"100vh",
      background:`${color}`
    }} >
      <div >
        <button onClick={() => settypeColor('hex')}>Hex color</button>
        <button onClick={() =>settypeColor('rgb')}>rgb color</button>
        <button onClick={typeColor ==='hex'? hexcolorhandle : rgbHandleColor} >Random color</button>
      </div>

      <div>
        <h1>{typeColor} {`${color}`}</h1>
      </div>

    </div>
  )
}

export default App