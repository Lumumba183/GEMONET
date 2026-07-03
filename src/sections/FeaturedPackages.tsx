import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const packages = [
  {
    id: 1,
    title: 'Maasai Mara Safari',
    image: '/images/pkg-mara-lion.jpg',
    duration: '3 Days / 2 Nights',
    description: 'Witness the Big Five in Kenya\'s most famous game reserve. Includes game drives, luxury camp accommodation, and cultural visits to a Maasai village.',
    price: 'From $650/person',
  },
  {
    id: 2,
    title: 'Diani Beach Escape',
    image: '/images/pkg-diani-beach.jpg',
    duration: '4 Days / 3 Nights',
    description: 'Relax on Kenya\'s most beautiful beach. Includes oceanfront resort stay, snorkeling excursion, and a sunset dhow cruise along the coral coast.',
    price: 'From $480/person',
  },
  {
    id: 3,
    title: 'Amboseli & Kilimanjaro',
    image: '/images/pkg-amboseli-elephants.jpg',
    duration: '3 Days / 2 Nights',
    description: 'Photograph elephants against the iconic backdrop of Africa\'s highest peak. Includes game drives, birdwatching, and a visit to an authentic Maasai village.',
    price: 'From $580/person',
  },
  {
    id: 4,
    title: 'Kenya Coast Cultural Tour',
    image: '/images/pkg-coast-fort-jesus.jpg',
    duration: '5 Days / 4 Nights',
    description: 'Explore the Swahili coast\'s rich heritage. Visit Fort Jesus, Gede Ruins, marine parks, and enjoy fresh seafood in Mombasa\'s Old Town.',
    price: 'From $720/person',
  },
]

export default function FeaturedPackages() {
  return (
    <section className="w-full py-20 lg:py-32 bg-[#E8F0E8]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-10 lg:mb-14">
            <span className="font-body text-xs uppercase tracking-[0.1em] text-[#5A7D5A]">
              Our Packages
            </span>
            <h2
              className="font-display text-[#1B4332] mt-2 leading-[0.95] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Curated Safari &amp; Beach Experiences
            </h2>
          </div>
        </ScrollReveal>

        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <ScrollReveal key={pkg.id} delay={index * 0.12}>
              <div className="group bg-white rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(27,67,50,0.08)] hover:shadow-[0_8px_40px_rgba(27,67,50,0.14)] hover:-translate-y-1 transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-[rgba(27,67,50,0.7)] text-[#FEF5D9] text-xs font-body rounded-md backdrop-blur-sm">
                      {pkg.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-body text-lg font-medium text-[#1B4332]">
                    {pkg.title}
                  </h3>
                  <p className="font-body text-sm text-[#7A7A6E] mt-2 line-clamp-3 leading-relaxed">
                    {pkg.description}
                  </p>
                  <p className="font-body text-base font-medium text-[#D4A843] mt-3">
                    {pkg.price}
                  </p>
                  <Link
                    to="/packages"
                    className="inline-flex items-center gap-1 font-body text-xs uppercase tracking-wider text-[#1B4332] hover:text-[#D4A843] transition-colors mt-3"
                  >
                    View Details <span className="text-sm">&rarr;</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
