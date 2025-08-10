import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {

  const[email,setEmail]=useState("Your email")
   const[password,setPassword]=useState("")

   function login(){
    axios.post("http://localhost:5000/api/users/login",{
      email : email,
      password : password
    }).then((res)=>{

      if(res.data.user == null){
        return
      }
      localStorage.setItem("token",res.data.token)

      if(res.data.user.type == "admin"){
        window.location.href ="/admin"
      }else{
        window.location.href ="/"
      }

    })
   }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-br from-purple-700 to-blue-600">
    <div className='w-[450px] h-[450px] bg-white flex flex-col items-center' >
      <img src='/logo.jpg' className='rounded-full w-[150px]'/>
      <span>Email</span>

      <input placeholder='Your email' className="w-72 p-2 border border-gray-400 rounded mb-4" 
      value={email} onChange={(e)=>{
        setEmail(e.target.value)
      }} />

      <span>Password</span>
      <input type="password" placeholder='Your password' className="w-72 p-2 border border-gray-400 rounded mb-4" 
      value={password} onChange={(e)=>{
        setPassword(e.target.value)
      }}/>

      <button onClick={login} className=' bg-purple-700 w-72 p-2 border border-gray-400 rounded-2xl'>Login</button>
    </div>
    </div>
  );
}

