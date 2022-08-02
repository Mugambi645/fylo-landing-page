import React from 'react'
import Stay from '../../assets/illustration-stay-productive.png'
import {BsFillArrowRightCircle, BsFillArrowRightCircleFill} from 'react-icons/bs'

const Productive = () => {

  return (
    <div className='w-full h-full bg-[#1c2431] lg:h-screen py-[100px]'>
        {/* container */}
        
        <div className='grid md:grid-cols-2 px-8 h-full'>
            <div className='flex flex-col justify-center'>
                <img className='w-[580px] mx-auto' src={Stay} alt="colleagues icon" />
            </div>
            <div className='flex flex-col text-white justify-center'>
                <h2 className='text-4xl font-bold py-2 max-w-[350px]'>Stay productive, wherever you are.</h2>
                <p className='font-bold py-2 max-w-[530px]'>Never let location be an issue when accessing your files. Fylo has you covered for all your file storage needs.</p>
                <p className='font-bold py-2 max-w-[530px]'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <a href="#" className='text-[#65e2d9] flex items-center hover:decoration-4'><span>See how Fylo works</span> <BsFillArrowRightCircleFill className='ml-2'/></a>
            </div>
        </div>

    </div>
  )
}

export default Productive;