import React, { useState } from 'react'

function Search() {
    const items=['siddu','ajay','abhay','anjali','priya','neelu']
    const [query,setquery]=useState(" ");
    
    const filtered=items.filter((item)=>{
       return item.toLowerCase().includes(query.toLowerCase())
    })
  return (
    <div>
      <input type="search" onChange={(e)=>setquery(e.target.value)} placeholder='Enter the text' />
      <ul>
      {filtered.map((item)=>(
        <li key={item}>{item}</li>
      ))}
      </ul>
    </div>
  )
}
export default Search