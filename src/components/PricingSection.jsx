
const PricingSection = () => {

   const plans = [
      {
         title: "FREE",
         description: "Organize across all apps by hand",
         price: "0",
         isPrimary: false,
         features: ["Pricing Feature", "Pricing Feature", "Pricing Feature", "Pricing Feature", "Pricing Feature"]
      },
      {
         title: "STANDARD",
         description: "Organize across all apps by hand",
         price: "10",
         isPrimary: true,
         features: ["Pricing Feature", "Pricing Feature", "Pricing Feature", "Pricing Feature", "Pricing Feature"]
      },
      {
         title: "BUSINESS",
         description: "Organize across all apps by hand",
         price: "99",
         isPrimary: false,
         features: ["Pricing Feature", "Pricing Feature", "Pricing Feature", "Pricing Feature", "Pricing Feature"]
      },
  ];

  return ( 
   <section className="bg-[#252b42] py-20 px-4 font-sans text-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl leading-12 tracking-[0.2px] mb-6">Pricing</h2>
        <div>
            <p className="text-[28px] leading-10 md:text-xl max-w-md mx-auto tracking-[0.2px]">Most calendars are designed for teams. </p>
            <p className=" hidden md:block">Slate is designed for freelancers</p>

        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
        {plans.map((plan, index) => {
          const { title, description, price, features, isPrimary } = plan;

          return (
            <div
              key={index}
              className={`
                w-full rounded-[10px] py-8 px-8 flex flex-col items-center transition-all duration-300
                ${
                  isPrimary
                    ? "bg-[#2091F9] text-white shadow-2xl md:scale-[1.07] z-10 ring-1 ring-blue-400"
                    : "bg-white text-[#252b42]"
                }
              `}
            >
              <h3 className="font-bold text-xl tracking-[0.1px] leading-7 mb-2">
                {title}
              </h3>

              <p
                className={`text-center text-[16px] tracking-[0.1px] mb-8 px-4 ${
                  isPrimary ? "text-white" : "text-[#374754]"
                }`}
              >
                {description}
              </p>

              <div className="flex items-center gap-2 mb-8">
                <h1 className="text-[74px] tracking-[0.2px] font-bold leading-none">
                  {price}
                </h1>

                <div className="flex flex-col items-start">
                  <span className="text-[20px] font-bold leading-7 tracking-[0.1px]">
                    $
                  </span>

                  <span
                    className={`text-[16px] tracking-[0.1px] ${
                      isPrimary ? "text-white" : "text-[#374754]"
                    }`}
                  >
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
                  w-full py-3 rounded-full font-semibold text-[20px] tracking-[0.2px] transition-colors
                  ${
                    isPrimary
                      ? "bg-white text-[#2091F9] hover:bg-gray-100"
                      : "bg-[#2091F9] text-white hover:opacity-95"
                  }
                `}
              >
                Order Now
              </button>
            </div>
          );
      })}
    </div>
    </section>
  )
}

export default PricingSection