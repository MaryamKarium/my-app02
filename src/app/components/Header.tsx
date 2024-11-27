import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    
    <div className='flex bg-[#f7f7f7] gap-[32px] '>
      <div className='ml-12 mt-2'>
        <Image src={"/image/image-2.svg"} alt="Logo" width={130} height={40}/>
       
      </div>
    <div className='flex gap-[30px] bg-white ml-60 m-2 pl-[10px] '>
        <button>Home</button>
        <button>Courses</button>
        <button>Services</button>
        <button>Achievement</button>
        <button>About Us</button>
        <button>Testimonial</button>
        <button className='text-black border-2 border-black px-[10px] py-[10px] rounded-[4px]'>Login</button>
        <button className='text-white bg-black px-[10px]  rounded-[4px]'>Sign Up</button>
        
    </div>
    
    
    </div>
    
  )
}

export default Header