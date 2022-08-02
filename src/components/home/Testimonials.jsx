import React from 'react'
import Profile1 from '../../assets/profiles/profile-1.jpg'
import Profile2 from '../../assets/profiles/profile-2.jpg'
import Profile3 from '../../assets/profiles/profile-3.jpg'
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  return (
    <div name='testimonials' className='px-4 pt-[50px] md:pt-2 w-full h-full bg-[#1c2431] text-white pb-10 lg:px-14 md:pb-[100px]'>

        {/* container */}
        <div className='pb-[50px] px-2 relative w-full grid md:grid-cols-3 gap-4 md:px-8'>

            <FaQuoteLeft className='z-[1] absolute text-6xl top-[-35px] left-[20px] text-cyan-300'/>

            {/* item */}
            <div className='z-20 max-w-[400px] rounded-md bg-[#202a3c] px-4 py-6 shadow-md cursor-pointer'>
                <div>
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the 
                        switch our team has become a well-oiled collaboration machine.
                    </p>
                    <div className='flex  items-center mt-2'>
                        <div className='w-[4]'>
                            <img className='h-8 rounded-full' src={Profile1} alt="user profile photo" />
                        </div>
                        <div className='ml-2'>
                            <p>Satish Patel</p>
                            <small>Founder & Ceo, Huddle</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-[400px] rounded-md bg-[#202a3c] px-4 py-6 shadow-md cursor-pointer'>
                <div>
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the 
                        switch our team has become a well-oiled collaboration machine.
                    </p>
                    <div className='flex items-center mt-2'>
                        <div className='w-[4]'>
                            <img className='h-8 rounded-full' src={Profile2} alt="user profile photo" />
                        </div>
                        <div className='ml-2'>
                            <p>Satish Patel</p>
                            <small>Founder & Ceo, Huddle</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-[400px] rounded-md bg-[#202a3c] px-4 py-6 shadow-md cursor-pointer'>
                <div>
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the 
                        switch our team has become a well-oiled collaboration machine.
                    </p>
                    <div className='flex  items-center mt-2'>
                        <div className='w-[4]'>
                            <img className='h-8 rounded-full' src={Profile3} alt="user profile photo" />
                        </div>
                        <div className='ml-2'>
                            <p>Satish Patel</p>
                            <small>Founder & Ceo, Huddle</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials;