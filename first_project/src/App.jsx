import React, { useState } from "react";

import "./App.css";
import data from "./data";

const App = () => {
  const [selected, Setselected] = useState(null);
  const [multiopen, Setmultiopen] = useState(false);
  const [multiselected , setmultiselected] = useState([]);
 
  let showAns = (itemId) => {
    if(multiopen){
      if(multiselected.includes(itemId)){
        setmultiselected((prev)=>prev.filter((id) => id !==itemId))
      }else{
        setmultiselected((prev)=>[...prev , itemId])
      }
    }else{
      Setselected(itemId);
    }
    
  };



  const showAnsMulti =() =>{
    Setselected(null)
    Setmultiopen((prev) => !prev)
    setmultiselected([])
    
  }

  return (
    <div>
      <button onClick={showAnsMulti}>{multiopen ? "Switch to Single Open" : "Open Multiple"}</button>

      <div>

        

        {/* first method */}
        {/* {multiopen ? (
          <>
            
            {data.map((item) => (
              <p key={item.id}>
                {item.question} <span>+</span>
                <p>{item.ans}</p>
              </p>
            ))}
          </>
        ) : ( 

         <>  {data && data.length > 0 ? (
          <div>
            {data.map((item) => (
              <p onClick={() => showAns(item.id)} key={item.id}>
                {item.question} <span>+</span>
                {selected === item.id ? <p>{item.ans}</p> : ""}
              </p>
            ))}
          </div>
        ) : (
          ""
        )} </>

      )} */}





      {/* second method... */}
      {data && data.length > 0 ? (
          <div>
            {data.map((item) => (
              <p onClick={() => showAns(item.id)} key={item.id}>
                {item.question} <span>+</span>
              {/* {(multiopen ? multiselected.includes(item.id) : selected ===item.id) && <p>{item.ans}</p>} */}

              {/* this is second condition with easy code */}

              {multiopen && multiselected.includes(item.id) && <p>{item.ans}</p>}
              {!multiopen && selected === item.id && <p>{item.ans}</p>}


              </p>
            ))}
          </div>
        ) : (
            <p>No data found</p>
        )}


      </div>
    </div>
  );
};

export default App;
