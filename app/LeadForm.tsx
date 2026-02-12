"use client";

import React, { useState } from 'react';
import { useTracker } from '../hooks/useTracker';

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { trackEvent } = useTracker();

  // Industry-standard country digit lengths for validation
  const countryCodes = [
    { code: '+91', label: 'India 🇮🇳', length: 10 },
    { code: '+971', label: 'UAE 🇦🇪', length: 9 },
    { code: '+1', label: 'USA 🇺🇸', length: 10 },
  ];

  const validate = (data: any) => {
    let newErrors: { [key: string]: string } = {};

    // 1. EMAIL: Must follow name@domain.com format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      newErrors.email = "Invalid email format (e.g., nikil@gmail.com).";
    }

    // 2. PHONE: Must match the digit length of selected country
    const selectedCountry = countryCodes.find(c => c.code === data.countryCode);
    const cleanPhone = data.phone.replace(/\D/g, ''); 
    if (cleanPhone.length !== selectedCountry?.length) {
      newErrors.phone = `Must be ${selectedCountry?.length} digits for ${selectedCountry?.code}.`;
    }

    // 3. COMPANY: Must not be empty
    if (data.company.trim().length < 2) {
      newErrors.company = "Please enter your company name.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      countryCode: formData.get('countryCode') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
    };

    if (!validate(payload)) return;

    setStatus('submitting');

    // Fire Task 2 event with all verified data
    trackEvent('lead_submit', { 
      form_location: 'hero_section', 
      ...payload 
    });

    console.log("🚀 Validated Lead Data Sent:", payload);

    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="text-center p-8 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 className="text-2xl font-bold text-blue-600 mb-2">Registration Success!</h4>
        <p className="text-slate-600 font-medium">Your validated details are in our system.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* FULL NAME */}
      <div>
        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] mb-1">Full Name</label>
        <input required name="name" type="text" placeholder="Dan Joe" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600" />
      </div>

      {/* WORK EMAIL */}
      <div>
        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] mb-1">Work Email</label>
        <input required name="email" type="email" placeholder="Danjoe@gmail.com" className={`w-full p-4 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-600 ${errors.email ? 'border-red-500' : 'border-slate-200'}`} />
        {errors.email && <p className="text-red-500 text-[10px] mt-1 font-bold italic">{errors.email}</p>}
      </div>

      {/* PHONE WITH COUNTRY CODE */}
      <div>
        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] mb-1">Mobile Number</label>
        <div className="flex gap-2">
          <select name="countryCode" className="p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none text-xs font-bold">
            {countryCodes.map(c => <option key={c.code} value={c.code}>{c.label} {c.code}</option>)}
          </select>
          <input required name="phone" type="tel" className={`flex-1 p-4 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-600 ${errors.phone ? 'border-red-500' : 'border-slate-200'}`} />
        </div>
        {errors.phone && <p className="text-red-500 text-[10px] mt-1 font-bold italic">{errors.phone}</p>}
      </div>

      {/* COMPANY NAME */}
      <div>
        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.1em] mb-1">Company Name</label>
        <input required name="company" type="text" placeholder="Acme Corp" className={`w-full p-4 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-600 ${errors.company ? 'border-red-500' : 'border-slate-200'}`} />
        {errors.company && <p className="text-red-500 text-[10px] mt-1 font-bold italic">{errors.company}</p>}
      </div>

      <button type="submit" disabled={status === 'submitting'} className="w-full bg-blue-600 text-white font-black py-4 rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50 shadow-lg shadow-blue-100 uppercase text-xs tracking-widest">
        {status === 'submitting' ? 'Verifying...' : 'Secure My Consultation'}
      </button>
    </form>
  );
}