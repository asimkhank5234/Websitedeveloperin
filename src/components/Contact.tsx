import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageSquare } from 'lucide-react';
import { ContactFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) {
      alert('Please fill out the required fields!');
      return;
    }

    // Direct user alert about redirecting
    alert(
      `Thank you for reaching out, ${formData.name}! We are now opening WhatsApp to send your inquiry about "${formData.service}" directly to Asim Saleem. Please click "Send" in the WhatsApp chat window!`
    );

    // Format WhatsApp pre-filled text
    const messageTemplate = `Hello Asim,

My Name: ${formData.name}
My Phone: ${formData.phone}
Email Address: ${formData.email || 'Not Provided'}
Service Needed: ${formData.service}

Inquiry Details:
${formData.message}`;

    const encodedText = encodeURIComponent(messageTemplate);
    const whatsappUrl = `https://wa.me/923455161393?text=${encodedText}`;

    // Redirect
    window.open(whatsappUrl, '_blank');

    // Reset Form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#070b16] relative scroll-reveal">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Info Column (Left) */}
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="text-sm font-semibold tracking-widest text-brand-teal uppercase bg-brand-teal/10 px-4 py-1.5 rounded-full">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white-text">
              Let's Build Something <span className="text-brand-orange">Incredible</span> Together
            </h2>
            <p className="text-muted-text max-w-lg leading-relaxed">
              Have questions, need an elegant landing page, or want to start a targeted SEO/Google Ads consultation? Connect with me directly and get standard assistance round-the-clock.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            {/* Map location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0 mt-1">
                <MapPin className="w-5 h-5 animate-bounce" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-white-text text-lg">Office Station</h4>
                <p className="text-sm text-muted-text leading-relaxed">
                  Sheen Bagh, Markba Hall, near Home Care Furniture Factory, Attock 43600, Pakistan
                </p>
              </div>
            </div>

            {/* Click-to-call phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0 mt-1">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-white-text text-lg">Direct Hot Call</h4>
                <p className="text-sm font-semibold">
                  <a
                    href="tel:03455161393"
                    className="text-brand-orange hover:underline hover:text-orange-400 transition-colors text-base"
                    aria-label="Call Asim Saleem directly at 0345 5161393"
                  >
                    0345 5161393
                  </a>
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0 mt-1">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-white-text text-lg">Operating Capacity</h4>
                <p className="text-sm text-muted-text">Open 24 Hours · 7 Days a week</p>
              </div>
            </div>
          </div>

          {/* Large WhatsApp CTA Button with exact color code */}
          <div>
            <a
              href="https://wa.me/923455161393"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25d366] hover:bg-[#20ba5a] text-white-text font-bold py-4.5 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-green-600/10 hover:scale-[1.02]"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Custom social media links row with teal hover */}
          <div className="space-y-3 pt-4">
            <h4 className="font-serif font-bold text-white-text text-xs tracking-widest uppercase">Social Channels</h4>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://x.com/asimkhank520"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 border border-white/5 hover:border-brand-teal hover:text-brand-teal py-2 px-4 rounded-full text-xs font-semibold text-muted-text transition-all"
              >
                🐦 X (Twitter)
              </a>
              <a
                href="https://www.facebook.com/WebmatrixSolution1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 border border-white/5 hover:border-brand-teal hover:text-brand-teal py-2 px-4 rounded-full text-xs font-semibold text-muted-text transition-all"
              >
                📘 Facebook
              </a>
              <a
                href="https://www.instagram.com/asimkhank5234/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 border border-white/5 hover:border-brand-teal hover:text-brand-teal py-2 px-4 rounded-full text-xs font-semibold text-muted-text transition-all"
              >
                📸 Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/asim-saleem-1a55062a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 border border-white/5 hover:border-brand-teal hover:text-brand-teal py-2 px-4 rounded-full text-xs font-semibold text-muted-text transition-all"
              >
                💼 LinkedIn
              </a>
              <a
                href="https://www.pinterest.com/asimkhank520/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 border border-white/5 hover:border-brand-teal hover:text-brand-teal py-2 px-4 rounded-full text-xs font-semibold text-muted-text transition-all"
              >
                📌 Pinterest
              </a>
            </div>
          </div>
        </div>

        {/* Form Column (Right) */}
        <div className="bg-card-bg p-8 sm:p-10 rounded-3xl border border-white/5 shadow-2xl relative">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase font-bold tracking-wider text-muted-text">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Saleem Khan"
                  className="w-full bg-brand-dark-bg/60 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white-text focus:outline-none focus:border-brand-orange/60 focus:ring-1 focus:ring-brand-orange/40 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs uppercase font-bold tracking-wider text-muted-text">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 0300 1234567"
                  className="w-full bg-brand-dark-bg/60 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white-text focus:outline-none focus:border-brand-orange/60 focus:ring-1 focus:ring-brand-orange/40 transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase font-bold tracking-wider text-muted-text">Email Address</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="e.g., saleem@example.com"
                className="w-full bg-brand-dark-bg/60 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white-text focus:outline-none focus:border-brand-orange/60 focus:ring-1 focus:ring-brand-orange/40 transition-all font-medium"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-xs uppercase font-bold tracking-wider text-muted-text">Inquired Service</label>
              <select
                id="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full bg-brand-dark-bg/60 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white-text focus:outline-none focus:border-brand-orange/60 focus:ring-1 focus:ring-brand-orange/40 transition-all font-medium appearance-none cursor-pointer"
              >
                <option value="" disabled>Choose a service...</option>
                <option value="Website Design & Development">🌐 Website Design & Development</option>
                <option value="SEO Services">📈 SEO Services</option>
                <option value="Google Ads Campaign">🎯 Google Ads</option>
                <option value="Google Business Profile Optimization">📍 Google Business Profile</option>
                <option value="Social Media Marketing">📣 Social Media Marketing</option>
                <option value="E-Commerce Store Building">🛒 E-Commerce Building</option>
                <option value="E-Commerce SEO">🔍 E-Commerce SEO</option>
                <option value="Full Digital Marketing Management">📧 Full Digital Marketing Strategy</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase font-bold tracking-wider text-muted-text">Project Scope Detail</label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Describe your goals, current website (if any), and budget..."
                className="w-full bg-brand-dark-bg/60 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white-text focus:outline-none focus:border-brand-orange/60 focus:ring-1 focus:ring-brand-orange/40 transition-all resize-none font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white-text font-bold py-4 rounded-xl tracking-wide transition-all duration-300 shadow-md shadow-brand-orange/15 hover:shadow-brand-orange/25 active:scale-98"
            >
              Submit & Consult on WhatsApp
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
