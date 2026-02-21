import React from 'react';
import { ArrowRight, ChevronDown, Check, CheckCircle2, X, Tag, Dumbbell } from 'lucide-react';

export default function App() {
  return (
    <div className="font-sans antialiased overflow-x-hidden selection:bg-white selection:text-black min-h-screen bg-black text-white">
      {/* Global Styles for Fonts and Custom Effects */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Montserrat:wght@500;700;800;900&display=swap');
        
        :root {
          --font-sans: 'Inter', sans-serif;
          --font-heading: 'Montserrat', sans-serif;
        }
        
        .font-sans { font-family: var(--font-sans); }
        .font-heading { font-family: var(--font-heading); }
        
        .bg-pattern {
          background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0);
          background-size: 32px 32px;
        }

        .cinematic-overlay {
          background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,1) 100%);
        }
        
        .card-hover-effect {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover-effect:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -10px rgba(255,255,255,0.1);
        }
      `}} />

      {/* HERO SECTION */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Grayscale and Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="Gym Interior"
            className="w-full h-full object-cover grayscale opacity-50 mix-blend-luminosity scale-105 transform"
          />
          <div className="absolute inset-0 cinematic-overlay"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <h2 className="text-zinc-400 font-heading tracking-[0.3em] uppercase text-sm md:text-base font-bold mb-4">
            Smart Gym Management System
          </h2>
          <img
            src="/images/hapkonic-logo.png"
            alt="Fitonic Logo"
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 object-contain"
          />
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white mb-6 leading-none text-center">
            FITONIC
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl text-zinc-300 font-light mb-8 md:mb-12 max-w-3xl mx-auto italic">
            “Transform Your Gym Into a Smart Fitness Business”
          </p>
          <a href="mailto:kavikkannan.k@gmail.com?subject=Inquiry for Fitonic Gym Management&body=Hello,%0D%0A%0D%0AI am interested in Fitonic for my gym. Here are my details:%0D%0A%0D%0APackage: [Basic / Standard / Professional]%0D%0ABusiness Website: [Yes / No]%0D%0A%0D%0APlease get in touch with me." className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-heading font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 group">
            Get Started
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-zinc-500" />
        </div>
      </header>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-32 relative bg-black bg-pattern">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-wide mb-4 px-2">Investment Plans</h2>
            <div className="w-16 md:w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">

            {/* BASIC PLAN */}
            <div className="w-full lg:w-1/3 border border-zinc-800 bg-zinc-950 p-6 sm:p-10 card-hover-effect flex flex-col group hover:border-zinc-500">
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors mb-2">Basic</h3>
                <div className="h-[1px] w-full bg-zinc-800 mb-6 group-hover:bg-zinc-600 transition-colors"></div>
                <div className="font-heading text-4xl font-black tracking-tight mb-2">
                  ₹10K<span className="text-zinc-500 font-light text-2xl"> – ₹12K</span>
                </div>
                <p className="text-zinc-500 text-sm">One-time setup & deployment</p>
              </div>

              <ul className="space-y-5 flex-grow mb-2 text-zinc-300">
                {['Billing Management', 'Customer Management', 'Dues Tracking', 'Data Backup', 'Custom Bill & Packages'].map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 mr-3 mt-0.5 text-white flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* STANDARD PLAN */}
            <div className="w-full lg:w-1/3 border-2 border-white bg-black p-6 sm:p-10 card-hover-effect flex flex-col relative transform lg:-translate-y-4 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1 font-heading font-bold text-xs uppercase tracking-widest">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wider text-white mb-2">Standard</h3>
                <div className="h-[1px] w-full bg-zinc-800 mb-6"></div>
                <div className="font-heading text-4xl font-black tracking-tight mb-2">
                  ₹20K<span className="text-zinc-400 font-light text-2xl"> – ₹25K</span>
                </div>
                <p className="text-zinc-400 text-sm">Comprehensive digital transition</p>
              </div>

              <ul className="space-y-5 flex-grow mb-10 text-zinc-200">
                <li className="flex items-start font-semibold text-white">
                  <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 text-white flex-shrink-0" />
                  <span>Everything in Basic, plus:</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-white flex-shrink-0" />
                  <span>Workout Plan App <span className="block text-xs text-zinc-500 mt-1">Users view daily assigned workout sets</span></span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-white flex-shrink-0" />
                  <span>Financial Analytics Dashboard <span className="block text-xs text-zinc-500 mt-1">Income & revenue graphs</span></span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-white flex-shrink-0" />
                  <span>Multi-user Access</span>
                </li>
              </ul>
            </div>

            {/* PROFESSIONAL PLAN */}
            <div className="w-full lg:w-1/3 border border-zinc-800 bg-zinc-950 p-6 sm:p-10 card-hover-effect flex flex-col group hover:border-zinc-500">
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors mb-2">Professional</h3>
                <div className="h-[1px] w-full bg-zinc-800 mb-6 group-hover:bg-zinc-600 transition-colors"></div>
                <div className="font-heading text-4xl font-black tracking-tight mb-2">
                  ₹40K<span className="text-zinc-500 font-light text-2xl"> – ₹50K</span>
                </div>
                <p className="text-zinc-500 text-sm">₹10,000 / year after 1st year (optional support)</p>
              </div>

              <ul className="space-y-5 flex-grow mb-10 text-zinc-300">
                <li className="flex items-start font-semibold text-white">
                  <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 text-white flex-shrink-0" />
                  <span>Everything in Standard, plus:</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-white flex-shrink-0" />
                  <span>Advanced Analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-white flex-shrink-0" />
                  <span>Custom Billing System</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-white flex-shrink-0" />
                  <span>Attendance Management</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-white flex-shrink-0" />
                  <span>Multi-platform Support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-white flex-shrink-0" />
                  <span>User Progress Analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONAL ADD-ON SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative border-2 border-white p-1 overflow-hidden group">
            {/* Inner container to hold background image and content */}
            <div className="relative w-full h-full p-6 sm:p-10 md:p-16 flex flex-col items-center text-center overflow-hidden bg-black">
              {/* Background Mockup Image */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                  alt="Website Mockup"
                  className="w-full h-full object-cover grayscale opacity-20 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="inline-block border border-white px-4 py-1.5 mb-6 bg-black/50 backdrop-blur-sm">
                  <span className="font-heading text-xs uppercase tracking-widest font-bold flex items-center">
                    <Tag className="w-3 h-3 mr-2" />
                    Expand Your Digital Presence
                  </span>
                </div>

                <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight mb-8">
                  Business Website
                  <span className="block text-xl md:text-2xl font-light tracking-wide text-zinc-400 mt-2">(Standalone Add-On)</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 w-full max-w-2xl">
                  <div className="text-center">
                    <p className="text-white font-heading uppercase text-sm tracking-wider mb-2">Price</p>
                    <p className="text-4xl md:text-5xl font-heading font-black text-white">₹10,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 relative bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-6xl font-black uppercase tracking-tighter mb-10 leading-tight px-4 text-center">
            Upgrade Your Gym.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-white to-zinc-500">Digitize Your Business.</span>
          </h2>

          <a href="mailto:kavikkannan.k@gmail.com?subject=Inquiry for Fitonic Gym Management&body=Hello,%0D%0A%0D%0AI am interested in Fitonic for my gym. Here are my details:%0D%0A%0D%0APackage: [Basic / Standard / Professional]%0D%0ABusiness Website: [Yes / No]%0D%0A%0D%0APlease get in touch with me." className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-heading font-black text-lg uppercase tracking-widest hover:bg-zinc-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]">
            Get Started Today
          </a>
        </div>
      </section>

      {/* FOOTER & DISCLAIMER */}
      <footer className="py-8 bg-black border-t border-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            <Dumbbell className="w-6 h-6 text-zinc-700 mr-2" />
            <span className="font-heading font-bold uppercase tracking-widest text-zinc-500">FITONIC SaaS</span>
          </div>
          <p className="text-zinc-600 text-xs max-w-2xl mx-auto uppercase tracking-wider leading-relaxed">
            ⚠ Disclaimer: Additional service-related costs may apply depending on deployment and operational requirements. All prices are indicative and subject to final scope of work.
          </p>
        </div>
      </footer>
    </div>
  );
}