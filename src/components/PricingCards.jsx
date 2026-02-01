import React from 'react'

const PricingCards = ({ title, description, price, isPrimary, features }) => {
   return (
  
      <div
         className={`
         w-full max-w rounded-[10px] py-8 px-8 flex flex-col items-center transition-all duration-300
         ${isPrimary ? "bg-[#2091F9] text-white shadow-2xl md:scale-107 z-10 ring-1 ring-blue-400" : "bg-white text-[#252b42]"}`}>

         <h3 className="font-bold text-xl tracking-widest mb-2">
            {title}
         </h3>

         <p className={`text-center text-sm mb-8 px-4 leading-relaxed ${isPrimary ? "text-white" : "text-gray-500"}`}>
            {description}
         </p>

         <div className="flex items-center gap-2 mb-8">
            <span className="text-7xl font-bold tracking-tighter">
               {price}
            </span>
            <div className="flex flex-col items-start">
               <span className="text-3xl font-bold leading-none">$</span>
               <span className={`text-xs font-bold uppercase ${isPrimary ? "text-white" : "text-gray-400"}`}>
                  Per Month
               </span>
            </div>
         </div>

         <div className="flex flex-col gap-5 mb-10 w-full text-center">
            {features.map((feature, i) => (
               <span key={i} className="text-sm font-medium">
                  {feature}
               </span>
            ))}
         </div>

         <button
            className={`
               w-full py-3 rounded-full font-semibold text-sm transition-colors
               ${isPrimary ? "bg-white text-[#2196F3] hover:bg-gray-100" : "bg-[#2196F3] text-white hover:bg-blue-600"}`}
            >
            Order Now
         </button>
      </div>
  )
}

export default PricingCards