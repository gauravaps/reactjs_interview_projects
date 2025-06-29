import React from 'react'
import useCounter from './useCounter'

const Counter2 = () => {
    const [count ,increament ,Decreament] = useCounter(10)
  return (
    <div>
        <p>{count}</p>
        <button onClick={increament}>Increament</button> 
        <button onClick={Decreament}>Decreament</button>
    </div>
  )
}

export default Counter2