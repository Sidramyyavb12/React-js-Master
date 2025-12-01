import React from 'react'

function Parents() {
    const getdata=(msg)=>{
        alert("child send"+msg)
    }
  return (
    <div>
      <Child sendmsg={getdata}/>
    </div>
  )
}
function Child({sendmsg}){
    return(
        <button onClick={()=>sendmsg("hi i am siddu")}>send message</button>
    )
}

export default Parents
