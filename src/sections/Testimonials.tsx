import ScrollReveal from '../components/ScrollReveal'

export default function Testimonials() {
  return (
    <section className="w-full py-20 lg:py-32 bg-[#FEF5D9]">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Quote Mark */}
        <ScrollReveal>
          <span
            className="font-display text-[#D4A843]/30 leading-none block"
            style={{ fontSize: '120px' }}
          >
            &ldquo;
          </span>
        </ScrollReveal>

        {/* Quote */}
        <ScrollReveal delay={0.2}>
          <blockquote
            className="font-display italic text-[#1B4332] leading-[1.25] tracking-[-0.01em] -mt-8"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}
          >
            Gemonet planned our family safari to Maasai Mara and it exceeded every expectation. The guides were knowledgeable, the accommodation was stunning, and seeing the Big Five in their natural habitat was a life-changing experience for our children.
          </blockquote>
        </ScrollReveal>

        {/* Customer */}
        <ScrollReveal delay={0.4}>
          <div className="mt-8 flex flex-col items-center">
            <img
              src="/images/testimonial-sarah.jpg"
              alt="Sarah Mitchell"
              className="w-16 h-16 rounded-full object-cover border-2 border-[#D4A843]"
            />
            <p className="font-body text-base font-medium text-[#1B4332] mt-3">
              Sarah Mitchell
            </p>
            <p className="font-body text-xs uppercase tracking-wider text-[#5A7D5A] mt-1">
              Family Traveler, United Kingdom
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
