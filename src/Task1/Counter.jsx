import React, { useState } from 'react'

function Counter() {
    const [count,setcount]=useState(0);

    const increasecount=()=>{
        setcount(()=>count+1);
    }
    const decreasecount=()=>{
        setcount(()=>count-1)
    }
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={increasecount}>+1</button>
      <button onClick={decreasecount}>-1</button>
    </div>
  )
}

export default Counter
