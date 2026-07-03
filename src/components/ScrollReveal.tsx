import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  stagger?: number
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  y = 40,
  stagger = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y,
        duration,
        delay,
        stagger: stagger > 0 ? stagger : undefined,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    })

    return () => ctx.revert()
  }, [delay, duration, y, stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
