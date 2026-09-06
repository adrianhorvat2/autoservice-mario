import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 selection:bg-red-600 selection:text-white">
      {/* Sticky Header with Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Why Choose Us Section */}
        <WhyUs />

        {/* About Section */}
        <About />

        {/* Contact & Map Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call Button for Instant Mobile Tap */}
      <FloatingCallButton />
    </div>
  );
}
