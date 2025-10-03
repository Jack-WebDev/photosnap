// components/PricingGrid.tsx
import { useState } from "react";
import PricingCard from "./PricingCard";

export default function PricingGrid() {
  const [isMonthly, setIsMonthly] = useState(true);

  const prices = {
    basic: { monthly: "$9.99", yearly: "$99.99" },
    pro: { monthly: "$19.99", yearly: "$199.99" },
    business: { monthly: "$29.99", yearly: "$299.99" },
  };

  return (
    <section className="max-w-7xl mx-auto p-8 my-8">
      <div className="flex justify-center mb-10">
        <div className="relative inline-flex items-center">
          <input
            type="checkbox"
            id="pricingToggle"
            className="sr-only peer"
            checked={isMonthly}
            onChange={() => setIsMonthly((v) => !v)}
          />
          <label
            htmlFor="pricingToggle"
            className="flex items-center cursor-pointer select-none relative bg-gray-100 rounded-full p-1.5 w-44 h-12"
          >
            <span
              className={`w-1/2 text-center text-sm font-medium z-10 transition-colors duration-300 ${
                isMonthly ? "text-white" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <span
              className={`w-1/2 text-center text-sm font-medium z-10 transition-colors duration-300 ${
                !isMonthly ? "text-white" : "text-gray-500"
              }`}
            >
              Yearly
            </span>

            <span
              className={`absolute left-1.5 top-1.5 h-9 w-[calc(50%-0.375rem)] rounded-full bg-black transition-transform duration-300 ease-out ${
                isMonthly
                  ? "translate-x-0"
                  : "translate-x-[calc(100%)]"
              }`}
            />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
        <div className="h-full">
          <PricingCard
            title="Basic"
            price={isMonthly ? prices.basic.monthly : prices.basic.yearly}
            description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            isMonthly={isMonthly}
            className="bg-gray-500 text-white py-4 rounded-lg h-full"
            buttonClassName="bg-black text-white"
          />
        </div>

        <div className="h-full lg:transform lg:scale-110 lg:z-10 lg:-mt-2">
          <PricingCard
            title="Pro"
            price={isMonthly ? prices.pro.monthly : prices.pro.yearly}
            description="More advanced features available. Recommended for photography veterans and professionals."
            isMonthly={isMonthly}
            className="bg-black text-white py-4 rounded-lg h-full shadow-lg ring-1 ring-black/10"
            buttonClassName="bg-white text-black"
          />
        </div>

        <div className="h-full">
          <PricingCard
            title="Business"
            price={isMonthly ? prices.business.monthly : prices.business.yearly}
            description="Additional features available such as more detailed metrics. Recommended for business owners."
            isMonthly={isMonthly}
            className="bg-gray-500 text-white py-4 rounded-lg h-full"
            buttonClassName="bg-black text-white"
          />
        </div>
      </div>
    </section>
  );
}
