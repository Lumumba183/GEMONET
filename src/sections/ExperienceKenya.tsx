import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

export default function ExperienceKenya() {
  return (
    <section className="w-full py-20 lg:py-32 bg-[#FEF5D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Video/Image Left */}
          <ScrollReveal>
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] lg:aspect-[4/5]">
              <img
                src="/images/pkg-amboseli-elephants.jpg"
                alt="Safari experience in Kenya"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/30 to-transparent" />
            </div>
          </ScrollReveal>

          {/* Text Right */}
          <div className="flex flex-col justify-center">
            <ScrollReveal delay={0.1}>
              <span className="font-body text-xs uppercase tracking-[0.1em] text-[#5A7D5A]">
                Why Choose Gemonet
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2
                className="font-display text-[#1B4332] mt-3 leading-[0.95] tracking-[-0.01em]"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
              >
                Experience Kenya Like Never Before
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="font-body text-[#7A7A6E] leading-relaxed mt-6">
                At Gemonet Tours and Safaris, we don&apos;t just plan trips — we craft journeys that immerse you in the heart of Kenya. From witnessing the Great Migration in Maasai Mara to relaxing on the white sands of Diani Beach, every itinerary is designed with passion, local expertise, and attention to every detail.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="font-body text-[#7A7A6E] leading-relaxed mt-4">
                Founded with a love for Kenya&apos;s diverse landscapes and rich cultures, our team of experienced travel consultants ensures your safari or beach holiday is seamless, safe, and truly unforgettable.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <Link to="/contact" className="btn-primary !mt-8 self-start">
                Plan Your Trip
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
