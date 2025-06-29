import React, { useState } from 'react'

const useCounter = (initialvalue =1) => {
    const [count ,setcount] = useState(initialvalue);

    function increament  (){
        setcount(count +initialvalue)
    }

    function Decreament () {
        setcount(count -1)
    }

  return[count ,increament ,Decreament]
}

export default useCounter ;   