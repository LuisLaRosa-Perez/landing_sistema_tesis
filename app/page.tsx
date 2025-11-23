import { BackgroundPattern } from "@/components/background-pattern";
import { FAQ } from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import { Features8 } from "@/components/features-8";
import LogoCloud from "@/components/logo-cloud";



export default function Home() {
  return (
    <div>
      <div className="relative bg-primary/4">
        <Navbar />
        <Hero />
        <LogoCloud />
        <BackgroundPattern />
      </div>
      <Stats />
      <Features8 />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
}
