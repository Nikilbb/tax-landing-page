"use client";

import React, { Suspense } from 'react';
import { Phone, CheckCircle, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import LeadForm from './LeadForm';
import WhatsAppButton from './WhatsAppButton';

function LandingContent() {
  const trackEvent = (name: string) => {
    console.log(`Event: ${name}`);
  };

  const testimonials = [
    { name: "Rajesh Shetty", role: "CEO, Coastal Tech", content: "TaxFlow saved us over ₹2 Lakhs in penalties this year. Their expertise is unmatched in Mangaluru." },
    { name: "Priya Rao", role: "Founder, GreenLeaf", content: "The WhatsApp integration made communication so easy. Highly recommend for startup founders." },
    { name: "Vikram D'Souza", role: "MD, Southern Logistics", content: "Professional, fast, and 100% compliant. They handled our audit perfectly." },
    { name: "Ananya Hegde", role: "Director, SkyHigh Media", content: "Finally, a tax partner that understands modern business needs. Seamless experience!" }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. ULTRA-MODERN NAV */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* UPDATED LOGO: CLICK TO SCROLL HOME */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              trackEvent('logo_home_click');
            }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg shadow-blue-200 flex items-center justify-center text-white font-black text-xl italic transition-transform group-hover:scale-105">
              T
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              TAXFLOW<span className="text-blue-600">.</span>
            </span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-500">
            <a href="#benefits" className="hover:text-blue-600 transition">Benefits</a>
            <a href="#process" className="hover:text-blue-600 transition">Process</a>
          </div>
          <a 
            href="tel:+919876543210" 
            onClick={() => trackEvent('header_call_click')}
            className="group relative px-6 py-3 bg-slate-900 text-white rounded-full font-bold overflow-hidden transition-all hover:pr-12"
          >
            <span className="relative z-10">Call Expert</span>
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={18} />
          </a>
        </div>
      </nav>

      {/* 2. HERO: THE ART OF TAX */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-[0.2em]">
              <ShieldCheck size={14} className="text-blue-600" /> Government Authorized Partner
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] text-slate-900">
              Tax filing <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">reimagined.</span>
            </h1>

            <p className="text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              We combine elite accounting expertise with AI-driven compliance to protect your wealth and scale your business.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 py-4">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-3xl font-black text-slate-900">10k+</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Filings Done</span>
              </div>
              <div className="w-px h-12 bg-slate-200 hidden sm:block" />
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-3xl font-black text-slate-900">100%</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Compliance</span>
              </div>
            </div>
          </div>

          {/* 3. THE "GLASS" FORM CARD */}
          <div className="lg:w-1/2 w-full max-w-lg relative group" id="lead-form">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white p-12 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100">
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Reserve a Session</h3>
                <p className="text-slate-500 mt-2 font-medium">Join 500+ Mangaluru businesses today.</p>
              </div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODERN FEATURES GRID */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 px-6" id="benefits">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: <Zap size={28} />, title: "Instant Filing", desc: "Our proprietary tech handles your data in minutes, not days." },
              { icon: <ShieldCheck size={28} />, title: "Audit Shield", desc: "Full representation and support in case of any tax inquiries." },
              { icon: <Globe size={28} />, title: "Remote Service", desc: "Manage everything from your phone, anywhere in India." }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="group p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100"
              >
                <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-all duration-500 group-hover:bg-blue-600 group-hover:rotate-6 shadow-blue-100 group-hover:shadow-xl">
                  <div className="text-blue-600 group-hover:text-white transition-colors duration-500">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-blue-600 font-bold text-sm flex items-center justify-center gap-1">
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* 8. THE 3-STEP PROCESS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="process">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-slate-100 text-slate-500 text-xs font-bold tracking-widest uppercase">
            Workflow
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Three steps to compliance.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-24 left-0 w-full h-px bg-slate-100 -z-10" />
          {[
            { step: "01", title: "Submit Details", desc: "Fill our 30-second form with your basic company info.", color: "text-blue-600" },
            { step: "02", title: "Expert Review", desc: "Our CA team reviews your data and identifies every possible saving.", color: "text-indigo-600" },
            { step: "03", title: "Digital Filing", desc: "We file your taxes and send you the receipt. Done.", color: "text-blue-500" }
          ].map((item, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              <div className={`w-20 h-20 rounded-full bg-white border-2 border-slate-50 shadow-xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:border-blue-100`}>
                <span className={`text-2xl font-black ${item.color}`}>
                  {item.step}
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed px-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. REFINED TESTIMONIAL MARQUEE */}
      <section className="py-24 overflow-hidden bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase">
            Success Stories
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Trusted by Dubai's Leaders</h2>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-8 py-4">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div 
                key={i} 
                className="inline-block w-[400px] p-10 bg-gradient-to-b from-white to-slate-50/50 border border-slate-200 rounded-[2.5rem] whitespace-normal transition-all duration-500 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100/50 relative overflow-hidden group/card"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                <div className="absolute -top-4 -right-4 text-blue-600/5 font-serif text-9xl leading-none select-none">“</div>
                <p className="text-slate-600 font-medium leading-relaxed relative z-10 italic mb-8">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-white shadow-lg shadow-blue-200">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="text-base font-bold text-slate-900 tracking-tight">{t.name}</h5>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FLOATING MOBILE CTAS */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50 md:hidden w-[90%]">
        <a 
          href="tel:+919876543210"
          className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-2xl text-slate-900"
        >
          <Phone size={24} />
        </a>
        <button 
          onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex-1 bg-blue-600 text-white h-16 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-blue-300 active:scale-95 transition-transform"
        >
          Start Filing Now
        </button>
      </div>

      <WhatsAppButton />

      {/* 6. DARK-MODE FOOTER */}
      <footer className="bg-slate-900 py-24 px-6 text-center text-white mb-20 md:mb-0 overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />
        <h2 className="text-4xl font-bold mb-8">Ready to secure your finances?</h2>
        <a 
          href="https://wa.me/919876543210" 
          className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-black uppercase tracking-tighter hover:bg-blue-50 transition"
        >
          WhatsApp Consultation <ArrowRight size={20} />
        </a>
        <div className="mt-20 border-t border-slate-800 pt-12 text-slate-500 font-medium tracking-widest text-xs">
          <p>© 2026 TAXFLOW CORP — Dubai, UAE</p>
        </div>
      </footer>
    </div>
  );
}

export default function LandingPage() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center bg-white font-black text-3xl italic tracking-tighter">TAXFLOW<span className="text-blue-600">.</span></div>}>
      <LandingContent />
    </Suspense>
  );
}