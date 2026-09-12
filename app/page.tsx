import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { MetricsSection } from "@/components/landing/metrics-section";
import { SecuritySection } from "@/components/landing/security-section";
import { ExpertContactSection } from "@/components/landing/expert-contact-section";
import { AboutSection } from "@/components/landing/about-section";
import { CtaSection } from "@/components/landing/cta-section";
import { ContactSection } from "@/components/landing/contact-section";
import { FooterSection } from "@/components/landing/footer-section";
import { DemoModalProvider } from "@/components/landing/demo-modal-context";

export default function Home() {
  return (
    <DemoModalProvider>
      <main className="relative min-h-screen overflow-x-hidden noise-overlay">
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <InfrastructureSection />
        <MetricsSection />
        <SecuritySection />
        <ExpertContactSection />
        <AboutSection />
        <CtaSection />
        <ContactSection />
        <FooterSection />
      </main>
    </DemoModalProvider>
  );
}
