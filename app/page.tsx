import { BackgroundPattern } from "@/components/background-pattern";
import { FAQ } from "@/components/faq";
import { FeaturesComparison } from "@/components/features-comparison";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";

import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <div>
      <div className="relative bg-primary/4">
        <Navbar />
        <Hero />
        <BackgroundPattern />
      </div>

      <WhyChooseUs />

      <FeaturesComparison />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}
