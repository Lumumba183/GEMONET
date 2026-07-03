import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const carouselImages = [
  '/images/dest-mara-leopard.jpg',
  '/images/dest-amboseli-herd.jpg',
  '/images/dest-diani-aerial.jpg',
  '/images/dest-tsavo-elephants.jpg',
  '/images/dest-nakuru-flamingos.jpg',
  '/images/dest-samburu-giraffe.jpg',
]

const leftImages = [...carouselImages, ...carouselImages]
const rightImages = [...carouselImages.slice(3), ...carouselImages.slice(0, 3), ...carouselImages.slice(3), ...carouselImages.slice(0, 3)]

export default function PopularDestinations() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftStripRef = useRef<HTMLDivElement>(null)
  const rightStripRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const leftStrip = leftStripRef.current
    const rightStrip = rightStripRef.current
    if (!section || !leftStrip || !rightStrip) return

    const ctx = gsap.context(() => {
      // Left strip scrolls down
      gsap.fromTo(leftStrip,
        { y: '-25%' },
        {
          y: '0%',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )

      // Right strip scrolls up
      gsap.fromTo(rightStrip,
        { y: '0%' },
        {
          y: '-25%',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )

      // Center text reveal
      gsap.from('.dest-center-text', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] overflow-hidden bg-[#FEF5D9]"
    >
      {/* 3D Carousel */}
      <div className="absolute inset-0 overflow-hidden" style={{ perspective: '1200px' }}>
        {/* Left Column */}
        <div
          className="absolute top-0 left-0 w-[40vw] h-full overflow-hidden"
          style={{
            transformOrigin: '0% 50%',
            transform: 'rotateY(35deg)',
            zIndex: 1,
          }}
        >
          <div ref={leftStripRef} className="flex flex-col will-change-transform">
            {leftImages.map((img, i) => (
              <div
                key={`left-${i}`}
                className="w-full h-[16.666vh] bg-cover bg-center will-change-transform"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div
          className="absolute top-0 left-[60vw] w-[40vw] h-full overflow-hidden"
          style={{
            transformOrigin: '100% 50%',
            transform: 'rotateY(-35deg)',
            zIndex: 1,
          }}
        >
          <div ref={rightStripRef} className="flex flex-col will-change-transform">
            {rightImages.map((img, i) => (
              <div
                key={`right-${i}`}
                className="w-full h-[16.666vh] bg-cover bg-center will-change-transform"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Center Text Overlay */}
      <div className="dest-center-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4 max-w-[500px] pointer-events-none">
        <h2
          className="font-display italic text-[#1B4332] leading-[0.9] tracking-[-0.01em]"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
        >
          Popular Destinations
        </h2>
        <p className="font-body text-[#7A7A6E] text-base mt-4 leading-relaxed">
          Explore Kenya&apos;s most iconic travel destinations, from the wild savannas of Maasai Mara to the pristine beaches of the Kenyan coast.
        </p>
        <Link
          to="/destinations"
          className="btn-outline-dark !mt-6 pointer-events-auto inline-flex"
        >
          View All Destinations
        </Link>
      </div>
    </section>
  )
}
