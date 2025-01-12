import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LogoSlider } from "@/components/logo-slider";
import { Services } from "@/components/services";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Blog } from "@/components/blog";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <Hero />
      <LogoSlider />
      <Services />
      <Features />
      <Testimonials />
      <FAQ />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}
