import Footer from "@/components/sections/Footer";
import GrowingSection from "@/components/sections/GrowingSection";
import HeroSection from "@/components/sections/HeroSection";
import PathSection from "@/components/sections/PathSection";
import TechnologySection from "@/components/sections/TechnologySection";
import TechnologySolutions from "@/components/sections/TechnologySolutions";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
<>
<div className="overflow-hidden ">
<HeroSection/>
<TechnologySection/>
<PathSection />
<TechnologySolutions />
<TestimonialsSection />
<GrowingSection/>
<Footer />
</div>
</>
  );
}
