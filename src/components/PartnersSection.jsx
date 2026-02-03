import React from 'react'
// import partnersImg from '../assets/partnersImage.png';
// import MobilePartnersImg from '../assets/mobile-partnersImg.png';
import GooglePng from '../assets/google.png';
import AmazonPng from '../assets/amazon.png';
import MicrosoftPng from '../assets/microsoft.png';
import UberPng from '../assets/uber.png';
import DropboxPng from '../assets/dropbox.png';

const PartnersSection = () => {

   const partners = [
      { id: 1, name: 'Google', src: GooglePng },
      { id: 2, name: 'Amazon', src: AmazonPng },
      { id: 3, name: 'Microsoft', src: MicrosoftPng },
      { id: 4, name: 'Uber', src: UberPng },
      { id: 5, name: 'Dropbox', src: DropboxPng },
      { id: 6, name: 'Google', src: GooglePng },
      { id: 7, name: 'Uber', src: UberPng },
      { id: 8, name: 'Amazon', src: AmazonPng },
   ];

   return (
      <section className='flex max-w-325 m-auto flex-col justify-center space-y-6 my-10 items-center'>
         <div className='text-center flex flex-col gap-1.75 p-2'>
            <h2 className='text-[48px] text=[#252B42]  leading-13.75 tracking-[0.2px]'>Partners</h2>
            <p className='text-[28px] md:text-lg tracking-[0.2px] leading-10 text-[#374754]'>Most calendars are designed for teams. <br />Slate is designed for freelancers</p>
         </div>
         {/* <div className='max-w-2xl md:max-w-3xl flex justify-center items-center'>
            mobile partners image
            <div className=' md:hidden'>
               <img src={MobilePartnersImg} alt="partners images" />
            </div>

            desktop  partners image
            <div className='hidden md:block'>
               <img src={partnersImg} alt="partners images" />
            </div>   
         </div> */}

            {/* using grid  */}

         <div className="p-8 bg-white">
            <div className="grid gap-8 md:gap-0  md:grid-cols-4  ">
            
               {partners.map((client, index) => (
                  <div 
                     key={index}
                     className={`
                     flex-col items-center justify-center px-10 md:px-5 py-5 border-r w-full border border-[#D8D8D8] group
                     ${index < 3 ? 'flex' : 'hidden md:flex'}
                     `}
                  >
                     <span className="text-[10px] text-slate-400 mb-4 font-semibold uppercase tracking-widest">
                     {client.name}
                     </span>
                     
                     <div className="w-full h-full flex items-center justify-center">
                     <img 
                        src={client.src} 
                        alt={client.name} 
                        className="max-h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
                     />
                     </div>
                  </div>
               ))}
            
            </div>
         </div>

         <div className='mt-2 flex justify-center items-center'>
            <button className='font-bold text-white cursor-pointer bg-[#2091F9] px-8 py-2 rounded-full '>Try for free </button>
         </div>
         
      </section>
   )
}

export default PartnersSection