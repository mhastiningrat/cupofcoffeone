"use client";
import React from 'react'
import Tabs from './tabs'

const LiftingForm = () => {
  return (
    <div className='flex flex-col w-full max-w-md'>
          
          <div className='w-full'>
            <form action="#" className="mx-auto max-w-xl sm:mt-20 w-full">
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-1">
                <div>
                  <label htmlFor="username" className=" text-xs font-semibold text-gray-900">Lokasi</label>
                  <div className="mt-1">
                    <input  id="username" type="text" name="first-name" placeholder='' className="block w-full rounded-md bg-white px-3.5 py-2 text-xs text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#154D71]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-xs font-semibold text-gray-900">Date</label>
                  <div className="mt-1">
                    <input  id="password" type="text" name="first-name"  className="block w-full rounded-md bg-white px-3.5 py-2 text-xs text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#154D71]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-xs font-semibold text-gray-900">Perusahaan</label>
                  <div className="mt-1">
                    <input  id="password" type="password" name="first-name"  className="block w-full rounded-md bg-white px-3.5 py-2 text-xs text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#154D71]" />
                  </div>
                </div>
              </div>
              <div className='w-full border-1 border-slate-300 my-2'></div>
              {/* <TableAPAR/> */}
              <Tabs/>
            </form>
            
            <div className="mt-5 ">
              <button type="button" className="block w-full rounded-md bg-[#154D71] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Submit</button>
            </div>
            
          </div>
          <div className='h-[900px]'></div>
          
        </div>
  )
}

export default LiftingForm