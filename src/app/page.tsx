import Image from "next/image";

import Implementing from "./components/sections/Implementing";
import Hero from "./components/sections/Hero";
import NewsSlider from "./components/sections/NewsSlider";
import Produce from "./components/sections/Produce";
import Statistics from "./components/sections/Statistics";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Global Pattern Image */}
      <Image
        src="/assets/images/pattern-long.png"
        alt="Image"
        width={522}
        height={3800}
        className="h-full w-64 absolute left-0 top-0 z-[1] hidden lg:block object-fill"
      />
      <Hero />
      <Statistics />
      <NewsSlider />
      <Produce />
      <Implementing />
      <Contact />
    </>
  );
}
