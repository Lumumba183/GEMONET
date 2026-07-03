import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const blogPosts = [
  {
    id: 1,
    title: 'Best Time to Visit Kenya for Safari',
    image: '/images/blog-best-time.jpg',
    category: 'Safari Tips',
    date: 'June 15, 2025',
    excerpt: 'Discover the optimal seasons for wildlife viewing, from the Great Migration to the calving season.',
  },
  {
    id: 2,
    title: 'What to Pack for a Kenyan Beach Holiday',
    image: '/images/blog-packing.jpg',
    category: 'Beach Travel',
    date: 'May 28, 2025',
    excerpt: 'Essential packing list for a perfect coastal getaway including sun protection and water gear.',
  },
  {
    id: 3,
    title: 'Top 10 Wildlife Moments in Kenya',
    image: '/images/blog-wildlife.jpg',
    category: 'Wildlife',
    date: 'May 10, 2025',
    excerpt: 'From Big Five encounters to birdwatching paradise, the most unforgettable wildlife experiences.',
  },
]

export default function BlogPreview() {
  return (
    <section className="w-full py-20 lg:py-32 bg-[#FEF5D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 lg:mb-14">
            <div>
              <span className="font-body text-xs uppercase tracking-[0.1em] text-[#5A7D5A]">
                From Our Blog
              </span>
              <h2
                className="font-display text-[#1B4332] mt-2 leading-[0.95] tracking-[-0.01em]"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
              >
                Travel Tips &amp; Inspiration
              </h2>
            </div>
            <Link
              to="/blog"
              className="font-body text-xs uppercase tracking-wider text-[#1B4332] hover:text-[#D4A843] transition-colors"
            >
              Read All Articles &rarr;
            </Link>
          </div>
        </ScrollReveal>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 0.12}>
              <Link to="/blog" className="group block">
                <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(27,67,50,0.08)] hover:shadow-[0_8px_40px_rgba(27,67,50,0.14)] hover:-translate-y-1 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="font-body text-xs uppercase tracking-wider text-[#5A7D5A]">
                      {post.category}
                    </span>
                    <h3 className="font-body text-base font-medium text-[#1B4332] mt-2 group-hover:text-[#D4A843] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="font-body text-xs text-[#7A7A6E] mt-2 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <p className="font-body text-xs text-[#5A7D5A] mt-3">
                      {post.date}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
