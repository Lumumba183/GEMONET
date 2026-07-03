import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import { Compass, Umbrella, Building, Car, Users, Briefcase, Heart, GraduationCap, ChevronDown } from 'lucide-react'

const services = [
  {
    icon: Compass,
    title: 'Safari Packages',
    description: 'We design and operate safari packages to all of Kenya\'s major national parks and reserves. From short 2-day getaways to extended 10-day expeditions, each itinerary is crafted to maximize wildlife sightings and authentic cultural experiences.',
    items: [
      'Custom itinerary planning',
      'Accommodation booking (camps & lodges)',
      'Professional driver-guides',
      '4x4 safari vehicles',
      'Park entrance fees',
      'Meals as per itinerary',
    ],
  },
  {
    icon: Umbrella,
    title: 'Beach Holidays',
    description: 'Kenya\'s coastline offers some of East Africa\'s most beautiful beaches. We arrange complete beach holiday packages along the Kenyan coast, from Diani and Watamu to Malindi and Lamu.',
    items: [
      'Resort and boutique hotel bookings',
      'Water sports and activities',
      'Island excursions',
      'Marine park visits',
      'Airport and hotel transfers',
    ],
  },
  {
    icon: Building,
    title: 'Hotel Reservations',
    description: 'Access our network of partner hotels, lodges, and camps across Kenya at competitive rates. We handle everything from budget-friendly options to ultra-luxury safari camps.',
    items: [
      'Best-rate guarantee',
      'Real-time availability',
      'Special requests handling',
      'Group bookings',
      'Long-stay discounts',
    ],
  },
  {
    icon: Car,
    title: 'Airport Transfers',
    description: 'Start and end your trip stress-free with our reliable airport transfer service. We provide pickups and drop-offs from all major airports and airstrips in Kenya.',
    items: [
      'Nairobi (JKIA & Wilson)',
      'Mombasa (Moi International)',
      'Malindi, Diani, and Samburu airstrips',
      'Professional drivers',
      'Comfortable, air-conditioned vehicles',
    ],
  },
  {
    icon: Users,
    title: 'Group Travel',
    description: 'We specialize in organizing group travel for families, friends, corporate teams, schools, and special interest groups. Enjoy preferential rates and a seamless coordinated experience.',
    items: [
      'Custom group itineraries',
      'Group discounts',
      'Dedicated group coordinator',
      'Multiple payment options',
      'Travel insurance assistance',
    ],
  },
  {
    icon: Briefcase,
    title: 'Corporate Travel',
    description: 'From team-building retreats in the wilderness to conference travel arrangements, we provide comprehensive corporate travel solutions across Kenya.',
    items: [
      'Conference venue sourcing',
      'Team-building activities',
      'Corporate retreat planning',
      'Group flight bookings',
      'Expense management support',
    ],
  },
  {
    icon: Heart,
    title: 'Honeymoon Packages',
    description: 'Create unforgettable memories with our romantic honeymoon packages. We combine the thrill of safari with the tranquility of beach relaxation for the perfect start to married life.',
    items: [
      'Private conservancies',
      'Secluded beach villas',
      'Romantic dining setups',
      'Couples spa treatments',
      'Surprise arrangements on request',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Educational Tours',
    description: 'Inspire the next generation with our educational tours. We organize school and university trips focused on wildlife conservation, marine biology, geography, and cultural studies.',
    items: [
      'Curriculum-aligned itineraries',
      'Expert naturalist guides',
      'Conservation center visits',
      'Student-friendly accommodation',
      'Safety-certified transport',
    ],
  },
]

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-[#FEF5D9]">
      {/* Hero */}
      <section className="relative w-full min-h-[45vh] overflow-hidden flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/carousel-zebras.jpg)' }}
        />
        <div className="absolute inset-0 bg-[#1B4332]/65" />
        <div className="relative z-10 px-4 sm:px-6 pt-24 pb-12">
          <h1
            className="font-display text-[#FEF5D9] leading-[0.92] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            Our Services
          </h1>
          <p className="font-body text-[#FEF5D9]/80 text-base sm:text-lg max-w-[500px] mx-auto mt-4 leading-relaxed">
            Comprehensive travel services to make your Kenyan adventure seamless from start to finish.
          </p>
        </div>
      </section>

      {/* Service Accordion */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.08}>
              <div className={`border-b ${index === 0 ? 'border-t' : ''} border-[#E5DFC8]`}>
                <button
                  className="w-full flex items-center justify-between py-5 lg:py-6 text-left cursor-pointer group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center gap-4">
                    <service.icon
                      size={32}
                      strokeWidth={1.5}
                      className="text-[#D4A843] flex-shrink-0"
                    />
                    <h3 className="font-body text-lg font-medium text-[#1B4332] group-hover:text-[#D4A843] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-[#5A7D5A] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-400 ease-in-out"
                  style={{
                    maxHeight: openIndex === index ? '500px' : '0',
                    opacity: openIndex === index ? 1 : 0,
                  }}
                >
                  <div className="pb-6 pl-12 lg:pl-14">
                    <p className="font-body text-[#7A7A6E] leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] flex-shrink-0" />
                          <span className="font-body text-sm text-[#7A7A6E]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
