import Banner from "@/component/Banner";
import FeatureBar from "@/component/FeatureBar";
import HeroPromo from "@/component/HeroPromo";
import Testimonial from "@/component/Testimonial";

import TopGenerations from "@/component/TopGenerations";

export default function Home() {
  return (
    <div className="">
      <Banner/>

      <FeatureBar />

      <TopGenerations/>

      <HeroPromo/>

      <Testimonial/>


      
    </div>
  );
}
