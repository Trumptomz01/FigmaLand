import Ibm from '../assets/IBM.png'
import Avatar from '../assets/avatar.png'


const TestimonialsSection = () => {
   return (
      <section className='p-5 flex max-w-325  flex-col space-y-4  justify-center text-center items-center m-auto mb-10'>
         <h1 className='text-center  text-[48px] text-[#252B42] leading-13.75 tracking-[0.2px] '>Testimonials</h1>
         <div className=''>
            <div className='max-w-[35%] m-auto mt-4 p-4'>
               <img src={Ibm} className='w-full' alt="ibm" />
            </div>
            
            <div>
               <p className='font-semibold text-[28px] leading-10 md:font-normal mt-4 text-[#374754]'>Most calendars are designed for teams. Slate is designed for freelancers <br className='hidden md:block'/>
                  who want a simple way to plan their schedule.
               </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-8 p-6 bg-white">
               <div className="flex items-center gap-3">
                  <img
                     src={Avatar} // Replace with your actual image path
                     alt="User avatar"
                     className="w-12.5 h-12.5 rounded-full object-cover"
                  />
               
                  <div className="flex items-start flex-col">
                     <span className="text-[#374754] font-medium text-[16px]  leading-5.75 tracking-[0.px] ">
                        Organize across
                     </span>
                     <span className="text-[#374754] text-[15px] leading-7 tracking-[0.2px] ">
                        Ui designer
                     </span>
                  </div>
               </div>
            </div>
            
            <div>
               <button className='bg-[#2091F9] px-7 transition-all cursor-pointer py-2 font-bold text-[20px] tracking-[0.1px] leading-7 text-white rounded-full'>
                  More Testimonials
               </button>
            </div>
         </div>
      </section>
   )
};

export default TestimonialsSection