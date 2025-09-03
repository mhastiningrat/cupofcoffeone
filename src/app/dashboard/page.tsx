import Image from 'next/image'
import React from 'react'
import { MdArrowBackIos, MdOutlineAccountCircle, MdWest } from 'react-icons/md'

const Dashboard = () => {
  return (
    <div className='flex justify-items-center flex-col pt-5 w-full max-w-md'>
          <div className='w-full flex justify-between mb-7'>
            <button className='text-[#1C6EA4] text-2xl'><Image src="/wong.png" width={50} height={50} alt="logo"/></button>
            <div className='p-4 rounded-l-full flex gap-4'>
              <Image src="/wikatjj.gif" width={100} height={50} alt="logo"/>
              <Image src="/safety.png" width={60} height={60} alt="logo"/>
            </div>
          </div>

          <div className='w-full flex justify-start mb-5'>
            <h2 className='text-slate-700 text-2xl font-bold'>Hi. User</h2>
          </div>
          
          <div className='grid grid-cols-3 gap-6'>
            <button className='drop-shadow-gray-600 shadow-sm shadow-[#1C6EA4] flex flex-col items-center gap-4 rounded-lg  border-[#1C6EA4] border-[0.5px] text-xs text-[#1C6EA4] p-2 hover:bg-[#1C6EA4] hover:text-amber-100'>
                <Image src="/safety-induction.png" width={70} height={30} alt="logo"/> Safety Induction
            </button>
            <button className='drop-shadow-gray-600 shadow-sm shadow-[#1C6EA4] flex flex-col items-center gap-4 rounded-lg  border-[#1C6EA4] border-[0.5px] text-xs text-[#1C6EA4] p-2 hover:bg-[#1C6EA4] hover:text-amber-100'>
                <Image src="/inspect-power.png" width={70} height={30} alt="logo"/> Inspection Power Tool
            </button>
            <button className='drop-shadow-gray-600 shadow-sm shadow-[#1C6EA4] flex flex-col items-center gap-4 rounded-lg  border-[#1C6EA4] border-[0.5px] text-xs text-[#1C6EA4] p-2 hover:bg-[#1C6EA4] hover:text-amber-100'>
                <Image src="/heavy.png" width={70} height={30} alt="logo"/> Inspection Heavy Tool
            </button>
            <button className='drop-shadow-gray-600 shadow-sm shadow-[#1C6EA4] flex flex-col items-center gap-4 rounded-lg  border-[#1C6EA4] border-[0.5px] text-xs text-[#1C6EA4] p-2 hover:bg-[#1C6EA4] hover:text-amber-100'>
                <Image src="/p3k.png" width={70} height={30} alt="logo"/> Inspection Emergency Tool
            </button>
            <button className='drop-shadow-gray-600 shadow-sm shadow-[#1C6EA4] flex flex-col items-center gap-4 rounded-lg  border-[#1C6EA4] border-[0.5px] text-xs text-[#1C6EA4] p-2 hover:bg-[#1C6EA4] hover:text-amber-100'>
                <Image src="/apar.png" width={70} height={30} alt="logo"/> Inspection APAR
            </button>
            <button className='drop-shadow-gray-600 shadow-sm shadow-[#1C6EA4] flex flex-col items-center gap-4 rounded-lg  border-[#1C6EA4] border-[0.5px] text-xs text-[#1C6EA4] p-2 hover:bg-[#1C6EA4] hover:text-amber-100'>
                <Image src="/sehatrepot.png" width={70} height={30} alt="logo"/> Employed Health Report
            </button>
            <button className='drop-shadow-gray-600 shadow-sm shadow-[#1C6EA4] flex flex-col items-center gap-4 rounded-lg  border-[#1C6EA4] border-[0.5px] text-xs text-[#1C6EA4] p-2 hover:bg-[#1C6EA4] hover:text-amber-100'>
                <Image src="/lifting.png" width={70} height={30} alt="logo"/> Inspection Lifting Gear
            </button>
            <button className='drop-shadow-gray-600 shadow-sm shadow-[#1C6EA4] flex flex-col items-center gap-4 rounded-lg  border-[#1C6EA4] border-[0.5px] text-xs text-[#1C6EA4] p-2 hover:bg-[#1C6EA4] hover:text-amber-100'>
                <Image src="/ppe.png" width={70} height={30} alt="logo"/> Inspection PPE
            </button>
            <button className='drop-shadow-gray-600 shadow-sm shadow-[#1C6EA4] flex flex-col items-center gap-4 rounded-lg  border-[#1C6EA4] border-[0.5px] text-xs text-[#1C6EA4] p-2 hover:bg-[#1C6EA4] hover:text-amber-100'>
                <Image src="/wpe.png" width={70} height={30} alt="logo"/> Inspection WPE
            </button>
            <button className='drop-shadow-gray-600 shadow-sm shadow-[#1C6EA4] flex flex-col items-center gap-4 rounded-lg  border-[#1C6EA4] border-[0.5px] text-xs text-[#1C6EA4] p-2 hover:bg-[#1C6EA4] hover:text-amber-100'>
                <Image src="/kejadian.png" width={70} height={30} alt="logo"/> Incident Report
            </button>
            <button className='drop-shadow-gray-600 shadow-sm shadow-[#1C6EA4] flex flex-col items-center gap-4 rounded-lg  border-[#1C6EA4] border-[0.5px] text-xs text-[#1C6EA4] p-2 hover:bg-[#1C6EA4] hover:text-amber-100'>
                <Image src="/analisis.png" width={70} height={30} alt="logo"/> Risk Containment Audit
            </button>
            <button className='drop-shadow-gray-600 shadow-sm shadow-[#1C6EA4] flex flex-col items-center gap-4 rounded-lg  border-[#1C6EA4] border-[0.5px] text-xs text-[#1C6EA4] p-2 hover:bg-[#1C6EA4] hover:text-amber-100'>
                <Image src="/resiko.png" width={70} height={30} alt="logo"/> Work High Risk Report
            </button>
            
          </div>
          
          
        </div>
  )
}

export default Dashboard