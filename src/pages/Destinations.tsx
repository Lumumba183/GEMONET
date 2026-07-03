import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const destinations = [
  {
    id: 1,
    name: 'Maasai Mara',
    image: '/images/dest-mara-leopard.jpg',
    description: "Kenya's most iconic safari destination, home to the Big Five and the annual Great Migration of over two million wildebeest.",
    tags: ['Big Five', 'Great Migration', 'Hot Air Balloon'],
  },
  {
    id: 2,
    name: 'Amboseli National Park',
    image: '/images/dest-amboseli-herd.jpg',
    description: "Photograph elephants against the iconic backdrop of Africa's highest peak. Includes game drives, birdwatching, and Maasai village visits.",
    tags: ['Elephants', 'Kilimanjaro Views', 'Birdwatching'],
  },
  {
    id: 3,
    name: 'Diani Beach',
    image: '/images/dest-diani-aerial.jpg',
    description: "Kenya's most beautiful beach with pristine white sand, turquoise waters, and world-class resorts along the coral coast.",
    tags: ['White Sand', 'Snorkeling', 'Dhow Cruises'],
  },
  {
    id: 4,
    name: 'Tsavo East & West',
    image: '/images/dest-tsavo-elephants.jpg',
    description: "Kenya's largest national park, famous for red-dust elephants, dramatic volcanic landscapes, and the crystal-clear Mzima Springs.",
    tags: ['Red Elephants', 'Volcanic Landscapes', 'Mzima Springs'],
  },
  {
    id: 5,
    name: 'Lake Nakuru',
    image: '/images/dest-nakuru-flamingos.jpg',
    description: "A soda lake famous for its millions of pink flamingos, rhino sanctuary, and stunning Rift Valley escarpment views.",
    tags: ['Flamingos', 'Rhinos', 'Rift Valley Views'],
  },
  {
    id: 6,
    name: 'Samburu National Reserve',
    image: '/images/dest-samburu-giraffe.jpg',
    description: "A rugged, arid wilderness in northern Kenya home to rare species like the reticulated giraffe, Grevy's zebra, and Somali ostrich.",
    tags: ['Rare Species', 'Northern Kenya', 'Ewaso Ng\'iro River'],
  },
]

export default function Destinations() {
  return (
    <div className="min-h-screen bg-[#FEF5D9]">
      {/* Hero */}
      <section className="relative w-full min-h-[50vh] overflow-hidden flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/dest-mara-leopard.jpg)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(27,67,50,0.85) 0%, rgba(27,67,50,0.4) 60%, rgba(27,67,50,0.2) 100%)',
          }}
        />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16 pt-32">
          <div className="max-w-[1200px] mx-auto">
            <span className="font-body text-xs uppercase tracking-[0.1em] text-[#5A7D5A]">Explore</span>
            <h1
              className="font-display text-[#FEF5D9] mt-2 leading-[0.92] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
            >
              Kenya&apos;s Finest Destinations
            </h1>
            <p className="font-body text-[#FEF5D9]/80 text-base sm:text-lg max-w-[600px] mt-4 leading-relaxed">
              From world-famous national parks to pristine coastal paradises, discover the destinations that make Kenya one of Africa&apos;s most beloved travel experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {destinations.map((dest, index) => (
              <ScrollReveal key={dest.id} delay={index * 0.1}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(27,67,50,0.08)] hover:shadow-[0_8px_40px_rgba(27,67,50,0.14)] hover:-translate-y-1 transition-all duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-body text-lg font-medium text-[#1B4332]">
                      {dest.name}
                    </h3>
                    <p className="font-body text-sm text-[#7A7A6E] mt-2 leading-relaxed">
                      {dest.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {dest.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-[#E8F0E8] text-[#5A7D5A] text-xs font-body rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#E8F0E8]">
        <div className="max-w-[600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2
              className="font-display text-[#1B4332] leading-[0.95] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
            >
              Can&apos;t Find Your Dream Destination?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-[#7A7A6E] leading-relaxed mt-4">
              We specialize in crafting custom itineraries across all of Kenya and East Africa. Whether it&apos;s Laikipia, Mount Kenya, the Chyulu Hills, or Lamu Island — we&apos;ll design the perfect trip for you.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Link to="/contact" className="btn-primary !mt-8 inline-flex">
              Plan a Custom Trip
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
