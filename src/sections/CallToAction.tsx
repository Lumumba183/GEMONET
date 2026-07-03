import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

export default function CallToAction() {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/carousel-migration.jpg)' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1B4332]/65" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-[700px]">
        <ScrollReveal>
          <h2
            className="font-display text-[#FEF5D9] leading-[0.92] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Ready for Your Adventure?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-body text-[#FEF5D9]/80 text-base sm:text-lg leading-relaxed mt-6">
            Let Gemonet craft your perfect Kenyan safari or beach getaway. Get in touch and start planning today.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <Link
            to="/contact"
            className="btn-primary !mt-8 !px-10 !py-4"
            style={{ boxShadow: '0 2px 12px rgba(212, 168, 67, 0.3)' }}
          >
            Start Planning
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
