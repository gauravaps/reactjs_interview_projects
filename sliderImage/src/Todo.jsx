import React, { useState } from 'react'

const Todo = () => {
const [name ,setname] =useState('');
const [item ,setitem] =useState([])
console.log(name);
const addYourTodo =()=>{
    if(name.trim() === "") return;
    setitem([...item ,name])
    setname('')
}
console.log(item);



  return (
    <div>
        <div>
            <input type="text" value={name} placeholder='Enter your todo' onChange={(e) =>setname(e.target.value)} />
            <button onClick={() =>addYourTodo()}>add todo</button>
        </div>
        {item.length >0 && (
            item.map((vale) =>(
                <><p>{vale}</p></>
            ))
        )}
    </div>
  )
}

export default Todo