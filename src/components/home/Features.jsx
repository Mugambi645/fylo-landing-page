import React from 'react'
import Access from '../../assets/icon-access-anywhere.svg'
import Any from '../../assets/icon-any-file.svg'
import Collaboration from '../../assets/icon-collaboration.svg'
import Security from '../../assets/icon-security.svg'

const Features = () => {
  return (
    <div name='features' className='pt-8 h-full bg-[#1c2431] md:w-full text-white flex items-center justify-center px-8 lg:pt-32'>
        {/* container */}
        <div className='grid sm:grid-cols-2 gap-20 my-8'>

            {/* item  */}
            <div className='w-30 flex flex-col items-center'>
                <div className='h-20'>
                    <img src={Access} alt="gadgets icons" />
                </div>
                <div className='text-center w-full'>
                    <h2 className='text-xl font-bold py-2'>Access your files, anywhere</h2>
                    <p className='max-w-[400px]'>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
                </div>
            </div>

            <div className='w-30 flex flex-col items-center'>
                <div className='h-20'>
                    <img src={Security} alt="gadgets icons" />
                </div>
                <div className='text-center w-full'>
                    <h2 className='text-xl font-bold py-2'>Security you can trust</h2>
                    <p className='max-w-[400px]'>2-factor authentification and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
                </div>                
            </div>

            <div className='w-30 flex flex-col items-center'>
                <div className='h-20'>
                    <img src={Collaboration} alt="gadgets icons" />
                </div>
                <div className='text-center w-full'>
                    <h2 className='text-xl font-bold py-2'>Real-time collaboration</h2>
                    <p className='max-w-[400px]'>Securely share fils and folders with friends, family and colleagues for live collaboration.No email attachments required.</p>
                </div>
            </div>

            <div className='w-30 flex flex-col items-center'>
                <div className='h-20'>
                    <img src={Any} alt="gadgets icons" />
                </div>
                <div className='text-center w-full'>
                    <h2 className='text-xl font-bold py-2'>Store any type of file</h2>
                    <p className='max-w-[400px]'>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
                </div>                
            </div>
        </div>

    </div>
  )
}

export default Features;