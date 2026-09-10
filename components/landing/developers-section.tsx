"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check } from "lucide-react";

const codeExamples = [
  {
    label: "Install",
    code: `npm install @voice-era/telephony-sdk

# or
yarn add @voice-era/telephony-sdk
pnpm add @voice-era/telephony-sdk`,
  },
  {
    label: "SIP Trunk",
    code: `import { VoiceEra } from '@voice-era/telephony-sdk'

const trunk = await VoiceEra.createSipTrunk({
  tier: 'direct-cli-route',
  regions: ['us-east-ashburn', 'us-west-sanjose'],
  auth: { ip: '198.51.100.24' },
  codecs: ['G711u', 'Opus'],
  stirShaken: 'A'
})`,
  },
  {
    label: "Dialer Link",
    code: `// Bind SIP trunk to hosted or BYO dialer
const dialerBridge = await trunk.bindDialer({
  mode: 'predictive',
  concurrency: 200,
  routes: ['tier1-primary', 'tier1-backup'],
  callRecording: 'dual-channel'
})

console.log('SIP Route & Dialer active:', dialerBridge.status)`,
  },
];

const features = [
  { 
    title: "Sub-30ms PDD", 
    description: "Direct Tier-1 carrier routes with instantaneous ringback."
  },
  { 
    title: "STIR/SHAKEN Level A", 
    description: "Full cryptographic caller ID signature validation."
  },
  { 
    title: "Universal SIP & REST", 
    description: "Interconnect with Asterisk, Vicidial, FreePBX, or Genesys."
  },
  { 
    title: "Real-Time CDR Webhooks", 
    description: "Instant event streaming for duration, ASR, and call quality."
  },
];

const codeAnimationStyles = `
  .dev-code-line {
    opacity: 0;
    transform: translateX(-8px);
    animation: devLineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devLineReveal {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .dev-code-char {
    opacity: 0;
    filter: blur(8px);
    animation: devCharReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devCharReveal {
    to {
      opacity: 1;
      filter: blur(0);
    }
  }
`;

export function DevelopersSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="developers" ref={sectionRef} className="relative py-20 sm:py-28 lg:py-32 overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      <style dangerouslySetInnerHTML={{ __html: codeAnimationStyles }} />
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-muted-foreground mb-4 sm:mb-6">
              <span className="w-6 sm:w-8 h-px bg-foreground/30" />
              Carrier APIs & Telephony SDK
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display tracking-tight mb-6 sm:mb-8">
              Engineered for voice.
              <br />
              <span className="text-muted-foreground">Built for high scale.</span>
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed">
              Programmatic SIP trunking, route telemetry, and dialer controls designed for voice engineers and contact center architects.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  <h3 className="font-medium mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Code block */}
          <div
            className={`lg:sticky lg:top-32 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10">
              {/* Tabs */}
              <div className="flex items-center border-b border-foreground/10">
                {codeExamples.map((example, idx) => (
                  <button
                    key={example.label}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`px-6 py-4 text-sm font-mono transition-colors relative ${
                      activeTab === idx
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {example.label}
                    {activeTab === idx && (
                      <span className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />
                    )}
                  </button>
                ))}
                <div className="flex-1" />
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-4 py-4 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              
              {/* Code content */}
              <div className="p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm bg-foreground/[0.01] min-h-[220px] overflow-x-auto">
                <pre className="text-foreground/80">
                  {codeExamples[activeTab].code.split('\n').map((line, lineIndex) => (
                    <div 
                      key={`${activeTab}-${lineIndex}`} 
                      className="leading-loose dev-code-line"
                      style={{ animationDelay: `${lineIndex * 80}ms` }}
                    >
                      <span className="inline-flex">
                        {line.split('').map((char, charIndex) => (
                          <span
                            key={`${activeTab}-${lineIndex}-${charIndex}`}
                            className="dev-code-char"
                            style={{
                              animationDelay: `${lineIndex * 80 + charIndex * 15}ms`,
                            }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>
            </div>
            
            {/* Links */}
            <div className="mt-6 flex items-center gap-6 text-sm">
              <a href="#" className="text-foreground hover:underline underline-offset-4">
                Read the docs
              </a>
              <span className="text-foreground/20">|</span>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
