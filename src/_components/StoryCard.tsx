type StoryCardProps = {
  title: string;
  date: string;
  creator: string;
  mobileBackgroundImage: string;
  desktopBackgroundImage: string;
};

export default function StoryCard({
  title,
  date,
  creator,
  desktopBackgroundImage,
  mobileBackgroundImage,
}: StoryCardProps) {
  return (
    <div className="w-full hover:translate-y-[-10px] hover:shadow-lg transition-all duration-300 text-white  ">
      <div
        className="flex lg:hidden flex-col justify-end bg-cover bg-center bg-no-repeat h-[32vh] w-full px-6 text-start "
        style={{ backgroundImage: `url(${mobileBackgroundImage})` }}
      >
        <span>{date}</span>
        <h2>{title}</h2>
        <span>{creator}</span>
        <a
          href="#"
          className="tracking-wider flex items-center gap-4 justify-between w-full border-t border-white mb-8 pt-4"
        >
          <span className="text-white font-semibold">READ STORY</span>
          <img
            src="/shared/desktop/arrow-white.svg"
            alt="arrow"
            width="70"
            height="100"
          />
        </a>
      </div>

      <div
        className="hidden lg:flex flex-col justify-end  bg-cover bg-center bg-no-repeat h-[50vh] w-full px-8 text-start items-stretch gap-2"
        style={{ backgroundImage: `url(${desktopBackgroundImage})` }}
      >
        <span className="text-sm">{date}</span>
        <h2 className="font-semibold text-xl">{title}</h2>
        <span className="text-xs">by {creator}</span>
        <a
          href="#"
          className="tracking-wider flex items-center gap-4 justify-between w-full border-t border-white mb-8 pt-4"
        >
          <span className="text-white font-semibold">READ STORY</span>
          <img
            src="/shared/desktop/arrow-white.svg"
            alt="arrow"
            width="70"
            height="100"
          />
        </a>
      </div>
    </div>
  );
}
