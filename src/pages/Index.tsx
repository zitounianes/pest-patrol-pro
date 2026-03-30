import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyActNow from "@/components/WhyActNow";
import Excellence from "@/components/Excellence";
import Sectors from "@/components/Sectors";
import Testimonials from "@/components/Testimonials";
import Emergency from "@/components/Emergency";
import Articles from "@/components/Articles";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <WhyActNow />
      <Excellence />
      <Sectors />
      <Testimonials />
      <Emergency />
      <Articles />
      <BookingForm />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
