"use client";

import React, { useState } from 'react';
import { useUTM } from '../hooks/useUTM';

export default function LeadForm() {
  const utms = useUTM(); // Grab the tracking data
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      ...utms, // Automatically attach UTMs to the lead!
      timestamp: new Date().toISOString(),
    };

    // LOGIC: This is where we will eventually connect to n8n/Make
    console.log("Lead Captured:", data);

    // Simulate a network delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-xl border border-green-200">
        <h3 className="text-2xl font-bold text-green-800">Thank You!</h3>
        <p className="text-green-700 mt-2">Our tax expert will call you in less than 5 minutes.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700">Full Name</label>
        <input name="name" type="text" required className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Work Email</label>
        <input name="email" type="email" required className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@company.com" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Phone Number</label>
        <input name="phone" type="tel" required className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+91 ..." />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Company Name</label>
        <input name="company" type="text" required className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Acme Corp" />
      </div>
      
      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-lg disabled:bg-slate-400"
      >
        {loading ? "Sending..." : "Get Started Now"}
      </button>
    </form>
  );
}