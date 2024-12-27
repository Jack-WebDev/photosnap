import CTA from "@/components/CTA";
import FeaturesImage from "@/components/FeaturesImage";
import ImageContent from "@/components/ImageContent";
import React from "react";

export default function Features() {
  return (
    <div>
      <ImageContent
        title="Features"
        content="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        button="GET AN INVITE"
        imageUrl={{
          mobile: "/features/mobile/hero.jpg",
          desktop: "/features/desktop/hero.jpg",
          tablet: "/features/tablet/hero.jpg",
        }}
        flexDirection={{
          desktop: "md:[direction:rtl]",
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 items-baseline py-8">
        <FeaturesImage
          imageUrl="/features/desktop/responsive.svg"
          title="100% Responsive"
          content="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
        />

        <FeaturesImage
          imageUrl="/features/desktop/no-limit.svg"
          title="No Photo Upload Limit"
          content="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
        />

        <FeaturesImage
          imageUrl="/features/desktop/embed.svg"
          title="Available to Embed"
          content="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
        />

        <FeaturesImage
          imageUrl="/features/desktop/custom-domain.svg"
          title="Custom Domain"
          content="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
        />
        <FeaturesImage
          imageUrl="/features/desktop/boost-exposure.svg"
          title="Boost Your Exposure"
          content="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
        />
        <FeaturesImage
          imageUrl="/features/desktop/drag-drop.svg"
          title="Drag & Drop Image"
          content="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
        />
      </div>

      <CTA/>
    </div>
  );
}
