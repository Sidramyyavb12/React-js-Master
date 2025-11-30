import React, { useEffect, useState } from 'react'

function Api() {
    const [show,showdata]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>showdata(data));
    },[])
  return (
    <div>
      <h1>Fetching api data and show</h1>
     <ul>
         {show.map(u=>(
        <div key={u.id}>
            <li>{u.name}</li>
            <li>{u.username}</li>
            <li>{u.company.name}</li>
        </div>
      ))}
     </ul>
    </div>
  )
}

export default Api
