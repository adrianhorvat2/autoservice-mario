"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ako u URL-u nema zadanog taga (#), uvijek otvori skroz od vrha ekrana
      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }
  }, []);

  return (
    <div id="pocetna" className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 selection:bg-red-600 selection:text-white">
      {/* Sticky Header sa zaglavljem i hamburger menijem */}
      <Header />

      {/* Glavni sadržaj */}
      <main className="flex-grow">
        {/* Hero sekcija */}
        <Hero />

        {/* Sekcija Usluge */}
        <Services />

        {/* Zašto odabrati nas */}
        <WhyUs />

        {/* O nama */}
        <About />

        {/* Kontakt i karta */}
        <Contact />
      </main>

      {/* Podnožje */}
      <Footer />

      {/* Plutajući gumb za poziv */}
      <FloatingCallButton />
    </div>
  );
}
