import Navbar from "@/components/Navbar";
import Faqs from "@/components/sections/Faqs";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Trying from "@/components/sections/Trying";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Trying />
      <Pricing />
      <Faqs />
    </>
  );
}
