
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SermonSection from "@/components/home/SermonSection";
import EventSection from "@/components/home/EventSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SermonSection />
      <EventSection />
      <TestimonialSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
