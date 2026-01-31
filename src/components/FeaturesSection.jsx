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
      <section className='flex space-y-8 flex-col p-3 md: justify-center items-center '>
         <div className=''>
            <h1 className='text-[48px]'>Features</h1>
         </div>

         <div className='mb-6 text-center text-[#374754] text-xl'>
            <p>Most calendars are designed for teams.</p>
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

         <div className='block lg:flex gap-4 m-13'>
            {features.map((feat) =>(
               
               <div key={feat.id} className='flex-1 aspect-square mt-8 p-4 border flex flex-col justify-center text-center items-center'>
                  <feat.icon size={50} className="mx-auto mb-4 text-[#2091F9]"/>
                  <h2 className='text-2xl font-bold text-center mb-2'>{feat.title}</h2>
                  <p className='text-[#374754] text-lg'>{feat.description}</p>
               </div>
            ))}
         </div>

          {/* Desktop view image */}

         <div className="relative rounded-lg border shadow-2xl w-[50%] justify-center hidden md:flex mb-10">
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