import Hero from '../sections/Hero'
import PopularDestinations from '../sections/PopularDestinations'
import ExperienceKenya from '../sections/ExperienceKenya'
import FeaturedPackages from '../sections/FeaturedPackages'
import ServicesShowcase from '../sections/ServicesShowcase'
import Testimonials from '../sections/Testimonials'
import BlogPreview from '../sections/BlogPreview'
import CallToAction from '../sections/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <ExperienceKenya />
      <FeaturedPackages />
      <ServicesShowcase />
      <Testimonials />
      <BlogPreview />
      <CallToAction />
    </>
  )
}
