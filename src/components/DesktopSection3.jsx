import React from 'react'
import sec3Img  from "..//assets/sec3Img.png";

const DesktopSection3 = () => {
  return (
      <section className='flex mb-10 mt-7 justify-center items-center m-auto p-5 '>
         <div className='flex flex-col lg:flex-row max-w-4xl gap-15'>
             {/* letf side */}
            <div className="flex-1 max-w-xl text-center md:text-left">
               <h2 className="text-[35px] md:text-[52px] leading-13.75 tracking-[0.2px] text-[#252B42] mb-6">
                  Fastest way to organize
               </h2>
               <div className="text-[20px] text-[#374754] mb-10 leading-10 tracking-[0.2px]">
                  <p className='text-md'>Most calendars are <br className='md:hidden '/> designed for teams.</p>
                  <p className='hidden md:block'>Slate is designed for freelancers</p>
               </div>
               <button className="bg-[#2196f3] hover:bg-blue-500 font-bold text-white text-xl leading-7 tracking-[0.1px] py-3 px-12 rounded-[35px] transition-all">
                  Try For Free
               </button>
            </div>

            {/* right img */}
            <div className="flex-1 w-[80%] max-h-80 justify-center items-center border-[#9FA2A5] rounded-xl m-auto relative">
               <img 
                  src={sec3Img} 
                  alt="Desktop Mockup"
                  className="w-full max-h-70 border-gray-600 rounded-xl object-contain"
               />
               {/* <div className="absolute border-2 border-gray-600 -bottom-4 left-1/2 transform -translate-x-1/2 w-1/2 h-4 bg-gray-300 rounded-full shadow-inner"></div> */}
            </div>

         </div>
        
      </section>
  )
}

export default DesktopSection3