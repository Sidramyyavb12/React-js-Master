import React, { useState } from 'react'

function Input() {
    const [data,setdata]=useState("");
    const [show,setshow]=useState(false);

    const handlechnage=(e)=>{
        let val=e.target.value;
        setdata(val);
    }
  return (
    <div className='container'>
        <label htmlFor="name">Enter your name
      <input type="text" onChange={handlechnage} value={data} name='name' placeholder='Enter the name'/>
      </label>
        <button onClick={()=>setshow(true)}>show name</button>
      {show&&<h4>{data}</h4>}
    </div>
  )
}

export default Input