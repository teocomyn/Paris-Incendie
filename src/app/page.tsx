import Hero from "@/components/Hero";
import CertificationsBar from "@/components/CertificationsBar";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PhotoGallery from "@/components/PhotoGallery";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <PhotoGallery />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogPreview />
      <CTASection />
      <CertificationsBar />
    </>
  );
}
