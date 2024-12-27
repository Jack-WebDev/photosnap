"use client";

import ImageContent from "@/components/ImageContent";
import PricingCard from "@/components/pricingCard";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check } from "lucide-react";
import CTA from "@/components/CTA";

const compareData = [
  {
    theFeatures: "Unlimited Story Posting",
    basic: <Check />,
    pro: <Check />,
    business: <Check />,
  },
  {
    theFeatures: "Unlimited Photo Upload",
    basic: <Check />,
    pro: <Check />,
    business: <Check />,
  },
  {
    theFeatures: "Embedding Custom Content",
    basic: "",
    pro: <Check />,
    business: <Check />,
  },
  {
    theFeatures: "Customize Metadata",
    basic: "",
    pro: <Check />,
    business: <Check />,
  },
  {
    theFeatures: "Advanced Metrics",
    basic: "",
    pro: "",
    business: <Check />,
  },
  {
    theFeatures: "Photo Downloads",
    basic: "",
    pro: "",
    business: <Check />,
  },
  {
    theFeatures: "Custom Analytics",
    basic: "",
    pro: "",
    business: <Check />,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  console.log(isYearly);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };
  return (
    <div>
      <ImageContent
        title="PRICING"
        content="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        button="GET AN INVITE"
        imageUrl={{
          mobile: "/pricing/mobile/hero.jpg",
          desktop: "/pricing/desktop/hero.jpg",
          tablet: "/pricing/tablet/hero.jpg",
        }}
        flexDirection={{
          desktop: "md:[direction:rtl]",
        }}
      />

      <div className="grid justify-center items-center gap-y-4 py-8 px-8 lg:w-[80%] mx-auto">
        <div className="flex justify-center items-center gap-x-4 my-12">
          <Label htmlFor="monthly">Monthly</Label>
          <Switch onClick={handleToggle} />
          <Label htmlFor="yearly">Yearly</Label>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-y-8 lg:gap-20">
          <PricingCard
            packageType="Basic"
            price={`${isYearly ? "R110" : "R25"}`}
            content="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            cycle={`per ${isYearly ? "yearly" : "monthly"}`}
            bgColor="bg-gray-100"
            scale="scale-100"
            buttonBGColor="bg-black text-white"
          />
          <PricingCard
            packageType="Pro"
            price={`${isYearly ? "R160" : "R50"}`}
            content="More advanced features available. Recommended for photography veterans and professionals."
            cycle={`per ${isYearly ? "yearly" : "monthly"}`}
            bgColor="bg-black text-white"
            scale="lg:scale-125"
            buttonBGColor="bg-white text-black"
          />
          <PricingCard
            packageType="Business"
            price={`${isYearly ? "R220" : "R80"}`}
            content="Additional features available such as more detailed metrics. Recommended for business owners."
            cycle={`per ${isYearly ? "yearly" : "monthly"}`}
            bgColor="bg-gray-100"
            scale="scale-100"
            buttonBGColor="bg-black text-white"
          />
        </div>

        <div className="my-8">
          <h2 className="text-3xl font-semibold text-center my-4">COMPARE</h2>
          <Table className="lg:w-1/2 mx-auto">
            <TableHeader>
              <TableRow>
                <TableHead>The Features</TableHead>
                <TableHead>Basic</TableHead>
                <TableHead>Pro</TableHead>
                <TableHead>Business</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {compareData.map((data) => (
                <TableRow key={data.theFeatures}>
                  <TableCell className="font-medium">
                    {data.theFeatures}
                  </TableCell>
                  <TableCell>{data.basic}</TableCell>
                  <TableCell>{data.pro}</TableCell>
                  <TableCell>{data.business}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
        <CTA />
    </div>
  );
}
