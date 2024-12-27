import Image from "next/image";
import React from "react";

type Props = {
  imageUrl: string;
  title: string;
  content: string;
};

export default function FeaturesImage({ imageUrl, title, content }: Props) {
  return (
    <div className="grid place-items-center p-8 gap-y-4">
      <Image src={imageUrl} alt={title} width={150} height={150} />
      <div className="text-center grid gap-y-4 md:w-1/2 lg:w-full">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
