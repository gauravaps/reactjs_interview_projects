import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-us',{hour12:true}));

  useEffect(() => {
 let interval= setInterval(() => {
                setTime(new Date().toLocaleTimeString('en-us' ,{hour12:true}))

}, 1000);
return () =>{clearInterval(interval)}
        
  },[])

  return (
    <>
      <div>
        <p className="read-the-docs">
          Digital Clock: {time}
        </p>
      </div>
    </>
  )
}

export default App;