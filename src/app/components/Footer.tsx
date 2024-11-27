import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
        <div className='flex mt-40'>
            <div className='w-1/2 pl-44'>
            <h1 className='font-semibold text-[18px]'>Subscribe to our newsletter</h1>
            <h2 className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>
            <div className='w-1/2 pl-40 '>
            <div className='flex gap-2'><div > <h1 className='text-[16px] border-2 border-black p-4 pr-40 rounded-[6px] text-[#b2b2b2]'>Enter your email</h1></div>
            <button className='text-[16px] border-2 border-black rounded-[6px] px-[24px] py-[10px]'>Subscribe</button></div>
            <h2 className='text-[12px] pt-4 pl-1'>By subscribing you agree to with our Privacy Policy</h2>
            </div>
       </div>
       <div className='flex mt-24 pl-44'>
        <div className='w-1/4'> <Image src={"/image/column.svg"} alt="Logo" width={250} height={40}/></div>
        <div className='w-1/4'>
        <p className='text-[16px] font-semibold pb-3'>Courses</p>
        <p className='text-[14px] pb-3'>Business</p>
        <p className='text-[14px] pb-3'>Development</p>
        <p className='text-[14px] pb-3'>Technology</p>
        <p className='text-[14px] pb-3'>Design</p>
        <p className='text-[14px] pb-3'>Programming</p>
        </div>
        <div className='w-1/4'>
        <p className='text-[16px] font-semibold pb-3'>Resources</p>
        <p className='text-[14px] pb-3'>Career</p>
        <p className='text-[14px] pb-3'>Resume</p>
        <p className='text-[14px] pb-3'>Learning</p>
        <p className='text-[14px] pb-3'>Interview Preparation</p>
        <p className='text-[14px] pb-3'>Jobs</p>
        </div>
        <div className='w-1/4'>
        <p className='text-[16px] font-semibold pb-3'>About Us</p>
        <p className='text-[14px] pb-3'>Contact</p>
        <p className='text-[14px] pb-3'>Help/Support</p>
        <p className='text-[14px] pb-3'>FAQ</p>
        <p className='text-[14px] pb-3'>Terms and Conditions</p>
        <p className='text-[14px] pb-3'>Partners</p>
        </div>
       </div>
       <Image className='p-16' src={"/image/divider.svg"} alt='divider' width={2120} height={1}/>
      <div className='flex pb-12' >
        <div className='w-1/2 flex gap-6 ml-20'>
        2023 Ddsgnr. All right reserved.
         <div>Privacy Policy</div>
         <div>Terms of Service</div>
         <div>Cookies Settings</div>
        </div>
        <div className='w-1/2 ' >
        <Image className="absolute right-0 mr-20 " src={'/image/social links.svg'} alt='social links' width={132} height={24}/>
        </div>
      </div>
    </div>
  
  )
}

export default Footer