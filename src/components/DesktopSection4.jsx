import { useState } from 'react';
import image from '../assets/sec4-image.png'

const DesktopSection4 = () => {
   const [emailInput, setEmailInput] = useState('');

  return (
      <section className="max-w-325  flex justify-center item-center mx-auto px-4 py-28">
         <div className="flex p-10 w-full flex-col lg:flex-row items-center md:justify-center text-center  md:items-start  gap-15">

            <div className='block md:hidden'>
               <span className="text-sm font-bold text-[#252B42]">
                     At your fingertips
               </span>
               <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900 leading-13.75 tracking-[0.2]">
                  Newsletter
               </h1>
               <p className='leading-10 tracking-[0.2]'>Most calendars are designed for teams. <br /> Slate is designed for freelancers</p>
            </div>
            
            {/* LEFT: Image */}
            <div className="w-full justify-center items-center m-auto flex ">
               <img
               src={image}
               alt="Newsletter illustration"
               className=" md:w-160 md:h-110 "
               />
            </div>

            {/* RIGHT: Content */}
            <div className=" m-auto md:mr-auto md:justify-center md:items-start items-center  flex flex-col space-y-4 md:text-start">
               <div className='hidden md:block '>
                  <h3 className="text-sm leading-7 tracking-[0.1px] font-bold text-[#252B42]">
                     At your fingertips
                  </h3>

                  <div>
                     <h1 className="mt-3 text-4xl md:text-5xl tracking-[0.2px] text-[#252B42] leading-13.75">
                        Lightning fast <br className="hidden md:block" /> prototyping
                     </h1>
                  </div>

               </div>
            

               <div className="mt-4">
                  <h3 className="font-bold text-[#252B42]">
                     Subscribe to our Newsletter
                  </h3>
                  <p className="text-sm text-slate-500">
                     Available exclusively on Figmaland
                  </p>
               </div>

               <form className="mt-6 flex flex-col sm:flex-row gap-3">
                  <input
                     type="email"
                     value={emailInput}
                     onChange={(e) => setEmailInput(e.target.value)}
                     placeholder="Your Email"
                     className="flex-1 rounded-full px-9.75 py-3.75 text-sm bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                     type="submit"
                     className="rounded-full px-6 leading-5 py-3 text-sm font-semibold bg-[#2091F9] text-white hover:bg-blue-600 transition"
                  >
                     Subscribe
                  </button>
               </form>
            </div>

         </div>
      </section>

   )
}

export default DesktopSection4