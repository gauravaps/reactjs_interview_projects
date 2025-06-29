import React from 'react'
import useCounter from './useCounter'

const Counter1 = () => {
    const [count , increament ,Decreament] = useCounter(5)
  return (
    <div>
        <p>{count}</p>
        <button onClick={increament}>Increament</button> 
        <button onClick={Decreament}>Decreament</button>
    </div>
  )
}

export default Counter1