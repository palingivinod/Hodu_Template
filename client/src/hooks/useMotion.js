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
      gsap.set(ctx, { perspective: 1100 })

      // Soft 3D roll-in for fade blocks
      gsap.utils.toArray('[data-fade]').forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 42, rotationX: -8, transformOrigin: '50% 100%' },
          {
            autoAlpha: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Staggered cascade with slight roll
      gsap.utils.toArray('[data-cascade]').forEach((group) => {
        gsap.from(group.children, {
          autoAlpha: 0,
          y: 36,
          rotationX: -10,
          transformOrigin: '50% 100%',
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

      // Line-by-line roll (mask reveal)
      gsap.utils.toArray('[data-roll]').forEach((el) => {
        const lines = el.querySelectorAll('.roll-line > span')
        if (!lines.length) return
        gsap.from(lines, {
          yPercent: 115,
          duration: 0.95,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

      // Gentle image parallax / scale settle
      const revealImgs = [
        ctx.querySelector('.phil__hero-media img'),
        ...ctx.querySelectorAll('[data-quality-img] img'),
        ctx.querySelector('[data-people-img] .people__photo img'),
        ctx.querySelector('[data-why-hero] img'),
      ].filter(Boolean)

      revealImgs.forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.08, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: img, start: 'top 88%' },
          }
        )
      })

      // Slow scrub parallax on key media
      gsap.utils.toArray('.feat-card__img img, .life-item__img img, .phil__thumb img').forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement || img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })

      // Section accent: thin rule draw-in
      gsap.utils.toArray('.commit__rule').forEach((rule) => {
        gsap.fromTo(
          rule,
          { scaleX: 0, transformOrigin: 'center' },
          {
            scaleX: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: rule, start: 'top 92%' },
          }
        )
      })

      requestAnimationFrame(() => ScrollTrigger.refresh())
    },
    { scope: root, dependencies: [ready], revertOnUpdate: true }
  )

  return root
}
