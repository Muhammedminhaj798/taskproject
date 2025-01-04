import React, { createContext, useState } from 'react'

export const StateContext = createContext()
function Context({children}) {
    const [array, setArray] = useState([{name:'',description:''}]);
   console.log("dfgsdfg",array);
   
    
  return (
    <>
    <StateContext.Provider value={{array,setArray}}>
        {children}
    </StateContext.Provider>
    </>
  )
}


export default Context
