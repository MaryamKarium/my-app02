import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex  bg-[#f7f7f7] mb-4 ">
        <div className="w-1/2 flex gap-[16px] py-[14px] pl-[12px]">
        <h1 className="text-[14px]">Phone Number: 956 742 455 678</h1>
        <h2 className="text-[14px]">Email:info@ddsgnr.com</h2>
        </div>
        <div className="w-1/2 ">
        <Image className="absolute top-0 right-0 mt-3 mr-10 " src={"/image/social links.svg"} alt="social links" width={132} height={24}/>
        </div>
      </div>
      <Header/>
    <div className="flex h-[80%]">
      <div className="w-1/2 flex flex-col justify-center item-start m-12 ">
        <h1 className="font-bold text-6xl mb-10">Learn new skills online with ease</h1>
        <p className="text-2xl font-normal mb-20">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        <div className="flex gap-[16px]">
        <button className="bg-black text-white top-[680px] p-[10px] rounded-[6px] w-[200px]">Start Learning Now</button>
        <button className="bg-white text-black top-[680px] p-[10px] rounded-[6px] w-[200px] border-2 border-black">Explore Courses</button>
        </div>
      </div>
      <div className="w-1/2 flex left-3">
       <Image className="ml-20" src={"/image/image-1.svg"} alt="image" width={640} height={900}/>
      </div>
    </div>
    <div className="flex bg-[#f7f7f7]">
      <div className="w-1/3 my-12  text-[24px] font-bold">Trusted by 2000+ companies worldwide.</div>
      <div className="flex gap-[19.12px] ml-24">
        <Image src={"/image/image-3.svg"} alt="logo1" width={123} height={38}/>
        <Image src={"/image/logo.svg"} alt="logo2" width={123} height={38}/>
        <Image src={"/image/logo2.svg"} alt="logo3" width={123} height={38}/>
        <Image src={"/image/logo3.svg"} alt="logo4" width={123} height={38}/>
        <Image src={"/image/logo4.svg"} alt="logo5" width={123} height={38}/>
        <Image src={"/image/logo5.svg"} alt="logo6" width={123} height={38}/>

      </div>
    </div>
    <div className="m-12">
      <h1 className="font-bold text-[48px] justify-center flex">Explore Courses By Category</h1>
      <h2 className="text-[18px] justify-center flex">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</h2>
    </div>
    
    <div className="flex gap-[24px] pb-12">
      <div className="w-1/3 bg-[#f7f7f7] flex">
      <div className=" m-6">
        <Image src={"/image/frame1.svg"} alt="frame" width={100} height={100}/>
      </div>
         <div className="m-12">
          <h1 className="text-[20px] font-bold">Design & Development</h1>
          <h2 className="text[18px] font-normal">50+ Courses Available</h2>
         </div>
        </div>
      <div className="w-1/3 bg-[#f7f7f7] flex">
      
        <div className="m-6">
          <Image src={"/image/frame2.svg"} alt="frame" width={100} height={100}/>
        </div>
        <div className="m-12">
          <h1 className="text-[20px] font-semibold">
          Marketing
          </h1>
          <h2 className="text-[18px]">
          50+ Courses Available
          </h2>
          </div>
      
      </div>
      <div className="w-1/3 bg-[#f7f7f7] flex">
      <div className="m-6">
        <Image src={"/image/frame3.svg"} alt="frame" width={100} height={100}/>
      </div>
      <div className="m-12">
        <h1 className="text-[20px] font-semibold">Development</h1>
        <h2 className="text-[18px] font-normal">50+ Courses Available</h2>
      </div>
      </div>
    </div>
    <div className="flex gap-[24px] pb-12">
      <div className="w-1/3 bg-[#f7f7f7] flex">
      <div className="m-6">
        <Image src={"/image/frame4.svg"} alt="frame" width={100} height={100}/>
      </div>
      <div className="m-12">
        <h1 className="text-[20px] font-semibold">
        Communication
        </h1>
        <h2 className="text-[18px] font-normal">
        50+ Courses Available
        </h2>
      </div>
      </div>
      <div className="w-1/3 bg-[#f7f7f7] flex">
      <div className="m-6">
        <Image src={"/image/frame5.svg"} alt="frame" width={100} height={100}/>
      </div>
      <div className="m-12">
        <h1 className="font-semibold text-[20px]">Digital Marketing</h1>
        <h2 className=" font-normal text-[18px]">50+ Courses Available</h2>
      </div>
      </div>
      <div className="w-1/3 bg-[#f7f7f7] flex">
      <div className="m-6">
        <Image src={"/image/frame6.svg"} alt="frame" width={100} height={100}/>
      </div>
      <div className=" m-12">
          <h1 className="font-semibold text-[20px]">Self Development</h1>
          <h2 className="font-normal text-[18px]">50+ Courses Available</h2>
      </div>
      </div>
    </div>
    <div className="flex gap-[24px] pb-12">
      <div className="w-1/3 bg-[#f7f7f7] flex">
      <div className="m-6">
        <Image src={"/image/frame7.svg"} alt="frame" width={100} height={100}/>
      </div>
      <div className="m-12">
        <h1 className="font-semibold text-[20px]">Business</h1>
        <h2 className="font-normal text-[18px]">50+ Courses Available</h2>
      </div>
      </div>
      <div className="w-1/3 bg-[#f7f7f7] flex">
      <div className="m-6">
        <Image src={"/image/frame8.svg"} alt="frame" width={100} height={100}/>
      </div>
      <div className="m-12">
        <h1 className="font-semibold text-[20px]">Finance</h1>
        <h2 className="font-normal text-[18px]">50+ Courses Available</h2>
      </div>
      </div>
      <div className="w-1/3 bg-[#f7f7f7] flex">
      <div className="m-6">
        <Image src={"/image/frame9.svg"} alt="frame" width={100} height={100}/>
      </div>
      <div className="m-12">
        <h1 className="font-semibold text-[20px]">Consulting</h1>
        <h2 className="font-normal text-[18px]">50+ Courses Available</h2>
      </div>
      </div>
    </div>
    <div className="justify-center flex">
      <button className=" border-2 border-black text-[16px]  p-4">View All Courses</button>
    </div>
    <div className=" justify-center flex">
      <Image src={"/image/240.svg"} alt="Text" width={1280} height={488}/>
    </div>
    <div>
      <h1 className="text-[56px] font-semibold justify-center flex">Courses</h1>
      <h2 className="text-[18px] justify-center flex pt-[12px]"> Your Ultimate Guide to learning</h2>
      <div className="text-[20px] gap-[16px] justify-center flex py-[66px] ">
        <button>Popular</button>
        <button>Recommended</button>
        <button>Best  Price</button>
      </div>
      <div className="flex gap-32">
        <div className="w-1/3 bg-[#f7f7f7]">
        <Image src={"/image/image-4.svg"} alt="image" width={416} height={300}/>
        <Image className="py-[15px] mx-4" src={"/image/ratings1.svg"} alt="text" width={382} height={24}/>
        <h1 className="text-[24px] font-bold mx-4">UX/UI Design 201</h1>
        <h2 className="text-[16px] mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h2>
        <button className="border-2 border-black px-4 py-2 m-4 rounded-[6px]">Enroll Now</button>
        <button className="ml-10">$400</button>
        </div>
        <div className="w-1/3 bg-[#f7f7f7] ">
        <Image src={"/image/image-5.svg"} alt="image" width={416} height={300}/>
        <Image className="py-[15px] mx-4" src={"/image/ratings2.svg"} alt="text" width={382} height={24}/>
        <h1 className="text-[24px] font-bold mx-4">Introduction to Python</h1>
        <h2 className="text-[16px] mx-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h2>
        <button className="border-2 border-black px-4 py-2 m-4 rounded-[6px]">Enroll Now</button>
        <button className="ml-10">$400</button>
        </div>
        <div className="w-1/3 bg-[#f7f7f7]">
        <Image src={"/image/image-6.svg"} alt="image" width={416} height={300}/>
        <Image className="py-[15px] mx-4" src={"/image/ratings3.svg"} alt="text" width={382} height={24}/>
        <h1 className="text-[24px] font-bold mx-4">Data Analysis for Beginners</h1>
        <h2 className="text-[16px] mx-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h2>
        <button className="border-2 border-black px-4 py-2 m-4 rounded-[6px]">Enroll Now</button>
        <button className="ml-10">$400</button>
        </div>
      </div>
      <div className="flex gap-32 mt-20">
        <div className="w-1/3 bg-[#f7f7f7]" >
        <Image src={"/image/image-7.svg"} alt="image" width={416} height={300}/>
        <Image className="py-[15px] mx-4" src={"/image/ratings4.svg"} alt="text" width={382} height={24}/>
        <h1 className="text-[24px] font-bold mx-4">Art Specialization</h1>
        <h2 className="text-[16px] mx-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h2>
        <button className="border-2 border-black px-4 py-2 m-4 rounded-[6px]">Enroll Now</button>
        <button className="ml-10">$400</button>
        </div>
        <div className="w-1/3 bg-[#f7f7f7]">
        <Image src={"/image/image-8.svg"} alt="image" width={416} height={300}/>
        <Image className="py-[15px] mx-4" src={"/image/ratings5.svg"} alt="text" width={382} height={24}/>
        <h1 className="text-[24px] font-bold mx-4">Rule of Law</h1>
        <h2 className="text-[16px] mx-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h2>
        <button className="border-2 border-black px-4 py-2 m-4 rounded-[6px]">Enroll Now</button>
        <button className="ml-10">$400</button>
        </div>
        <div className="w-1/3 bg-[#f7f7f7]">
        <Image src={"/image/image-9.svg"} alt="image" width={416} height={300}/>
        <Image className="py-[15px] mx-4" src={"/image/ratings6.svg"} alt="text" width={382} height={24}/>
        <h1 className="text-[24px] font-bold mx-4">Introduction to webflow</h1>
        <h2 className="text-[16px] mx-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</h2>
        <button className="border-2 border-black px-4 py-2 m-4 rounded-[6px]">Enroll Now</button>
        <button className="ml-10">$400</button>
        </div>
      </div >
      <div className="justify-center flex m-16">
      <button className="text-[16px] rounded-[6px] border-2 border-black px-2 py-2 ">View All Courses</button>
        </div>
        <div className="bg-[#f7f7f7]">
          <h1 className="text-[48px] font-bold flex justify-center pt-16 pb-10">Our team</h1>
          <h2 className="text-[18px] flex justify-center pb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
        <div className="flex ">
          <div className="w-1/3 ">
          <div className="flex justify-center"><Image src={"/image/img1.svg"} alt="image" width={80} height={80}/></div>
            <h1 className="text-[20px] font-semibold justify-center flex pt-[20px]">James Nduku</h1>
          <h2 className="text-[18px] justify-center flex">Marketing Coordinator</h2>
          <div className="flex justify-center py-20"><Image src={"/image/socialicons.svg"} alt="icons" width={100} height={24}/></div>
          </div>
          <div className="w-1/3">
          <div className="flex justify-center"><Image src={"/image/img2.svg"} alt="image" width={80} height={80}/></div>
            <h1 className="text-[20px] font-semibold justify-center flex pt-[20px]">Joseph Munyambu</h1>
          <h2 className="text-[18px] justify-center flex">Nursing Assistant</h2>
          <div className="flex justify-center py-20"><Image src={"/image/socialicons.svg"} alt="icons" width={100} height={24}/></div>
          </div>
          <div className="w-1/3">
          <div className="flex justify-center"><Image src={"/image/img3.svg"} alt="image" width={80} height={80}/></div>
            <h1 className="text-[20px] font-semibold justify-center flex pt-[20px]">Joseph Ngumbau</h1>
          <h2 className="text-[18px] justify-center flex">Medical Assistant</h2>
          <div className="flex justify-center py-20"><Image src={"/image/socialicons.svg"} alt="icons" width={100} height={24}/></div>
         </div>
        </div>
        <div className="flex ">
          <div className="w-1/3">
          <div className="flex justify-center"><Image src={"/image/img4.svg"} alt="image" width={80} height={80}/></div>
            <h1 className="text-[20px] font-semibold justify-center flex pt-[20px]">Erick Kipkemboi</h1>
          <h2 className="text-[18px] justify-center flex">Web Designer</h2>
          <div className="flex justify-center py-20"><Image src={"/image/socialicons.svg"} alt="icons" width={100} height={24}/></div>
          </div>
          <div className="w-1/3">
          <div className="flex justify-center"><Image src={"/image/img5.svg"} alt="image" width={80} height={80}/></div>
            <h1 className="text-[20px] font-semibold justify-center flex pt-[20px]">Stephen Kerubo</h1>
          <h2 className="text-[18px] justify-center flex">President of Sales</h2>
          <div className="flex justify-center py-20"><Image src={"/image/socialicons.svg"} alt="icons" width={100} height={24}/></div>
          </div>
          <div className="w-1/3">
          <div className="flex justify-center"><Image src={"/image/img6.svg"} alt="image" width={80} height={80}/></div>
            <h1 className="text-[20px] font-semibold justify-center flex pt-[20px]">John Leboo</h1>
          <h2 className="text-[18px] justify-center flex">Dog Trainer</h2>
          <div className="flex justify-center py-20"><Image src={"/image/socialicons.svg"} alt="icons" width={100} height={24}/></div>
          </div>
        </div>
        <div>
        <div className="mt-28">
          <h1 className="text-[48px] font-bold pl-20">Customer testimonials</h1>
          <h2 className="text-[18px] pl-20 pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
        <div className="flex gap-8 my-20 mx-14">
         <div className="w-1/3 border-2 border-black">
         <Image className="pt-6 pl-8" src={"/image/stars.svg"} alt="stars" width={116} height={18}/>
         <h1 className="text-[18px] px-8 pt-8">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</h1>
         <Image className="pl-8 pb-8"src={"/image/avatar1.svg"} alt="avatar" width={254} height={56}/>
         </div>
         <div className="w-1/3 border-2 border-black">
         <Image className="pt-6 pl-8" src={"/image/stars.svg"} alt="stars" width={116} height={18}/>
         <h1 className="text-[18px] px-8 pt-8">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</h1>
         <Image className="pl-8 pb-8"src={"/image/avatar2.svg"} alt="avatar" width={254} height={56}/>
         </div>
         <div className="w-1/3 border-2 border-black">
         <Image className="pt-6 pl-8" src={"/image/stars.svg"} alt="stars" width={116} height={18}/>
         <h1 className="text-[18px] px-8 pt-8">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</h1>
         <Image className="pl-8 pb-8"src={"/image/avatar3.svg"} alt="avatar" width={254} height={56}/>
         
         </div>
        </div>
        <div>
        <Image className="ml-14 pb-4" src={"/image/content.svg"} alt="content" width={1380} height={48}/> 
        </div>

        </div>
        </div>
        <Footer/>
       
        </div>
       
       </div>
  );
}
