import React, { useState } from 'react'


function App() {
  const [state, setState] = useState(0)



  return (
    <div className='flex justify-center mt-64 gap-12'>
      <div className={`${ state>= 1 ? "bg-yellow-500" : "bg-gray-300"} h-12 w-12 border `} onClick={()=>setState(1)}></div>
      <div className={`${ state>= 2 ? "bg-yellow-500" : "bg-gray-300"}  h-12 w-12 border`} onClick={()=>setState(2)}></div>
      <div className={`${ state>= 3 ? "bg-yellow-500" : "bg-gray-300"}  h-12 w-12 border`} onClick={()=>setState(3)}></div>
      <div className={`${ state>= 4 ? "bg-yellow-500" : "bg-gray-300"}  h-12 w-12 border`}onClick={()=>setState(4)}></div>
      <div className={`${ state>= 5 ? "bg-yellow-500" : "bg-gray-300"}  h-12 w-12 border`}onClick={()=>setState(5)}></div>
    </div>
  )
}

export default App
