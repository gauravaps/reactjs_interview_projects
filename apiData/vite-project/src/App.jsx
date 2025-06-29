import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data ,setdata] =useState([])
  const [showans ,setshowans] = useState([])

  const getData = async()=>{
    let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setdata(response?.data) 
  }
 
  useEffect(() =>{
    getData()
  },[])

  const callAns =(id) =>{
    //first method with previous id and new id
    // setshowans(  [...showans ,id] )

    //second methos with previous id and new id
    setshowans((prev) => [...prev ,id])
  }
console.log(showans.includes(6));

  

  return (
    <div><h1>this is json data list</h1>


    {data.length >0 && data.map((post =>(

      <div style={{cursor:'pointer'}} onClick={() =>callAns(post.id)} key={post.id}>
          <h4>{post.title} +</h4>
          {/* {showans ===post.id && <p>{post.body}</p>} */}
            {/* {showans.map((ans)=>(ans ===post.id && (<p key={ans}>{post.body}</p>)))} */}
            {showans.includes(post.id) && <p >{post.body}</p>}

        </div>

    )))}

      </div>
  )
}

export default App