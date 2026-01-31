import { useState } from 'react';
import image from '../assets/sec4-image.png'

const DesktopSection4 = () => {
   const [emailInput, setEmailInput] = useState('');

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
   <div className="flex flex-col md:flex-row items-center text-center md:items-start gap-12">

      <div className='block md:hidden'>
         <span className="text-sm font-bold text-[#252B42]">
               At your fingertips
         </span>
         <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
            Newsletter
         </h1>
         <p>Most calendars are designed for teams. <br /> Slate is designed for freelancers</p>
      </div>
      
      {/* LEFT: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
         <img
         src={image}
         alt="Newsletter illustration"
         className="w-full max-w-md"
         />
      </div>

      {/* RIGHT: Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
         <div className='hidden md:block'>
            <span className="text-sm font-bold text-[#252B42]">
               At your fingertips
            </span>

            <div>
               <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-[#252B42] leading-tight">
                  Lightning fast <br className="hidden md:block" /> prototyping
               </h1>
            </div>

         </div>
        

         <div className="mt-4">
            <p className="font-bold text-slate-900">
               Subscribe to our Newsletter
            </p>
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
               className="flex-1 rounded-full px-5 py-3 text-sm bg-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
               type="submit"
               className="rounded-full px-6 py-3 text-sm font-semibold bg-blue-500 text-white hover:bg-blue-600 transition"
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