import React, { useState } from 'react'

function Ternary() {

    const [data,setData] = useState('');
    const [isError,setIsError] = useState(false);

  return (
    <div>
      <h1>{data || 'Hello'}</h1>
      {isError?<h1>Error</h1>:<h1>NoError</h1>}
      <button onClick={()=>{setIsError(!isError)}}>Toggle</button>
    </div>
  )
}

export default Ternary
