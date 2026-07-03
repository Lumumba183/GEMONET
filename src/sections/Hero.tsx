import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })

      tl.from('.hero-pill', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      })
      .from('.hero-line', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        stagger: 0.12,
        ease: 'power3.out',
      }, '-=0.3')
      .from('.hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.6')
      .from('.hero-cta', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      }, '-=0.3')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] overflow-hidden flex items-end"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-safari.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to top, rgba(27,67,50,0.85) 0%, rgba(27,67,50,0.4) 40%, rgba(27,67,50,0.1) 100%)',
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-[2] w-full px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24 pt-32"
      >
        <div className="max-w-[800px]">
          {/* Category Pill */}
          <div className="hero-pill inline-block mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-[#FEF5D9]/20 text-[#FEF5D9]/80 font-body text-xs uppercase tracking-[0.08em]">
              Kenya&apos;s Finest Tours &amp; Travel
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-[#FEF5D9] leading-[0.92] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          >
            <span className="hero-line block overflow-hidden">
              <span className="inline-block">Unforgettable</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="inline-block">Safari</span>
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="inline-block">Adventures</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-[#FEF5D9]/80 font-body text-base sm:text-lg leading-relaxed max-w-[520px] mb-8">
            Experience Kenya&apos;s most iconic destinations — from the Maasai Mara to Diani Beach — with personalized service and authentic cultural encounters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to="/packages" className="hero-cta btn-primary">
              Explore Packages
            </Link>
            <Link to="/contact" className="hero-cta btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2">
        <div className="w-[1px] h-10 bg-[#FEF5D9]/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-3 bg-[#FEF5D9]/60 scroll-indicator-dot" />
        </div>
      </div>
    </section>
  )
}
