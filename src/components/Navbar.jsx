import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaFacebookSquare,} from "react-icons/fa";
import logoLight from '../assets/logo-light.png';


const Navbar = () => {

   const navLinks = [
      { id:1, name: "Home", to: "/" },
      { id:2, name: "Product", to: "/product" },
      { id:3, name: "Pricing", to: "/pricing" },
      { id:4,  name: "About", to: "/about" },
      { id:5, name: "Contact", to: "/contact" },
   ];

   return (
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
   )
}

export default Navbar