import React, { useState } from 'react';
import { MapPin, Phone, Clock, MessageSquare, Mail, Send, CheckCircle, X } from 'lucide-react';
import { ContactFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

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
      return;
    }
    // Launch the custom interactive modal instead of window.alert
    setIsSuccessOpen(true);
  };

  const handleSendViaGmail = () => {
    const subject = `Portfolio Inquiry: ${formData.service} from ${formData.name}`;
    const emailBody = `Hello Asim Saleem,

I filled out your website contact form. Here is my project information:

• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || 'Not provided'}
• Service Needed: ${formData.service}

Inquiry Scope details:
${formData.message}

Let's get connected!`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(emailBody);

    // Dynamic browser compose URL for Gmail
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=asimkkkk1111@gmail.com&su=${encodedSubject}&body=${encodedBody}`;
    window.open(gmailUrl, '_blank');
  };

  const handleSendViaMailTo = () => {
    const subject = `Portfolio Inquiry: ${formData.service} from ${formData.name}`;
    const emailBody = `Hello Asim Saleem,

I filled out your website contact form. Here is my project information:

• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || 'Not provided'}
• Service Needed: ${formData.service}

Inquiry Scope details:
${formData.message}

Let's get connected!`;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(emailBody);

    const mailtoUrl = `mailto:asimkkkk1111@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = mailtoUrl;
  };

  const handleSendViaWhatsApp = () => {
    const messageTemplate = `Hello Asim Saleem,

My Name: ${formData.name}
My Phone: ${formData.phone}
Email: ${formData.email || 'Not Provided'}
Inquiry Service: ${formData.service}

Details: ${formData.message}`;

    const encodedText = encodeURIComponent(messageTemplate);
    const whatsappUrl = `https://wa.me/923455161393?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const resetFormAndModal = () => {
    setIsSuccessOpen(false);
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
            <span className="text-sm font-semibold tracking-widest text-[#2fbab3] uppercase bg-[#2fbab3]/10 px-4 py-1.5 rounded-full">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white-text">
              Let's Build Something <span className="text-brand-orange">Incredible</span> Together
            </h2>
            <p className="text-muted-text max-w-lg leading-relaxed">
              Have questions, need an elegant landing page, or want to start a targeted SEO/Google Ads consultation? Connect with me directly over email or phone!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            {/* Map location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#2fbab3]/10 flex items-center justify-center text-[#2fbab3] shrink-0 mt-1">
                <MapPin className="w-5 h-5 animate-bounce" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-white-text text-lg">Office Station</h4>
                <p className="text-sm text-muted-text leading-relaxed">
                  Sheen Bagh, Markba Hall, near Home Care Furniture Factory, Attock 43600, Pakistan
                </p>
              </div>
            </div>

            {/* Email card */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#2fbab3]/10 flex items-center justify-center text-[#2fbab3] shrink-0 mt-1">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-white-text text-lg">Direct Gmail</h4>
                <p className="text-sm font-semibold">
                  <a
                    href="mailto:asimkkkk1111@gmail.com"
                    className="text-brand-orange hover:underline hover:text-orange-400 transition-colors text-base"
                    aria-label="Email Asim Saleem directly"
                  >
                    asimkkkk1111@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Click-to-call phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#2fbab3]/10 flex items-center justify-center text-[#2fbab3] shrink-0 mt-1">
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
              <div className="w-12 h-12 rounded-xl bg-[#2fbab3]/10 flex items-center justify-center text-[#2fbab3] shrink-0 mt-1">
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
                className="bg-slate-900 border border-white/5 hover:border-[#2fbab3] hover:text-[#2fbab3] py-2 px-4 rounded-full text-xs font-semibold text-muted-text transition-all"
              >
                📘 Facebook
              </a>
              <a
                href="https://www.instagram.com/asimkhank5234/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 border border-white/5 hover:border-[#2fbab3] hover:text-[#2fbab3] py-2 px-4 rounded-full text-xs font-semibold text-muted-text transition-all"
              >
                📸 Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/asim-saleem-1a55062a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 border border-white/5 hover:border-[#2fbab3] hover:text-[#2fbab3] py-2 px-4 rounded-full text-xs font-semibold text-muted-text transition-all"
              >
                💼 LinkedIn
              </a>
              <a
                href="https://www.pinterest.com/asimkhank520/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 border border-white/5 hover:border-[#2fbab3] hover:text-[#2fbab3] py-2 px-4 rounded-full text-xs font-semibold text-muted-text transition-all"
              >
                📌 Pinterest
              </a>
            </div>
          </div>
        </div>

        {/* Form Column (Right) */}
        <div className="bg-card-bg p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
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
              className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white-text font-bold py-4 rounded-xl tracking-wide transition-all duration-300 shadow-md shadow-brand-orange/15 hover:shadow-brand-orange/25 active:scale-98 cursor-pointer"
            >
              Submit Project Inquiry
            </button>
          </form>
        </div>

      </div>

      {/* CUSTOM SUCCESS ROUTING DIALOG MODAL */}
      {isSuccessOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark-bg/85 backdrop-blur-md">
          <div className="w-full max-w-lg bg-card-bg border border-[#2fbab3]/20 p-8 rounded-3xl shadow-2xl relative animate-float">
            {/* Close Cross icon */}
            <button 
              onClick={resetFormAndModal}
              className="absolute top-4 right-4 text-muted-text hover:text-white-text p-1 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Headline and Check Indicator */}
            <div className="flex flex-col items-center text-center space-y-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#2fbab3]/15 text-[#2fbab3] flex items-center justify-center shadow-lg">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white-text">
                Form Ready to Send!
              </h3>
              <p className="text-sm text-muted-text">
                Choose your preferred delivery channel below to securely dispatch your detailed inquiry directly to <span className="text-white-text font-semibold">Asim Saleem</span>:
              </p>
            </div>

            {/* Project Specs review panel */}
            <div className="bg-[#0a0f1e]/80 border border-white/5 p-4 rounded-xl mb-6 space-y-2 text-xs text-muted-text">
              <p><strong className="text-white-text">Name:</strong> {formData.name}</p>
              <p><strong className="text-white-text">Service:</strong> {formData.service}</p>
              <p className="truncate"><strong className="text-white-text">Details:</strong> {formData.message}</p>
            </div>

            {/* Choice CTA Buttons Row */}
            <div className="space-y-3">
              {/* Send with Gmail (Brower compose) */}
              <button
                onClick={handleSendViaGmail}
                className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white-text font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2.5 transition-all outline-none cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>🌐 Open in Web Gmail</span>
              </button>

              {/* Send with Native mailto client */}
              <button
                onClick={handleSendViaMailTo}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white-text font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2.5 transition-all outline-none border border-white/5 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#2fbab3]" />
                <span>✉️ Send via Native Email Client</span>
              </button>

              {/* Send via WhatsApp backup */}
              <button
                onClick={handleSendViaWhatsApp}
                className="w-full bg-[#25d366]/10 hover:bg-[#25d366]/20 text-[#25d366] font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2.5 transition-all outline-none border border-[#25d366]/20 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>💬 Deliver via WhatsApp Chat</span>
              </button>
            </div>

            {/* Confirm & Close */}
            <div className="text-center mt-6">
              <button 
                onClick={resetFormAndModal}
                className="text-muted-text hover:text-white-text text-xs uppercase font-bold tracking-widest outline-none underline cursor-pointer"
              >
                Close & Clear Form
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
