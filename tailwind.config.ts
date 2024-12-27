import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "18-days-voyage-mobile": "url('/stories/mobile/18-days-voyage.jpg')",
        "18-days-voyage-tablet": "url('/stories/tablet/18-days-voyage.jpg')",
        "18-days-voyage-desktop": "url('/stories/desktop/18-days-voyage.jpg')",
        "architecturals-mobile": "url('/stories/mobile/architecturals.jpg')",
        "architecturals-tablet": "url('/stories/tablet/architecturals.jpg')",
        "architecturals-desktop": "url('/stories/desktop/architecturals.jpg')",
        "behind-the-waves-mobile":
          "url('/stories/mobile/behind-the-waves.jpg')",
        "behind-the-waves-tablet":
          "url('/stories/tablet/behind-the-waves.jpg')",
        "behind-the-waves-desktop":
          "url('/stories/desktop/behind-the-waves.jpg')",
        "calm-waters-mobile": "url('/stories/mobile/calm-waters.jpg')",
        "calm-waters-tablet": "url('/stories/tablet/calm-waters.jpg')",
        "calm-waters-desktop": "url('/stories/desktop/calm-waters.jpg')",
        "cityscapes-mobile": "url('/stories/mobile/cityscapes.jpg')",
        "cityscapes-tablet": "url('/stories/tablet/cityscapes.jpg')",
        "cityscapes-desktop": "url('/stories/desktop/cityscapes.jpg')",
        "dark-forest-mobile": "url('/stories/mobile/dark-forest.jpg')",
        "dark-forest-tablet": "url('/stories/tablet/dark-forest.jpg')",
        "dark-forest-desktop": "url('/stories/desktop/dark-forest.jpg')",
        "king-on-africa-mobile": "url('/stories/mobile/king-on-africa.jpg')",
        "king-on-africa-tablet": "url('/stories/tablet/king-on-africa.jpg')",
        "king-on-africa-desktop": "url('/stories/desktop/king-on-africa.jpg')",
        "land-of-dreams-mobile": "url('/stories/mobile/land-of-dreams.jpg')",
        "land-of-dreams-tablet": "url('/stories/tablet/land-of-dreams.jpg')",
        "land-of-dreams-desktop": "url('/stories/desktop/land-of-dreams.jpg')",
        "milky-way-mobile": "url('/stories/mobile/milky-way.jpg')",
        "milky-way-tablet": "url('/stories/tablet/milky-way.jpg')",
        "milky-way-desktop": "url('/stories/desktop/milky-way.jpg')",
        "moon-of-appalacia-mobile":
          "url('/stories/mobile/moon-of-appalacia.jpg')",
        "moon-of-appalacia-tablet":
          "url('/stories/tablet/moon-of-appalacia.jpg')",
        "moon-of-appalacia-desktop":
          "url('/stories/desktop/moon-of-appalacia.jpg')",
        "mountains-mobile": "url('/stories/mobile/mountains.jpg')",
        "mountains-tablet": "url('/stories/tablet/mountains.jpg')",
        "mountains-desktop": "url('/stories/desktop/mountains.jpg')",
        "rage-of-the-sea-mobile": "url('/stories/mobile/rage-of-the-sea.jpg')",
        "rage-of-the-sea-tablet": "url('/stories/tablet/rage-of-the-sea.jpg')",
        "rage-of-the-sea-desktop":
          "url('/stories/desktop/rage-of-the-sea.jpg')",
        "running-free-mobile": "url('/stories/mobile/running-free.jpg')",
        "running-free-tablet": "url('/stories/tablet/running-free.jpg')",
        "running-free-desktop": "url('/stories/desktop/running-free.jpg')",
        "somwarpet-mobile": "url('/stories/mobile/somwarpet.jpg')",
        "somwarpet-tablet": "url('/stories/tablet/somwarpet.jpg')",
        "somwarpet-desktop": "url('/stories/desktop/somwarpet.jpg')",
        "trip-to-nowhere-mobile": "url('/stories/mobile/trip-to-nowhere.jpg')",
        "trip-to-nowhere-tablet": "url('/stories/tablet/trip-to-nowhere.jpg')",
        "trip-to-nowhere-desktop":
          "url('/stories/desktop/trip-to-nowhere.jpg')",
        "unforeseen-corners-mobile":
          "url('/stories/mobile/unforeseen-corners.jpg')",
        "unforeseen-corners-tablet":
          "url('/stories/tablet/unforeseen-corners.jpg')",
        "unforeseen-corners-desktop":
          "url('/stories/desktop/unforeseen-corners.jpg')",
        "world-tour-mobile": "url('/stories/mobile/world-tour.jpg')",
        "world-tour-tablet": "url('/stories/tablet/world-tour.jpg')",
        "world-tour-desktop": "url('/stories/desktop/world-tour.jpg')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
		
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
	  direction: ['ltr', 'rtl'],

    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
