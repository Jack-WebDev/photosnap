import { ArrowRight } from "lucide-react";
import React from "react";

export default function CTA() {
  return (
    <div className='bg-[url("/shared/mobile/bg-beta.jpg")] md:bg-[url("/shared/tablet/bg-beta.jpg")] lg:[url("/shared/desktop/bg-beta.jpg")] bg-cover bg-center bg-no-repeat h-[40vh] w-full text-white font-semibold flex flex-col lg:flex-row justify-evenly items-start p-8 lg:h-[30vh]'>
      <h2 className="text-4xl md:w-1/2 md:text-5xl lg:w-[20%]">We&apos;re in Beta. Get your invite today!</h2>
      <button className="flex items-center gap-x-2 my-4">
        GET AN INVITE <ArrowRight />
      </button>
    </div>
  );
}
