import Ibm from '../assets/IBM.png'
import Avatar from '../assets/avatar.png'


const TestimonialsSection = () => {
   return (
      <section className='p-5 flex flex-col space-y-4  justify-center text-center items-center m-auto mb-10'>
         <h1 className='text-center  text-3xl text-[#252B42] '>Testimonials</h1>
         <div className=''>
            <div className='max-w-[35%] m-auto mt-4 p-4'>
               <img src={Ibm} className='w-full' alt="ibm" />
            </div>
            
            <div>
               <p className='font-semibold md:font-normal mt-4 text-[#374754]'>Most calendars are designed for teams. Slate is designed for freelancers <br className='hidden md:block'/>
                  who want a simple way to plan their schedule.
               </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-8 p-6 bg-white">
               <div className="flex items-center gap-3">
                  <img
                     src={Avatar} // Replace with your actual image path
                     alt="User avatar"
                     className="w-10 h-10 rounded-full object-cover"
                  />
               
                  <div className="flex items-start flex-col">
                     <span className="text-[#374754] font-medium text-sm leading-tight">
                        Organize across
                     </span>
                     <span className="text-[#374754] text-sm">
                        Ui designer
                     </span>
                  </div>
               </div>
            </div>
            
            <div>
               <button className='bg-[#2091F9] px-7 transition-all cursor-pointer py-2 font-semibold text-sm text-white rounded-full'>
                  More Testimonials
               </button>
            </div>
         </div>
      </section>
   )
};

export default TestimonialsSection