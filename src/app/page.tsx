'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import Preloader from '@/components/layout/Preloader';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import NetworkGraph from '@/components/sections/NetworkGraph';
import DialerProducts from '@/components/sections/DialerProducts';
import HowItWorks from '@/components/sections/HowItWorks';
import AISection from '@/components/sections/AISection';
import ServicesMatrix from '@/components/sections/ServicesMatrix';
import StackBuilder from '@/components/sections/StackBuilder';
import IndustrySection from '@/components/sections/IndustrySection';
import AnalyticsDashboard from '@/components/sections/AnalyticsDashboard';
import TheCallSignature from '@/components/sections/TheCallSignature';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // If preloader was already completed in this session, reveal immediately
    if (sessionStorage.getItem('v_preloaded')) {
      setLoaded(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('v_preloaded', 'true');
    setLoaded(true);
  };

  return (
    <>
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease-out' }}>
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <NetworkGraph />
          <DialerProducts />
          <HowItWorks />
          <AISection />
          <ServicesMatrix />
          <StackBuilder />
          <IndustrySection />
          <AnalyticsDashboard />
          <TheCallSignature />
        </main>
        <Footer />
      </div>
    </>
  );
}
