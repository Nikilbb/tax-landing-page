"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "919876543210"; // Replace with real number
  const message = "Hi! I need help with my Corporate Tax Filing.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform md:bottom-6"
      onClick={() => console.log('WhatsApp Clicked')}
    >
      <MessageCircle size={30} />
    </a>
  );
}