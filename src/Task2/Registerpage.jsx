import React, { useState } from 'react'

function Registerpage() {
    const [data,setdata]=useState({
        username:'',
        email:'',
        phone:'',
        password:''
    });
    const [show,setshow]=useState(false)
    const handlechange=(e)=>{
        let {name,value}=e.target;
        console.log(value,name)

        setdata((prev)=>({
            ...prev,
            [name]:value,
        })
    )   
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(data)
        setshow(true);
        
    }
  return (
    <div>
     {!show ? <form onSubmit={handlesubmit}>
        <label htmlFor="username">Enter the username
        <input type="text" onChange={handlechange} name='username' value={data.username}  placeholder='Enter the username'/>
        </label><br />
        <label htmlFor="email">Enter the email
        <input type="text" onChange={handlechange} name='email' value={data.email} placeholder='Enter the email' />
        </label><br />
        <label htmlFor="phone">Enter the phonenumber
        <input type="text" onChange={handlechange} name='phone' value={data.phone} placeholder='Enter the phonenumber'/>
        </label><br />
        <label htmlFor="password">Enter the password
        <input type="text" onChange={handlechange} name='password' value={data.password} placeholder='Enter the password' />
        </label><br />
        <button>Submit</button>
        </form>:

      <div> <h3>{data.username}</h3>
       <h3>{data.email}</h3>
       <h3>{data.phone}</h3>
       <h3>{data.password}</h3></div>
  }
    </div>
  )
}

export default Registerpage
