import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const blogPosts = [
  {
    id: 1,
    slug: 'best-time-to-visit-kenya',
    title: 'When to Visit Kenya: A Month-by-Month Guide',
    image: '/images/blog-best-time.jpg',
    category: 'Travel Planning',
    date: 'June 20, 2025',
    excerpt: 'Kenya offers incredible experiences year-round, but timing your visit can make a significant difference. From the Great Migration in July-October to the calving season in January-February, here\'s what each month offers...',
  },
  {
    id: 2,
    slug: 'what-to-pack-for-safari',
    title: 'What to Pack for a Kenyan Safari',
    image: '/images/blog-packing.jpg',
    category: 'Safari Tips',
    date: 'June 5, 2025',
    excerpt: 'Packing for safari requires a balance of practicality and comfort. Our comprehensive guide covers everything from clothing colors to camera gear, ensuring you\'re prepared for every moment...',
  },
  {
    id: 3,
    slug: 'top-wildlife-experiences',
    title: 'Top 10 Wildlife Experiences in Kenya',
    image: '/images/blog-wildlife.jpg',
    category: 'Wildlife',
    date: 'May 22, 2025',
    excerpt: 'From witnessing a lion hunt in Maasai Mara to swimming with dolphins in Watamu, Kenya offers wildlife encounters that belong on every nature lover\'s bucket list...',
  },
  {
    id: 4,
    slug: 'complete-guide-to-diani-beach',
    title: 'The Complete Guide to Diani Beach',
    image: '/images/blog-diani-guide.jpg',
    category: 'Beach Travel',
    date: 'May 8, 2025',
    excerpt: 'Diani Beach consistently ranks among Africa\'s best beaches. Discover the best resorts, restaurants, water sports, and hidden gems along this stunning stretch of Kenya\'s south coast...',
  },
  {
    id: 5,
    slug: 'maasai-culture-guide',
    title: 'Understanding Maasai Culture: A Visitor\'s Guide',
    image: '/images/blog-maasai-culture.jpg',
    category: 'Culture',
    date: 'April 25, 2025',
    excerpt: 'The Maasai are one of Kenya\'s most iconic tribes. Learn about their traditions, customs, and how to visit respectfully while supporting community-led tourism initiatives...',
  },
  {
    id: 6,
    slug: 'kenya-on-a-budget',
    title: 'Kenya on a Budget: Affordable Safari Tips',
    image: '/images/blog-budget.jpg',
    category: 'Budget Travel',
    date: 'April 10, 2025',
    excerpt: 'A Kenyan safari doesn\'t have to break the bank. With smart planning, shoulder-season travel, and our insider tips, you can experience world-class wildlife on a modest budget...',
  },
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#FEF5D9]">
      {/* Hero */}
      <section className="relative w-full min-h-[45vh] overflow-hidden flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/blog-best-time.jpg)' }}
        />
        <div className="absolute inset-0 bg-[#1B4332]/65" />
        <div className="relative z-10 px-4 sm:px-6 pt-24 pb-12">
          <h1
            className="font-display text-[#FEF5D9] leading-[0.92] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            Travel Stories &amp; Tips
          </h1>
          <p className="font-body text-[#FEF5D9]/80 text-base sm:text-lg max-w-[550px] mx-auto mt-4 leading-relaxed">
            Insider guides, travel inspiration, and expert advice for your Kenyan adventure.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(27,67,50,0.08)] hover:shadow-[0_8px_40px_rgba(27,67,50,0.14)] hover:-translate-y-1 transition-all duration-300">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-[#E8F0E8] text-[#5A7D5A] text-xs font-body rounded-full">
                          {post.category}
                        </span>
                        <span className="font-body text-xs text-[#7A7A6E]">{post.date}</span>
                      </div>
                      <h3 className="font-body text-xl font-medium text-[#1B4332] group-hover:text-[#D4A843] transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="font-body text-sm text-[#7A7A6E] mt-3 leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Hashtags */}
      <section className="py-8 bg-[#E8F0E8]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-xs text-[#5A7D5A] uppercase tracking-wider mb-3">Follow the conversation</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['#KenyaSafari', '#MaasaiMara', '#DianiBeach', '#Amboseli', '#KenyaTravel', '#SafariPackages', '#BeachHoliday', '#WildlifePhotography', '#TravelKenya', '#AfricanSafari', '#GemonetTours', '#ExploreKenya'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white text-[#1B4332] text-xs font-body rounded-full border border-[#E5DFC8]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
