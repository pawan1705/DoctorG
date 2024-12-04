import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-xol sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            {/* left section */}
            <div>
                <img className='mb-5 w-40' src={assets.logo}/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>DoctorG Hospitals, Indore a 200-bedded hospital is the first corporate Hospital in Madhya Pradesh. Being a multi-speciality hospital, we provide services in over 30 medical specialities: Cardiology, Cardiac Surgery, Urology, Neurology, Gastroenterology, Oncology, Laparoscopic and General Surgery, Obstetrics and Gynaecology, Transplants to name a few.</p>
            </div>
            {/* center section */}
            <div >
                <p className='text-xl font-medium mb-5 '>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* right section */}
            <div>
                <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91 9424575042</li>
                <li>pawansangare17@gmail.com</li>

                </ul>
            </div>
        </div>
        {/* copyright text */}
        <div>
            <hr/>
            <p className='py-5 text-sm text-center '>Copyright 2025@ DoctorG Hospitals. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer