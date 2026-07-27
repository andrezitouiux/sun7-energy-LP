/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Management from './components/Management';
import Differentiators from './components/Differentiators';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7fafd] text-[#0f172a] font-sans antialiased relative overflow-hidden selection:bg-[#F59F0A] selection:text-white">
      
      {/* 1. Header Navigation and Branding */}
      <Header />

      {/* 2. Deluxe Hero with Simulation Showcase */}
      <Hero />

      {/* Marquee representing technical compatibility and scale */}
      <section className="py-7 bg-white border-y border-slate-200 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-[10px] text-slate-500 uppercase tracking-[4px] font-bold text-center md:text-left shrink-0">
              SISTEMA HOMOLOGADO &amp; COMPATÍVEL&nbsp;COM
            </span>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-slate-400 font-display font-black text-[12.5px] tracking-widest leading-none grayscale opacity-80">
              <span>BYD</span>
              <span>GWM</span>
              <span>VOLVO</span>
              <span>GEELY</span>
              <span>OMODA</span>
              <span>BMW</span>
              <span>TESLA</span>
              <span>ZEEKR</span>
              <span>RENAULT</span>
              <span>GAC</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Scenario Selection: Private Spot vs Shared Garage hub */}
      <Solutions />

      {/* 4. Active Application and Management Portals (Resident vs Administrator) */}
      <Management />

      {/* 5. Technical Engineering Differentiators (CREA-SC certified) */}
      <Differentiators />



      {/* 7. Accordion FAQs */}
      <Faq />

      {/* 8. Conversion Target Forms */}
      <ContactForm />

      {/* 10. Light Mode Clean Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

    </div>
  );
}
