"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import { login } from './action';

const LoginForm = () => {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const handleLogin = async() => {
    let formData = {
      username : username,
      password : password
    };
    
  
    if(username == 'admin' && password == 'wikatjjadmin') await login(formData); 
    else alert("Mohon maaf akun anda tidak terdaftar") 
  }

  return (
    <div className='flex justify-items-center flex-col pt-10 w-full max-w-md'>
      <div className='w-full flex justify-end mb-20'>
        <div className='bg-[#154D71] p-4 rounded-l-full flex gap-4'>
          <Image src="/logo-bumn.png" width={70} height={30} alt="logo"/>
          <Image src="/safety.png" width={60} height={60} alt="logo"/>
        </div>
      </div>
      <div className='w-full flex justify-center mb-10'>
        <Image src="/wikatjj.gif" width={200} height={70} alt="logo"/>
      </div>
      <div className="px-10 max-w-2xl flex justify-start">
        <h2 className="text-xl font-semibold tracking-tight text-balance text-gray-900 sm:text-lg">Login disini.</h2>
      </div>
      <div className='w-full px-10'>
        <form action="#" className="mx-auto mt-6 max-w-xl sm:mt-20 w-full">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
            <div>
              <label htmlFor="username" className="block text-sm/6 font-semibold text-gray-900">Username</label>
              <div className="mt-2.5">
                <input onChange={(e)=>setUsername(e.target.value)} id="username" type="text" name="first-name"  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#154D71]" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm/6 font-semibold text-gray-900">Password</label>
              <div className="mt-2.5">
                <input onChange={(e)=>setPassword(e.target.value)} id="password" type="password" name="first-name"  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#154D71]" />
              </div>
            </div>
          </div>
        </form>
        <div className="mt-5 flex justify-end">
          <button type="button" className="bg-transparent px-1 text-center text-sm text-[#1C6EA4] focus-visible:outline-2 focus-visible:outline-offset-2">Lupa Password ?</button>
        </div>
        <div className="mt-5 ">
          <button type="button" className="block w-full rounded-md bg-[#154D71] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={()=>handleLogin()}>Login</button>
        </div>
        <div className="mt-5 flex justify-center">
          <p className='text-sm'>Belum memiliki akun ? </p><button type="button" className="bg-transparent px-1 text-center text-sm text-[#1C6EA4] focus-visible:outline-2 focus-visible:outline-offset-2">Register</button>
        </div>
      </div>
      
      
    </div>
  )
}

export default LoginForm