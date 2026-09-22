import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function useMotion(ready = true) {
  const root = useRef(null)

  useGSAP(
    () => {
      if (!ready || !root.current) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const ctx = root.current
      gsap.set(ctx, { perspective: 1200 })

      // Line-by-line roll for main hero heading
      gsap.utils.toArray('[data-roll]').forEach((el) => {
        const lines = el.querySelectorAll('.roll-line > span')
        if (!lines.length) return
        gsap.from(lines, {
          yPercent: 100,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power2.out',
          clearProps: 'all',
        })
      })

      // Safe smooth reveal for cards with clearProps to guarantee 100% visibility
      gsap.utils.toArray('[data-fade]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.6, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            clearProps: 'all',
            scrollTrigger: {
              trigger: el,
              start: 'top 98%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      requestAnimationFrame(() => ScrollTrigger.refresh())
    },
    { scope: root, dependencies: [ready], revertOnUpdate: true }
  )

  return root
}
