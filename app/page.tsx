import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import QuickAccess from "@/components/quick-access";
import AudienceCards from "@/components/audience-cards";
import Partners from "@/components/partners";
import PracticeAreas from "@/components/practice-areas";
import Attorneys from "@/components/attorneys";
import CaseResults from "@/components/case-results";
import TestimonialsSection from "@/components/testimonials-section";
import NetSheet from "@/components/net-sheet";
import FAQ from "@/components/faq";
import Consultation from "@/components/consultation";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";
import FloridaBanner from "@/components/florida-banner";

export default function Home() {
  return (
    <main>
      <FloridaBanner />
      <Navbar />
      <Hero />
      <QuickAccess />
      <AudienceCards />
      <Partners />
      <PracticeAreas />
      <Attorneys />
      <CaseResults />
      <TestimonialsSection />
      <NetSheet />
      <FAQ />
      <Consultation />
      <Footer />
      <Chatbot />
    </main>
  );
}
