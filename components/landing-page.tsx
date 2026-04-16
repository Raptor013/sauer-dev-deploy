"use client";

import { useEffect, useRef, useState } from "react";
import { AboutSection } from "./landing/about-section";
import { ContactSection } from "./landing/contact-section";
import { FaqSection } from "./landing/faq-section";
import { FloatingWhatsAppButton } from "./landing/floating-whatsapp-button";
import { FooterSection } from "./landing/footer-section";
import { HeroSection } from "./landing/hero-section";
import { LocationSection } from "./landing/location-section";
import { PortfolioSection } from "./landing/portfolio-section";
import { ProcessSection } from "./landing/process-section";
import { QuoteCtaSection } from "./landing/quote-cta-section";
import { StylesSection } from "./landing/styles-section";
import { TattooCareSection } from "./landing/tattoo-care-section";
import { TestimonialsSection } from "./landing/testimonials-section";
import { WhyChooseSection } from "./landing/why-choose-section";

export function LandingPage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [showFloatingWhatsApp, setShowFloatingWhatsApp] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateHeroEffects = () => {
      ticking = false;

      if (!heroRef.current) {
        return;
      }

      const rect = heroRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress = Math.min(
        Math.max(-rect.top / Math.max(viewportHeight * 0.9, 1), 0),
        1,
      );
      const shouldShowFloatingWhatsApp =
        rect.bottom <= viewportHeight * 0.1 && rect.top < 0;

      heroRef.current.style.setProperty(
        "--hero-scroll-progress",
        progress.toFixed(3),
      );

      setShowFloatingWhatsApp((current) =>
        current === shouldShowFloatingWhatsApp
          ? current
          : shouldShowFloatingWhatsApp,
      );
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateHeroEffects);
    };

    updateHeroEffects();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <main className="bg-black text-white">
      <HeroSection heroRef={heroRef} />
      <PortfolioSection />
      <AboutSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <StylesSection />
      <QuoteCtaSection />
      <ProcessSection />
      <FaqSection />
      <TattooCareSection />
      <ContactSection />
      <LocationSection />
      <FooterSection />
      <FloatingWhatsAppButton visible={showFloatingWhatsApp} />
    </main>
  );
}
