import React from 'react'
import logo from '../../assets/logo.png'
import { FaShareAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const Baner = () => {
  return (
    <div className='bg-comon'>
        <div className=''>

            <div className='flex justify-between px-32 py-8'>
                <div className='w-3/12 '>
                <img src={logo}/>
                </div>

                <div className='w-9/12 flex justify-end   gap-x-7 '>

                <div className='rounded-full  border-2 w-[40px] h-[40px]  border-white text-white  mt-1'>
                <FaShareAlt className='text-center mx-auto mt-[30%]'/>
                </div>

                <div className='border-white border-2  px-4 py-[17px]  rounded-[124px]'>
                  <p className='font-nates text-xs font-normal text-white'>Download the 2024 Report</p>
                </div>

                <div  className='w-[20px] h-[17px]'>
                <FaBars className='text-white  text-2xl mt-4  ' />
                </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Baner