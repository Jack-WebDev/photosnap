import FeaturesImage from "@/components/FeaturesImage";
import ImageContent from "@/components/ImageContent";
import StoriesImage from "@/components/StoriesImage";

export default function Home() {
  return (
    <>
      <ImageContent
        title="Create and share your photo Stories."
        content="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        button="GET AN INVITE"
        imageUrl={{
          mobile: "/home/mobile/create-and-share.jpg",
          desktop: "/home/desktop/create-and-share.jpg",
          tablet: "/home/tablet/create-and-share.jpg",
        }}
        flexDirection={{
          desktop: "md:[direction:rtl]",
        }}
      />
      <ImageContent
        title="Beautiful stories every time."
        content="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        button="VIEW THE STORIES"
        imageUrl={{
          mobile: "/home/mobile/beautiful-stories.jpg",
          desktop: "/home/desktop/beautiful-stories.jpg",
          tablet: "/home/tablet/beautiful-stories.jpg",
        }}
        bgColor="bg-white text-black"
      />
      <ImageContent
        title="Designed for everyone."
        content="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
        button="VIEW THE STORIES"
        imageUrl={{
          mobile: "/home/mobile/designed-for-everyone.jpg",
          desktop: "/home/desktop/designed-for-everyone.jpg",
          tablet: "/home/tablet/designed-for-everyone.jpg",
        }}
        flexDirection={{
          desktop: "md:[direction:rtl]",
        }}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        <StoriesImage
          title="The Mountains"
          author="by John Gramer"
          imageUrl={{
            mobile: "/stories/mobile/mountains.jpg",
            desktop: "/stories/desktop/mountains.jpg",
          }}
        />
        <StoriesImage
          title="Sunset Cityscapes"
          author="by Mike Winger"
          imageUrl={{
            mobile: "/stories/mobile/cityscapes.jpg",
            desktop: "/stories/desktop/cityscapes.jpg",
          }}
        />
        <StoriesImage
          title="18 Days Voyage"
          author="by Jack McYunnar"
          imageUrl={{
            mobile: "/stories/mobile/18-days-voyage.jpg",
            desktop: "/stories/desktop/18-days-voyage.jpg",
          }}
        />
        <StoriesImage
          title="Architecturals"
          author="by Billie Marten"
          imageUrl={{
            mobile: "/stories/mobile/architecturals.jpg",
            desktop: "/stories/desktop/architecturals.jpg",
          }}
        />
      </div>

      <div className="grid lg:grid-cols-3">
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
      </div>
    </>
  );
}
