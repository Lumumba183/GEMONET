import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react'

const productOptions = [
  'Maasai Mara Safari',
  'Diani Beach Escape',
  'Amboseli & Kilimanjaro',
  'Kenya Coast Cultural Tour',
  'Kenya Grand Tour (10 Days)',
  'Honeymoon Safari & Beach',
  'Family Adventure Safari',
  'Hotel Booking Only',
  'Airport Transfer',
  'Custom Itinerary',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    teamSize: '',
    departureDate: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as any).toString(),
    })
      .then(() => {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          product: '',
          teamSize: '',
          departureDate: '',
          message: '',
        })
      })
      .catch((error) => {
        console.error('Form submission error:', error)
        alert('Something went wrong. Please try again or contact us via WhatsApp.')
      })
  }

  const openWhatsApp = () => {
    const message = `Hello Gemonet Tours and Safaris!%0A%0AI found you through your Contact Page and I'm interested in learning more about your travel packages.%0A%0AMy Name: ${formData.name || '[Please fill in]'}%0AEmail: ${formData.email || '[Please fill in]'}%0APhone: ${formData.phone || '[Please fill in]'}%0AProduct of Interest: ${formData.product || '[Not selected]'}%0ATeam Size: ${formData.teamSize || '[Not specified]'}%0ADeparture Date: ${formData.departureDate || '[Not specified]'}%0AMessage: ${formData.message || '[No message]'}`
    window.open(`https://wa.me/254716876073?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#FEF5D9]">
      {/* Hero */}
      <section className="relative w-full min-h-[40vh] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/contact-hero.jpg)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(27,67,50,0.8) 0%, rgba(27,67,50,0.3) 60%, rgba(27,67,50,0.1) 100%)',
          }}
        />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-10 lg:pb-14 pt-32">
          <div className="max-w-[1200px] mx-auto">
            <h1
              className="font-display text-[#FEF5D9] leading-[0.92] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
            >
              Get in Touch
            </h1>
            <p className="font-body text-[#FEF5D9]/80 text-base sm:text-lg max-w-[500px] mt-3 leading-relaxed">
              Ready to start planning? Our team is here to help craft your perfect Kenyan adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form - Left */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2
                  className="font-display text-[#1B4332] leading-[0.95] tracking-[-0.01em]"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                >
                  Send Us a Message
                </h2>
              </ScrollReveal>

              {submitted ? (
                <ScrollReveal>
                  <div className="mt-8 p-6 bg-[#E8F0E8] rounded-xl text-center">
                    <h3 className="font-body text-lg font-medium text-[#1B4332]">Thank you!</h3>
                    <p className="font-body text-[#7A7A6E] mt-2">We&apos;ve received your message and will be in touch shortly.</p>
                    <button onClick={() => setSubmitted(false)} className="btn-primary !mt-4">Send Another Message</button>
                  </div>
                </ScrollReveal>
              ) : (
                <ScrollReveal delay={0.1}>
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p style={{ display: 'none' }}>
                      <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-sm text-[#1B4332] mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-3.5 rounded-lg border border-[#E5DFC8] bg-white font-body text-sm text-[#1B4332] placeholder:text-[#7A7A6E]/50 focus:border-[#D4A843] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-sm text-[#1B4332] mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Your email address"
                          className="w-full px-4 py-3.5 rounded-lg border border-[#E5DFC8] bg-white font-body text-sm text-[#1B4332] placeholder:text-[#7A7A6E]/50 focus:border-[#D4A843] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-sm text-[#1B4332] mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="Your phone number"
                          className="w-full px-4 py-3.5 rounded-lg border border-[#E5DFC8] bg-white font-body text-sm text-[#1B4332] placeholder:text-[#7A7A6E]/50 focus:border-[#D4A843] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-sm text-[#1B4332] mb-1.5">Select Product *</label>
                        <select
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-lg border border-[#E5DFC8] bg-white font-body text-sm text-[#1B4332] focus:border-[#D4A843] focus:outline-none transition-colors appearance-none"
                        >
                          <option value="">Select a product...</option>
                          {productOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-sm text-[#1B4332] mb-1.5">Number of Travelers</label>
                        <input
                          type="number"
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleChange}
                          min="1"
                          placeholder="How many people?"
                          className="w-full px-4 py-3.5 rounded-lg border border-[#E5DFC8] bg-white font-body text-sm text-[#1B4332] placeholder:text-[#7A7A6E]/50 focus:border-[#D4A843] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-sm text-[#1B4332] mb-1.5">Preferred Departure Date</label>
                        <input
                          type="date"
                          name="departureDate"
                          value={formData.departureDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-lg border border-[#E5DFC8] bg-white font-body text-sm text-[#1B4332] focus:border-[#D4A843] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-body text-sm text-[#1B4332] mb-1.5">Additional Comments</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your dream trip, any special requirements, or questions..."
                        className="w-full px-4 py-3.5 rounded-lg border border-[#E5DFC8] bg-white font-body text-sm text-[#1B4332] placeholder:text-[#7A7A6E]/50 focus:border-[#D4A843] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary !w-full sm:!w-auto"
                    >
                      Send Message
                    </button>
                  </form>
                </ScrollReveal>
              )}

              {/* WhatsApp CTA */}
              <ScrollReveal delay={0.2}>
                <div className="mt-8 p-5 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl flex flex-col sm:flex-row items-center gap-4">
                  <MessageCircle size={32} className="text-[#25D366] flex-shrink-0" />
                  <div className="flex-1 text-center sm:text-left">
                    <p className="font-body text-sm font-medium text-[#1B4332]">Prefer WhatsApp?</p>
                    <p className="font-body text-xs text-[#7A7A6E]">Chat with us directly for instant responses.</p>
                  </div>
                  <button
                    onClick={openWhatsApp}
                    className="px-5 py-2.5 bg-[#25D366] text-white font-body text-sm font-medium rounded-full hover:bg-[#128C7E] transition-colors flex-shrink-0"
                  >
                    Chat on WhatsApp
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info - Right */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2
                  className="font-display text-[#1B4332] leading-[0.95] tracking-[-0.01em]"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                >
                  Contact Information
                </h2>
              </ScrollReveal>

              <div className="mt-6 space-y-4">
                <ScrollReveal delay={0.1}>
                  <div className="bg-white rounded-xl p-5 shadow-[0_4px_24px_rgba(27,67,50,0.08)]">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E8F0E8] flex items-center justify-center flex-shrink-0">
                        <Phone size={18} className="text-[#D4A843]" />
                      </div>
                      <div>
                        <p className="font-body text-xs uppercase tracking-wider text-[#5A7D5A]">Phone / WhatsApp</p>
                        <p className="font-body text-base font-medium text-[#1B4332] mt-0.5">+254 716 876 073</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                  <div className="bg-white rounded-xl p-5 shadow-[0_4px_24px_rgba(27,67,50,0.08)]">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E8F0E8] flex items-center justify-center flex-shrink-0">
                        <Mail size={18} className="text-[#D4A843]" />
                      </div>
                      <div>
                        <p className="font-body text-xs uppercase tracking-wider text-[#5A7D5A]">Email</p>
                        <p className="font-body text-base font-medium text-[#1B4332] mt-0.5">gemonet83@yahoo.com</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="bg-white rounded-xl p-5 shadow-[0_4px_24px_rgba(27,67,50,0.08)]">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E8F0E8] flex items-center justify-center flex-shrink-0">
                        <MapPin size={18} className="text-[#D4A843]" />
                      </div>
                      <div>
                        <p className="font-body text-xs uppercase tracking-wider text-[#5A7D5A]">Office Location</p>
                        <p className="font-body text-base font-medium text-[#1B4332] mt-0.5">Mtwapa, Kilifi County, Kenya</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
                  <div className="bg-white rounded-xl p-5 shadow-[0_4px_24px_rgba(27,67,50,0.08)]">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E8F0E8] flex items-center justify-center flex-shrink-0">
                        <Clock size={18} className="text-[#D4A843]" />
                      </div>
                      <div>
                        <p className="font-body text-xs uppercase tracking-wider text-[#5A7D5A]">Business Hours</p>
                        <p className="font-body text-base font-medium text-[#1B4332] mt-0.5">Mon – Sat: 8:00 AM – 6:00 PM EAT</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Social */}
              <ScrollReveal delay={0.3}>
                <div className="mt-8">
                  <h3 className="font-body text-base font-medium text-[#1B4332]">Follow Us</h3>
                  <div className="flex items-center gap-3 mt-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-[#E8F0E8] flex items-center justify-center text-[#1B4332] hover:bg-[#D4A843] hover:text-white transition-all" aria-label="Facebook">
                      <Facebook size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#E8F0E8] flex items-center justify-center text-[#1B4332] hover:bg-[#D4A843] hover:text-white transition-all" aria-label="Instagram">
                      <Instagram size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-[#E8F0E8] flex items-center justify-center text-[#1B4332] hover:bg-[#D4A843] hover:text-white transition-all" aria-label="Twitter">
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
