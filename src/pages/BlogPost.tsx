import { useParams, Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'

const blogData: Record<string, {
  title: string
  image: string
  category: string
  date: string
  content: string
  hashtags: string[]
}> = {
  'best-time-to-visit-kenya': {
    title: 'When to Visit Kenya: A Month-by-Month Guide',
    image: '/images/blog-best-time.jpg',
    category: 'Travel Planning',
    date: 'June 20, 2025',
    hashtags: ['#KenyaSafari', '#TravelPlanning', '#BestTimeToVisit', '#WildlifeSeasons'],
    content: `
      <p>Kenya offers incredible experiences year-round, but timing your visit can make a significant difference to what you'll see and experience. From the Great Migration in July-October to the calving season in January-February, each month offers something unique.</p>

      <h3>July – October: The Great Migration</h3>
      <p>This is peak safari season and for good reason. Over two million wildebeest, zebras, and gazelles cross from Tanzania's Serengeti into Kenya's Maasai Mara. The dramatic river crossings, where herds brave crocodile-infested waters, are one of nature's most spectacular events. Book early as lodges fill up months in advance.</p>

      <h3>January – February: Calving Season</h3>
      <p>In the southern Serengeti and Ndutu region, this is when wildebeest give birth to over 400,000 calves in a few weeks. The predator action is intense as lions, cheetahs, and hyenas take advantage of the vulnerable newborns. The landscape is lush and green after the short rains.</p>

      <h3>March – May: Long Rains (Green Season)</h3>
      <p>While this is the wet season, don't dismiss it. The parks are virtually empty, prices are lower, and the landscapes are breathtakingly beautiful with vibrant green grass and wildflowers. Birdwatching is exceptional during this time.</p>

      <h3>June: Shoulder Season</h3>
      <p>A fantastic time to visit. The rains have stopped, the parks are still green, and the migration is beginning to arrive. Fewer crowds and lower rates make this an excellent value option.</p>

      <h3>November – December: Short Rains</h3>
      <p>Short afternoon showers refresh the landscape. The migratory herds are returning to the Serengeti, but resident wildlife remains excellent. This is a great time for beach combinations as the coast enjoys warm, sunny weather.</p>

      <p>At Gemonet Tours and Safaris, we help you choose the perfect timing for your dream safari. <a href="/contact">Contact us</a> to start planning your adventure.</p>
    `,
  },
  'what-to-pack-for-safari': {
    title: 'What to Pack for a Kenyan Safari',
    image: '/images/blog-packing.jpg',
    category: 'Safari Tips',
    date: 'June 5, 2025',
    hashtags: ['#SafariPacking', '#KenyaTravel', '#SafariTips', '#TravelEssentials'],
    content: `
      <p>Packing for safari requires a balance of practicality and comfort. Our comprehensive guide covers everything from clothing colors to camera gear, ensuring you're prepared for every moment in the bush.</p>

      <h3>Clothing Essentials</h3>
      <p>Stick to neutral colors like khaki, olive, beige, and brown. Bright colors can disturb wildlife, and dark colors attract tsetse flies. Lightweight, breathable fabrics are essential for the heat. Don't forget a warm fleece or jacket for early morning game drives.</p>

      <h3>Footwear</h3>
      <p>Comfortable walking shoes or hiking boots for bush walks, and sandals for relaxing at camp. Break in your shoes before the trip to avoid blisters.</p>

      <h3>Camera Gear</h3>
      <p>A DSLR or mirrorless camera with a telephoto lens (200-400mm) is ideal for wildlife photography. Bring extra memory cards, batteries, and a cleaning kit. A bean bag is useful for stabilizing your camera in the vehicle.</p>

      <h3>Sun Protection</h3>
      <p>The African sun is intense. Pack SPF 50+ sunscreen, a wide-brimmed hat, sunglasses, and a buff or scarf to protect your neck and face from dust.</p>

      <h3>Binoculars</h3>
      <p>A good pair of binoculars (8x42 or 10x42) will transform your safari experience. Your guide will have a pair, but having your own means you won't miss any action.</p>

      <p>Ready to put your packing list to use? <a href="/packages">Explore our safari packages</a> and book your adventure today.</p>
    `,
  },
  'top-wildlife-experiences': {
    title: 'Top 10 Wildlife Experiences in Kenya',
    image: '/images/blog-wildlife.jpg',
    category: 'Wildlife',
    date: 'May 22, 2025',
    hashtags: ['#WildlifePhotography', '#BigFive', '#KenyaWildlife', '#SafariAdventure'],
    content: `
      <p>From witnessing a lion hunt in Maasai Mara to swimming with dolphins in Watamu, Kenya offers wildlife encounters that belong on every nature lover's bucket list. Here are our top 10 unforgettable experiences.</p>

      <h3>1. The Great Migration River Crossing</h3>
      <p>Nothing prepares you for the sight of thousands of wildebeest plunging into the Mara River, braving crocodiles and strong currents. This is nature at its most dramatic.</p>

      <h3>2. Big Five in Maasai Mara</h3>
      <p>Lion, leopard, elephant, buffalo, and rhino — the Big Five can all be found in the Mara. Seeing all five in a single trip is the ultimate safari achievement.</p>

      <h3>3. Elephant herds of Amboseli</h3>
      <p>Photographing elephants with Mount Kilimanjaro as a backdrop is an iconic African image that every wildlife enthusiast dreams of capturing.</p>

      <h3>4. Flamingos of Lake Nakuru</h3>
      <p>Millions of pink flamingos create a pink carpet along the lake shore. Combined with rhino sightings, this is a photographer's paradise.</p>

      <h3>5. Cheetah spotting</h3>
      <p>Kenya is one of the best places in the world to see cheetahs. The open plains of the Mara and Amboseli provide perfect viewing conditions.</p>

      <p>Want to experience these incredible wildlife moments? <a href="/contact">Get in touch</a> to plan your safari.</p>
    `,
  },
  'complete-guide-to-diani-beach': {
    title: 'The Complete Guide to Diani Beach',
    image: '/images/blog-diani-guide.jpg',
    category: 'Beach Travel',
    date: 'May 8, 2025',
    hashtags: ['#DianiBeach', '#KenyaCoast', '#BeachHoliday', '#TravelGuide'],
    content: `
      <p>Diani Beach consistently ranks among Africa's best beaches. Discover the best resorts, restaurants, water sports, and hidden gems along this stunning stretch of Kenya's south coast.</p>

      <h3>Why Diani Beach?</h3>
      <p>With 17 kilometers of powdery white sand, crystal-clear turquoise water, and a backdrop of swaying palm trees, Diani is the definition of tropical paradise. The coral reef just offshore creates a natural lagoon perfect for swimming and snorkeling.</p>

      <h3>Where to Stay</h3>
      <p>From luxury beachfront resorts like The Sands at Nomad and Alfajiri Villas to boutique hotels and budget-friendly guesthouses, Diani has accommodation for every traveler. We recommend staying beachfront for the best experience.</p>

      <h3>Activities</h3>
      <p>Snorkeling and diving at the coral reef, kitesurfing (Diani is one of Africa's top kitesurfing destinations), dhow cruises at sunset, visiting Colobus Conservation for monkey encounters, and exploring the nearby Shimba Hills National Reserve.</p>

      <h3>Dining</h3>
      <p>Fresh seafood is the highlight — try the catch of the day at one of the beachfront restaurants. The Swahili cuisine, with its blend of African, Arab, and Indian influences, is a culinary adventure.</p>

      <p>Ready for a beach escape? <a href="/packages">Check out our Diani Beach packages</a> and let us plan your perfect coastal getaway.</p>
    `,
  },
  'maasai-culture-guide': {
    title: 'Understanding Maasai Culture: A Visitor\'s Guide',
    image: '/images/blog-maasai-culture.jpg',
    category: 'Culture',
    date: 'April 25, 2025',
    hashtags: ['#MaasaiCulture', '#KenyaCulture', '#ResponsibleTourism', '#CulturalTravel'],
    content: `
      <p>The Maasai are one of Kenya's most iconic tribes. Learn about their traditions, customs, and how to visit respectfully while supporting community-led tourism initiatives.</p>

      <h3>Who Are the Maasai?</h3>
      <p>The Maasai are a Nilotic ethnic group inhabiting parts of Kenya and Tanzania. Known for their distinctive red shukas (cloaks), beaded jewelry, and warrior traditions, they have maintained much of their traditional way of life despite modernization.</p>

      <h3>The Jumping Dance (Adumu)</h3>
      <p>The famous Maasai jumping dance is performed by young warriors during ceremonies. The height of the jump is considered a sign of strength and attractiveness. Visitors may be invited to try — don't be embarrassed if you can't match their height!</p>

      <h3>Visiting a Maasai Village</h3>
      <p>Many safari itineraries include visits to Maasai villages. Choose community-led initiatives where fees go directly to the village rather than large tour operators. Gemonet works with authentic, community-owned villages.</p>

      <h3>Photography Etiquette</h3>
      <p>Always ask permission before taking photos of people. Some Maasai may ask for a small fee for photographs — this is a legitimate way for them to earn income from tourism.</p>

      <h3>Supporting the Community</h3>
      <p>Purchase beaded jewelry and crafts directly from the artisans. These intricate beadwork pieces are not only beautiful souvenirs but also support women's economic empowerment.</p>

      <p>Experience authentic Maasai culture on our <a href="/packages">safari packages</a>. We ensure respectful, mutually beneficial cultural encounters.</p>
    `,
  },
  'kenya-on-a-budget': {
    title: 'Kenya on a Budget: Affordable Safari Tips',
    image: '/images/blog-budget.jpg',
    category: 'Budget Travel',
    date: 'April 10, 2025',
    hashtags: ['#BudgetSafari', '#AffordableTravel', '#KenyaOnABudget', '#TravelTips'],
    content: `
      <p>A Kenyan safari doesn't have to break the bank. With smart planning, shoulder-season travel, and our insider tips, you can experience world-class wildlife on a modest budget.</p>

      <h3>Travel in the Green Season</h3>
      <p>March to May and November offer significantly lower rates on accommodation and flights. The parks are less crowded, and the landscapes are stunningly green. Wildlife viewing is still excellent.</p>

      <h3>Choose Lesser-Known Parks</h3>
      <p>While Maasai Mara is iconic, parks like Tsavo East and West, Meru, and Aberdare offer incredible wildlife at a fraction of the cost. You'll also enjoy a more exclusive, crowd-free experience.</p>

      <h3>Join a Group Safari</h3>
      <p>Sharing a safari vehicle with other travelers splits the cost of fuel, guide, and vehicle rental. Our group safaris start from as low as $200 per person per day.</p>

      <h3>Stay Outside the Park</h3>
      <p>Accommodation just outside park gates is often much cheaper than lodges inside, while still offering easy access for game drives.</p>

      <h3>Book in Advance</h3>
      <p>Early bookings often come with discounts. We offer early bird specials of up to 15% for bookings made 6 months in advance.</p>

      <p>Looking for an affordable safari? <a href="/contact">Contact us</a> and we'll design a budget-friendly itinerary without compromising on the experience.</p>
    `,
  },
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogData[slug || '']

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FEF5D9] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl text-[#1B4332]">Article not found</h1>
          <Link to="/blog" className="btn-primary !mt-4 inline-flex">Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FEF5D9]">
      {/* Hero Image */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
          <div className="max-w-[900px] mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-[#FEF5D9]/80 hover:text-[#D4A843] transition-colors font-body text-sm mb-4">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="py-12 lg:py-16">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-[#E8F0E8] text-[#5A7D5A] text-xs font-body rounded-full">
                <Tag size={12} /> {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-[#7A7A6E] text-xs font-body">
                <Calendar size={12} /> {post.date}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1
              className="font-display text-[#1B4332] leading-[0.95] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              {post.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div
              className="prose prose-lg mt-8 max-w-none
                prose-headings:font-display prose-headings:text-[#1B4332]
                prose-p:font-body prose-p:text-[#7A7A6E] prose-p:leading-relaxed
                prose-a:text-[#D4A843] prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                prose-h3:text-xl prose-h3:font-medium prose-h3:mt-8 prose-h3:mb-3
                prose-strong:text-[#1B4332]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </ScrollReveal>

          {/* Hashtags */}
          <ScrollReveal delay={0.3}>
            <div className="mt-10 pt-8 border-t border-[#E5DFC8]">
              <div className="flex flex-wrap gap-2">
                {post.hashtags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white text-[#5A7D5A] text-xs font-body rounded-full border border-[#E5DFC8]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.4}>
            <div className="mt-10 p-6 lg:p-8 bg-[#1B4332] rounded-xl text-center">
              <h3 className="font-display text-[#FEF5D9] text-xl">Ready to Experience Kenya?</h3>
              <p className="font-body text-[#FEF5D9]/70 text-sm mt-2">Let Gemonet Tours and Safaris plan your perfect adventure.</p>
              <Link to="/contact" className="btn-primary !mt-4 inline-flex">Plan Your Trip</Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </div>
  )
}
