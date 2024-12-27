"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Props = {
  imageUrl: {
    mobile: string;
    desktop: string;
    tablet: string;
  };
  title: string;
  flexDirection?: {
    mobile?: string;
    desktop?: string;
  };
  content: string;
  button: string;
  bgColor?: string;
};

export default function ImageContent({
  imageUrl,
  title,
  content,
  bgColor,
  flexDirection,
  button,
}: Props) {
  return (
    <div
      className={`grid md:[grid-template-columns:1fr_0.8fr] place-items-center ${flexDirection?.desktop}`}
    >
      <Image
        src={imageUrl.mobile}
        alt={title}
        width={600}
        height={400}
        className="md:hidden w-full"
      />
      <Image
        src={imageUrl.tablet}
        alt={title}
        width={600}
        height={400}
        className="hidden md:inline-block lg:hidden w-full"
      />
      <Image
        src={imageUrl.desktop}
        alt={title}
        width={600}
        height={400}
        className="hidden lg:inline-block w-full"
      />
      <div className={`grid gap-y-4 ${bgColor ?? "bg-black text-white"} p-8 xl:p-36 h-full content-center [direction:ltr] xl:pl-24`}>
        <h2 className="text-3xl font-bold xl:w-[60%] xl:text-6xl">{title}</h2>
        <p className="xl:w-1/2 my-4 font-light">{content}</p>
        <button className="font-semibold flex items-center gap-x-2">{button}<ArrowRight/></button>
        
      </div>
    </div>
  );
}
