import React from 'react'

function Parent() {
  return (
    <div>
      <Child message='Sidramayya vb'/>
    </div>
  )
}
function Child({message}){
    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export default Parent
