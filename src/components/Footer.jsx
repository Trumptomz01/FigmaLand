import {FaMapMarkerAlt,  FaMobileAlt , FaTwitter, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

      const footerLinks = [ 
      {
         title: "Pages",
         links: ["Home", "Product", "Pricing", "About", "Contact"],
      },
      {
         title: "Tomothy",
         links: ["Eleanor Edwards", "Ted Robertson", "Annette Russell", "Jennie Mckinney", "Gloria Richards"],
      },
      {
         title: "Jane Black",
         links: ["Philip Jones", "Product", "Colleen Russell", "Marvin Hawkins", "Bruce Simmmons"],
      },
   ];
   
   return (
      <footer className="bg-[#252B42] text-white py-16 px-8" >
         <div className="max-w-6xl mx-auto text-center grid grid-cols-1 md:grid-cols-4 gap-8">
         
            {footerLinks.map((footer, index) => (
               <div className="mb-5" key={index}>
                  <h3 className="font-bold text-xl leading-7 tracking-[0.1px] mb-6">{footer.title}</h3>
                  <ul className="space-y-4">
                  {footer.links.map((link, linkIndex) => (
                     <li key={linkIndex}>
                        <Link to="/" className="text-white hover:text-gray-200 font-normal text-[15px] leading-7 tracking-[0.2px] transition-colors">
                        {link}
                        </Link>
                     </li>
                  ))}
                  </ul>
               </div>
            ))}

            <div className="space-y-6">
               <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="w-6 h-6 mt-1 shrink-0" />
                  <p className="text-sm leading-relaxed">
                  7480 Mockingbird Hill undefined
                  </p>
               </div>
               
               <div className="flex items-center gap-3">
                  <FaMobileAlt className="w-6 h-6 shrink-0" />
                  <p className="text-sm">(239) 555-0108</p>
               </div>

               <div className="flex gap-6 pt-4">
                  <Link to="/">
                     <FaTwitter className="w-6 h-6 fill-current" />
                  </Link>
                  <Link to="/">
                   <FaFacebookSquare className="w-6 h-6 fill-current" />
                  </Link>
                  <Link to="/">
                     <FaLinkedin className="w-6 h-6 fill-current" />
                  </Link>
               </div>
            </div>

         </div>
      </footer>
   )
}

export default Footer