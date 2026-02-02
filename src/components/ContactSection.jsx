import ContactForm from './ContactForm.jsx';
// import { LuMapPin, LuPhone, LuMail, } from 'react-icons/lu';
import {  FaMapMarkerAlt, FaEnvelope, FaTwitter, FaFacebookSquare, FaLinkedin, FaMobileAlt } from "react-icons/fa";
import map from '../assets/mapImg.png';


const ContactSection = () => {
   return (
     <section className="flex flex-col justify-center mt-8 items-center m-auto p-8">
       <div className="flex text-[#374754] flex-col justify-center items-center m-3">
         <h2 className="text-[48px] leading-13.75 tracking-[0.2px] mb-4">Contact Us</h2>
          <p className="leading-10 text-[28px] tracking-[0.2px] text-center">
            Most calendars are designed for teams. <br />
            <span className="hidden md:block">Slate is designed for freelancers</span>
          </p>
       </div>

       <div className="flex flex-col max-w-7xl p-5 md:flex-row justify-center items-center gap-10 md:gap-20 mt-6">
         <ContactForm />

         <div className="flex   flex-col justify-center item-center  gap-6">
            <div className='flex-col md:flex-row flex gap-6 items-start md:items-center text-center'>
               <div className="flex flex-row md:flex-col  justify-center text-start md:text-center items-center gap-3">
                  <FaMapMarkerAlt className="text-[#2091F9] text-xl mt-1" />
                  <p className="text-[16px] leading-5.75 text[#374754]">
                  6386 Spring St undefined Anchorage, <br />
                  Georgia 12473 United States
                  </p>
               </div>

               <div className="flex flex-row md:flex-col text-start md:text-center justify-center items-center gap-3">
                  <FaMobileAlt className="text-[#2091F9] text-xl" />
                  <p className="text-[16px] leading-5.75 text[#374754]">(843) 555-0130</p>
               </div>

               <div className="flex flex-row md:flex-col text-start md:text-center justify-center items-center gap-3">
                  <FaEnvelope className="text-[#2091F9] text-xl" />
                  <p className="text-[16px] leading-5.75 text[#374754]">
                  willie.jennings@example.com
                  </p>
               </div>
           </div>

           <div className=' md:w-[50%] m-auto h-64 bg-gray-200 rounded border border-gray-200 overflow-hidden relative'>
             <img className='w-full h-full object-cover opacity-80"' src={map} alt="" />
           </div>
           {/* icons */}
           <div className="flex gap-6 justify-start">
               <FaTwitter className="text-[#2091F9] w-7 h-7 cursor-pointer  transition-colors" />
               <FaFacebookSquare className="text-[#2091F9] w-7 h-7 cursor-pointer transition-colors" />
               <FaLinkedin className="text-[#2091F9] w-7 h-7 cursor-pointer transition-colors" />
            </div>
         </div>
       </div>
     </section>
   );
}

export default ContactSection