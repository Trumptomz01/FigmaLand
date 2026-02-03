import landingImg from '../assets/landingImg.jpg';
import Navbar from './Navbar'


const HeroSection = () => {

   return (
      <section 
         className='relative  h-232.5 w-full mb-10  bg-slate-900 text-white overflow-hidden pb-32'
         style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100.005%, 0% 80%)'

         }}
      >
         {/* Background Image & Overlay */}
         <div className="absolute inset-0 -z-10 ">
            <img 
               src={landingImg}
               alt="Office background" 
               className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-linear-to-b from-slate-900/40 to-slate-900/80" />
         </div>

         {/* Navbar Area */}
         <Navbar/>

         {/* Main Content */}
         <div className="flex flex-col items-center justify-center pt-24 pb-20 text-center px-4">
            <h1 className="max-w-4xl leading-21 text-5xl text-[74px] font-extrabold tracking-[0.2px]">
               The best products start with Figma
            </h1>
            <p className="mt-6 leading-10 tracking-[0.2px] max-w-xl text-[28px] text-gray-300">
               Most calendars are designed for teams. Slate is designed for freelancers.
            </p>
            <button className="mt-10 rounded-full bg-[#2091F9] px-10 py-4 text-xl leading-5 tracking-[0.2px] text-white font-bold hover:brightness-110 transition shadow-xl">
               Try For Free
            </button>
         </div>
      </section>
   )
}

export default HeroSection