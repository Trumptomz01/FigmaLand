import { LuShapes, LuPenTool, LuPaintbrush, } from "react-icons/lu";
import { FaPause, FaPlay } from "react-icons/fa";
import DesktopImg from "../assets/DesktopImg.jpg";
import MobileImg from '../assets/MobileImg.jpg';

const FeaturesSection = () => {

   const features = [
      {
         id: 1,
         icon: LuShapes, // OpenType/Variable fonts icon
         title: "OpenType features Variable fonts",
         description: <> Slate helps you see how <br />many more days you need <br /> to work to reach your <br />financial goal.</>
      },
      {
         id: 2,
         icon: LuPenTool, // Design with real data icon
         title: "Design with real data",
         description: <> Slate helps you see how <br />many more days you need <br /> to work to reach your <br />financial goal.</>
      },
      {
         id: 3,
         icon: LuPaintbrush, // Fastest way to take action icon
         title: "Fastest way to take action",
         description: <> Slate helps you see how <br />many more days you need <br /> to work to reach your <br />financial goal.</>
      }
   ];

  return (
      <section className='flex space-y-8 flex-col p-3 max-w-325 m-auto md: justify-center items-center '>
         <div className=''>
            <h1 className='text-[48px] tracking-[0.2px] leading-13.75'>Features</h1>
         </div>

         <div className='mb-6 tracking-[0.2px] leading-10 text-center text-[#374754] text-[28px]'>
            <p className="">Most calendars are designed for teams.</p>
            <p className='hidden md:block'>Slate is designed for freelancers</p>
         </div>

         {/* mobile view image */}
         <div className="relative shadow-2xl w-full md:hidden mb-10">
            <img className="object-cover rounded-lg w-full h-full" 
               src={MobileImg} 
               alt="mobile-img" 
            />
            <div className="absolute inset-0 flex justify-center items-center">
               <div className="w-15 h-15 bg-[#2091F9] rounded-full flex items-center justify-center">
                  <FaPlay  size={18} className="text-white text-2xl" />
               </div>
            </div>
         </div>

         <div className='block lg:flex gap-13 m-13'>
            {features.map((feat) =>(
               
               <div key={feat.id} className='flex-1 aspect-square gap-2.5 p-4  flex flex-col justify-center text-center items-center'>
                  <feat.icon size={50} className="mx-auto mb-4 text-[#2091F9]"/>
                  <h2 className='text-xl leading-7 font-bold tracking-[0.2px] text-center mb-2'>{feat.title}</h2>
                  <p className='text-[#374754]  leading-6.25 tracking-[0.2px] text-lg'>{feat.description}</p>
               </div>
            ))}
         </div>

          {/* Desktop view image */}

         <div className="relative rounded-lg shadow-2xl w-[50%] justify-center hidden md:flex mb-10">
            <img className="object-cover rounded-lg w-full h-full" 
               src={DesktopImg} 
               alt="desktop-img" 
            />
            <div className="absolute inset-0 flex justify-center items-center">
               <div className="w-23 h-23 bg-[#2091F9] rounded-full flex items-center justify-center">
                  <FaPlay  size={24} className="text-white text-2xl" />
               </div>
            </div>
         </div>
      </section>
  )
}

export default FeaturesSection