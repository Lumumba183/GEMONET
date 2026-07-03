import { Globe, Hotel, Plane, Users, Heart, GraduationCap } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const services = [
  {
    icon: Globe,
    title: 'Tour Packages',
    description: 'Customized safari and beach holiday packages tailored to your budget, group size, and travel preferences.',
  },
  {
    icon: Hotel,
    title: 'Hotel Bookings',
    description: 'From luxury lodges inside national parks to boutique beachfront hotels — we secure the best rates for your stay.',
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Seamless pickups and drop-offs from Jomo Kenyatta International, Moi International, and airstrips across Kenya.',
  },
  {
    icon: Users,
    title: 'Group Travel',
    description: 'Expertly coordinated group tours for families, corporate teams, schools, and special interest groups.',
  },
  {
    icon: Heart,
    title: 'Honeymoon Packages',
    description: 'Romantic getaways combining safari adventure with beach relaxation — the perfect start to your new chapter.',
  },
  {
    icon: GraduationCap,
    title: 'Educational Tours',
    description: 'Enriching student trips focused on wildlife conservation, marine biology, and Kenya\'s cultural heritage.',
  },
]

export default function ServicesShowcase() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#1B4332] overflow-hidden">
      {/* Background Image with low opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: 'url(/images/carousel-migration.jpg)' }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <span className="font-body text-xs uppercase tracking-[0.1em] text-[#5A7D5A]">
            What We Offer
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            className="font-display text-[#FEF5D9] mt-3 leading-[0.95] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
          >
            Your Trusted Travel Partner
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-body text-[#FEF5D9]/70 leading-relaxed mt-4 max-w-[600px]">
            From safari planning to beach holidays, corporate retreats to airport transfers — we handle every detail of your Kenyan adventure.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={0.1 * index}>
              <div className="group">
                <service.icon
                  size={48}
                  strokeWidth={1.5}
                  className="text-[#D4A843]"
                />
                <h3 className="font-body text-lg font-medium text-[#FEF5D9] mt-4">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-[#FEF5D9]/60 mt-2 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
