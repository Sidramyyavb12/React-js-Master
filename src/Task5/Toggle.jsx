import React, { useState } from 'react'

function Toggle() {
    const [show,seshow]=useState(false);
  return (
    <div>
      <button onClick={()=>seshow(!show)}>show</button>
      {show && <h5>siddu</h5>}
    </div>
  )
}

export default Toggle
