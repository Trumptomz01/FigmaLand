import landingImg from '../assets/landingImg.jpg';
import logoLight from '../assets/logo-light.png';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaFacebookSquare,} from "react-icons/fa";


const HeroSection = () => {

   const navLinks = [
      { id:1, name: "Home", to: "/" },
      { id:2, name: "Product", to: "/product" },
      { id:3, name: "Pricing", to: "/pricing" },
      { id:4,  name: "About", to: "/about" },
      { id:5, name: "Contact", to: "/contact" },
   ];


   return (
      <section 
         className='relative  h-232.5 w-full mb-10  bg-slate-900 text-white overflow-hidden pb-32'
         style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)'

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
         <nav className="flex items-center m-auto max-w-4xl 2xl:w-[50%] justify-center gap-15 py-14 px-6 ">
            <div className="hidden lg:flex space-x-6 ">
               {navLinks.map((link) => (
                  <Link
                     key={link.id}
                     to={link.to}
                     className="hover:text-gray-400 text-[15px] transition"
                  >
                     {link.name}
                  </Link>
               ))}
            </div>
            
            <div className="text-md font-bold tracking-widest"><img className='w-37 h-7' src={logoLight} alt="logo" /></div>

            <div className="hidden lg:flex ml-auto gap-11">
               {/* Social icons placeholder */}
               <div><Link  to="/"> <FaTwitter className="w-[33.31px] h-[27.06px]"/></Link></div>
               <div><Link  to="/"> <FaLinkedin className="w-[32.02px] h-[32.02px]"/></Link></div>
               <div><Link  to="/"> <FaFacebookSquare className="w-[32.02px] h-[32.02px]"/></Link></div>
            </div>

            <div className="block ml-auto lg:hidden active:scale-90 text-end hover:scale-105 transition-all cursor-pointer space-y-2">
               <div className="border w-8.5 ml-auto border-neutral-700 dark:border-neutral-300 "></div>
               <div className="border w-7 ml-auto border-neutral-700 dark:border-neutral-300 "></div>
               <div className="border w-5 ml-auto border-neutral-700 dark:border-neutral-300 "></div>
            </div>
         </nav>

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