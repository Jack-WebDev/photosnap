"use client";

import { image } from "framer-motion/client";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  imageUrl: {
    mobile?: string;
    desktop?: string;
    tablet?: string;
  };
  title: string;
  date?: string;
  author: string;
};

export default function StoriesImage({
  imageUrl,
  title,
  date,
  author,
}: Props) {
    const [backgroundImage, setBackgroundImage] = useState(imageUrl.desktop);


    useEffect(() => {
      const updateBackground = () => {
        const screenWidth = window.innerWidth;
  
        if (screenWidth >= 1024) {
          setBackgroundImage(imageUrl.desktop); 
        } else if (screenWidth >= 768) {
          setBackgroundImage(imageUrl.tablet ?? imageUrl.desktop); 
        } else {
          setBackgroundImage(imageUrl.mobile); 
        }
      };
  
      updateBackground();
  
      window.addEventListener("resize", updateBackground);
  
      return () => window.removeEventListener("resize", updateBackground);
    }, [imageUrl]);
  
    return (
      <div
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay",
          aspectRatio: "1 / 1"
        }}
        className="h-full w-full flex flex-col items-start justify-end gap-y-2 text-white p-8"
      >
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{author}</p>
        <div className="flex justify-between items-center gap-x-2 border-t border-gray-100 w-full pt-6">
          <button>VIEW STORY</button>
          <ArrowRight />
        </div>
      </div>
    );
}
