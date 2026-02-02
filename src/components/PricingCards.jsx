import React from 'react'

const PricingCards = ({ title, description, price, isPrimary, features }) => {
   return (
  
      <div
         className={`
         w-full max-w rounded-[10px] py-8 px-8 flex flex-col items-center transition-all duration-300
         ${isPrimary ? "bg-[#2091F9] text-white shadow-2xl md:scale-107 z-10 ring-1 ring-blue-400" : "bg-white text-[#252b42]"}`}>

         <h3 className="font-bold text-xl tracking-[0.1px] leading-7 mb-2">
            {title}
         </h3>

         <p className={`text-center text-[16px] tracking-[0.1px] mb-8 px-4 leading-5.75 ${isPrimary ? "text-white" : "text-[#374754]"}`}>
            {description}
         </p>

         <div className="flex items-center gap-2 mb-8">
            <h1 className="text-[74px] leading-21 tracking-[0.2px] font-bold">
               {price}
            </h1>
            <div className="flex flex-col items-start">
               <span className="text-[20px]  font-bold leading-7 tracking-[0.1px]">$</span>
               <span className={`text-[16px] leading-5.75 tracking-[0.1px] ${isPrimary ? "text-white" : "text-[#374754"}`}>
                  Per Month
               </span>
            </div>
         </div>

         <div className="flex flex-col gap-5 mb-10 w-full text-center">
            {features.map((feature, i) => (
               <span key={i} className="text-[15px] leading-7 tracking-[0.2px]">
                  {feature}
               </span>
            ))}
         </div>

         <button
            className={`
               w-full py-3 leading-5  rounded-full font-semibold text-[20px] tracking-[0.2px] transition-colors
               ${isPrimary ? "bg-white text-[#2091F9] hover:bg-gray-100" : "bg-[#2091F9] text-white"}`}
            >
            Order Now
         </button>
      </div>
  )
}

export default PricingCards