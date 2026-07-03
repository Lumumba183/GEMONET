import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { Check } from 'lucide-react'

const packages = [
  {
    id: 1,
    label: 'Most Popular',
    title: 'Maasai Mara Classic Safari',
    duration: '3 Days / 2 Nights',
    price: '$650',
    image: '/images/pkg-mara-lion.jpg',
    description: 'Experience Kenya\'s crown jewel on this classic safari package. Stay in a luxury tented camp, enjoy daily game drives with expert guides, and witness the incredible biodiversity of the Maasai Mara. Includes a visit to an authentic Maasai village for a cultural immersion experience.',
    inclusions: [
      'Luxury tented camp accommodation (full board)',
      '4x4 Land Cruiser game drives with pop-up roof',
      'Professional English-speaking guide',
      'Maasai village cultural visit',
      'Park entrance fees',
      'Airport transfers from Nairobi',
    ],
  },
  {
    id: 2,
    label: 'Beach Favorite',
    title: 'Coastal Paradise Escape',
    duration: '4 Days / 3 Nights',
    price: '$480',
    image: '/images/pkg-diani-beach.jpg',
    description: 'Unwind on Kenya\'s most beautiful coastline. This package combines beach relaxation with ocean adventure — snorkeling at a coral reef, a traditional dhow cruise at sunset, and plenty of time to soak up the sun on Diani\'s award-winning beach.',
    inclusions: [
      'Oceanfront resort accommodation (half board)',
      'Snorkeling excursion with equipment',
      'Sunset dhow cruise',
      'Airport transfers from Mombasa',
      'Beach activities and water sports',
    ],
  },
  {
    id: 3,
    label: "Photographer's Choice",
    title: 'Amboseli Photography Safari',
    duration: '3 Days / 2 Nights',
    price: '$580',
    image: '/images/pkg-amboseli-elephants.jpg',
    description: 'Designed for wildlife photography enthusiasts. Amboseli\'s open plains and large elephant herds, set against the dramatic backdrop of Mount Kilimanjaro, offer unmatched photographic opportunities. Includes dedicated photography vehicle with charging ports and bean bags.',
    inclusions: [
      'Lodge accommodation with Kilimanjaro views (full board)',
      'Dedicated photography vehicle',
      'Professional wildlife photography guide',
      'Daily game drives at golden hour',
      'Park entrance fees',
      'Airport transfers',
    ],
  },
  {
    id: 4,
    label: 'Ultimate Experience',
    title: 'Kenya Grand Tour',
    duration: '10 Days / 9 Nights',
    price: '$2,400',
    image: '/images/carousel-camp.jpg',
    description: 'The ultimate Kenyan adventure combining the best of safari and beach. Start with three days in Maasai Mara, then explore Amboseli\'s elephants, fly to the coast for beach relaxation in Diani, and end with a cultural tour of Mombasa\'s Old Town and Fort Jesus.',
    inclusions: [
      'All accommodation (luxury camps & beach resort, full board)',
      'All internal flights and transfers',
      'Daily game drives in Mara and Amboseli',
      'Beach activities and cultural tours',
      'All park entrance fees',
      'Professional guide throughout',
    ],
  },
  {
    id: 5,
    label: 'Romantic Getaway',
    title: 'Honeymoon Safari & Beach',
    duration: '7 Days / 6 Nights',
    price: '$1,850',
    image: '/images/carousel-dhow.jpg',
    description: 'The perfect blend of adventure and romance. Begin with an intimate safari in a private conservancy, complete with bush breakfasts and sundowners. Then retreat to a secluded beachfront villa on the Kenyan coast for spa treatments, private dining, and pure relaxation.',
    inclusions: [
      'Private conservancy safari (2 nights, all inclusive)',
      'Secluded beachfront villa (4 nights, half board)',
      'Private game drives and bush walks',
      'Couples spa treatment',
      'Private beach dinner and sunset cruise',
      'All transfers and flights',
    ],
  },
  {
    id: 6,
    label: 'Family Friendly',
    title: 'Family Adventure Safari',
    duration: '5 Days / 4 Nights',
    price: '$1,200',
    image: '/images/blog-budget.jpg',
    description: 'Created with families in mind, this safari balances thrilling wildlife encounters with child-friendly activities. Stay at a camp with a swimming pool, enjoy shorter game drives tailored to young attention spans, and include educational visits to conservation centers.',
    inclusions: [
      'Family-friendly camp with pool (full board)',
      'Child-friendly game drives',
      'Visit to an elephant orphanage',
      'Nature walks and junior ranger program',
      'Babysitting services available',
      'All park fees and transfers',
    ],
    priceNote: 'per person (children under 12: 50% off)',
  },
]

export default function Packages() {
  return (
    <div className="min-h-screen bg-[#FEF5D9]">
      {/* Hero */}
      <section className="relative w-full min-h-[45vh] overflow-hidden flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/carousel-camp.jpg)' }}
        />
        <div className="absolute inset-0 bg-[#1B4332]/65" />
        <div className="relative z-10 px-4 sm:px-6 pt-24 pb-12">
          <h1
            className="font-display text-[#FEF5D9] leading-[0.92] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            Safari &amp; Beach Packages
          </h1>
          <p className="font-body text-[#FEF5D9]/80 text-base sm:text-lg max-w-[550px] mx-auto mt-4 leading-relaxed">
            All-inclusive packages designed for every type of traveler. Choose your adventure and leave the details to us.
          </p>
        </div>
      </section>

      {/* Package Listings */}
      <section>
        {packages.map((pkg, index) => (
          <div
            key={pkg.id}
            className={`py-12 lg:py-16 ${index % 2 === 0 ? 'bg-[#FEF5D9]' : 'bg-[#E8F0E8]'}`}
          >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  {/* Image */}
                  <div className={`relative rounded-xl overflow-hidden aspect-[4/3] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className="inline-block px-3 py-1 bg-[#D4A843]/15 text-[#D4A843] text-xs font-body uppercase tracking-wider rounded-full mb-3">
                      {pkg.label}
                    </span>
                    <h2
                      className="font-display text-[#1B4332] leading-[0.95] tracking-[-0.01em]"
                      style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                    >
                      {pkg.title}
                    </h2>
                    <p className="font-body text-[#5A7D5A] text-sm mt-2">
                      {pkg.duration}
                    </p>
                    <p className="font-body text-xl font-medium text-[#D4A843] mt-3">
                      {pkg.price} <span className="text-sm font-normal text-[#7A7A6E]">{pkg.priceNote || 'per person'}</span>
                    </p>
                    <p className="font-body text-[#7A7A6E] leading-relaxed mt-4">
                      {pkg.description}
                    </p>

                    {/* Inclusions */}
                    <ul className="mt-5 space-y-2">
                      {pkg.inclusions.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check size={16} className="text-[#5A7D5A] mt-0.5 flex-shrink-0" />
                          <span className="font-body text-sm text-[#7A7A6E]">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="btn-primary !mt-6 inline-flex"
                    >
                      Book This Package
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
