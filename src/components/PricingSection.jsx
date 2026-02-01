import PricingCards from "./PricingCards";



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
   <section className="bg-[#252b42] min-h-screen py-20 px-4 font-sans text-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-medium mb-6">Pricing</h2>
        <div>
            <p className="text-md md:text-xl max-w-md mx-auto leading-relaxed">Most calendars are designed for teams. </p>
            <p className=" hidden md:block">Slate is designed for freelancers</p>

        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <PricingCards key={index} {...plan} />
        ))}
      </div>
    </section>
  )
}

export default PricingSection