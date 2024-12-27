import StoriesImage from "@/components/StoriesImage";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Stories() {
  return (
    <div>
      <div className="grid md:hidden">
        <Image
          src="/stories/mobile/moon-of-appalacia.jpg"
          alt="moon"
          width={400}
          height={400}
          className="w-full h-full"
        />

        <div className="bg-black text-white p-8">
          <h2>Last month&apos;s featured story</h2>
          <h3 className="text-4xl font-semibold my-8">
            Hazy full moon of Appalachia
          </h3>
          <p className="text-sm my-4">
            <span>March 2nd 2020 </span> <span>by John Appleseed</span>
          </p>
          <p>
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called mountains especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <button className="flex items-center gap-x-2 my-4">
            READ THE STORY <ArrowRight />
          </button>
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-center text-white bg-[url('/stories/tablet/moon-of-appalacia.jpg')] lg:bg-[url('/stories/desktop/moon-of-appalacia.jpg')] bg-cover bg-center bg-no-repeat h-full md:h-[75vh] w-full p-8">
        <h2>Last month&apos;s featured story</h2>
        <h3 className="text-5xl font-semibold w-1/2 my-4">Hazy full moon of Appalachia</h3>
        <p>
          <span className="text-[#FFFFFF] font-light">March 2nd 2020 </span> <span>by John Appleseed</span>
        </p>
        <p className="my-6 lg:w-1/2">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called mountains especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <button className="flex items-center gap-x-2 my-4">
          READ THE STORY <ArrowRight />
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        <StoriesImage
          title="The Mountains"
          author="by John Gramer"
          imageUrl={{
            mobile: "/stories/mobile/mountains.jpg",
            desktop: "/stories/desktop/mountains.jpg",
          }}
          date="March 2nd 2020"
        />
        <StoriesImage
          title="Sunset Cityscapes"
          author="by Mike Winger"
          imageUrl={{
            mobile: "/stories/mobile/cityscapes.jpg",
            desktop: "/stories/desktop/cityscapes.jpg",
          }}
          date="April 3rd 2020"
        />
        <StoriesImage
          title="18 Days Voyage"
          author="by Jack McYunnar"
          imageUrl={{
            mobile: "/stories/mobile/18-days-voyage.jpg",
            desktop: "/stories/desktop/18-days-voyage.jpg",
          }}
          date="April 1st 2020"
        />
        <StoriesImage
          title="Architecturals"
          author="by Billie Marten"
          imageUrl={{
            mobile: "/stories/mobile/architecturals.jpg",
            desktop: "/stories/desktop/architecturals.jpg",
          }}
          date="June 23rd 2020"
        />

        <StoriesImage
          title="Behind The Waves"
          author="by Lamar Jones"
          imageUrl={{
            mobile: "/stories/mobile/behind-the-waves.jpg",
            desktop: "/stories/desktop/behind-the-waves.jpg",
          }}
          date="August 22nd 2020"
        />

        <StoriesImage
          title="Calm Waters"
          author="by FKA Mash"
          imageUrl={{
            mobile: "/stories/mobile/calm-waters.jpg",
            desktop: "/stories/desktop/calm-waters.jpg",
          }}
          date="May 12th 2020"
        />
        <StoriesImage
          title="Dark Forest"
          author="by Laura Marling"
          imageUrl={{
            mobile: "/stories/mobile/dark-forest.jpg",
            desktop: "/stories/desktop/dark-forest.jpg",
          }}
          date="November 27th 2020"
        />
        <StoriesImage
          title="King On Africa"
          author="by Thapelo Boateng"
          imageUrl={{
            mobile: "/stories/mobile/king-on-africa.jpg",
            desktop: "/stories/desktop/king-on-africa.jpg",
          }}
          date="October 25th 2020"
        />
        <StoriesImage
          title="Land Of Dreams"
          author="by Theo Van Ellis"
          imageUrl={{
            mobile: "/stories/mobile/land-of-dreams.jpg",
            desktop: "/stories/desktop/land-of-dreams.jpg",
          }}
          date="January 13th 2021"
        />
        <StoriesImage
          title="Milky Way"
          author="by Elijah Bloom"
          imageUrl={{
            mobile: "/stories/mobile/milky-way.jpg",
            desktop: "/stories/desktop/milky-way.jpg",
          }}
          date="December 28th 2020"
        />
        <StoriesImage
          title="Rage of the Sea"
          author="by Leah McGrath"
          imageUrl={{
            mobile: "/stories/mobile/rage-of-the-sea.jpg",
            desktop: "/stories/desktop/rage-of-the-sea.jpg",
          }}
          date="February 10th 2021"
        />
        <StoriesImage
          title="Running Free"
          author="by Thabang Mokone"
          imageUrl={{
            mobile: "/stories/mobile/running-free.jpg",
            desktop: "/stories/desktop/running-free.jpg",
          }}
          date="July 10th 2020"
        />
        <StoriesImage
          title="Somwarpet"
          author="by Hasaan Maake"
          imageUrl={{
            mobile: "/stories/mobile/somwarpet.jpg",
            desktop: "/stories/desktop/somwarpet.jpg",
          }}
        />
        <StoriesImage
          title="Trip to Nowhere"
          author="by Kyle Stevens"
          imageUrl={{
            mobile: "/stories/mobile/trip-to-nowhere.jpg",
            desktop: "/stories/desktop/trip-to-nowhere.jpg",
          }}
          date="September 15th 2020"
        />
        <StoriesImage
          title="Unforeseen Corners"
          author="by Ryan Cooper"
          imageUrl={{
            mobile: "/stories/mobile/unforeseen-corners.jpg",
            desktop: "/stories/desktop/unforeseen-corners.jpg",
          }}
          date="April 19th 2020"
        />
        <StoriesImage
          title="World Tour"
          author="by Marcus O'Brien"
          imageUrl={{
            mobile: "/stories/mobile/world-tour.jpg",
            desktop: "/stories/desktop/world-tour.jpg",
          }}
          date="March 15th 2020"
        />
      </div>
    </div>
  );
}
