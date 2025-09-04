import Image from "next/image";
import AboutOurProduct from "../components/sections/AboutOurProduct";
import ApplicationAreas from "../components/sections/ApplicationAreas";
import OurRange from "../components/sections/OurRange";
import Delivery from "../components/sections/Delivery";
import Faqs from "../components/sections/Faqs";
import LeftLinks from "../components/LeftLinks";
import Certificate from "../components/sections/Certificate";

export default function page() {
  return (
    <>
      <LeftLinks />
      {/* Global Pattern Image */}
      <Image
        src="/assets/images/pattern-long.png"
        alt="Image"
        width={522}
        height={3800}
        className="h-full w-64 absolute left-0 top-0 z-10 hidden lg:block object-fill"
      />
      <AboutOurProduct />
      <ApplicationAreas />
      <OurRange />
      <Certificate />
      <Delivery />
      <Faqs />
    </>
  );
}
