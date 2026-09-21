import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { brand } from '../data/content'

gsap.registerPlugin(useGSAP)

export default function Preloader({ onDone }) {
  const root = useRef(null)
  const [done, setDone] = useState(false)

  useGSAP(
    () => {
      document.body.classList.add('is-locked')

      const paths = gsap.utils.toArray('.boot__draw path, .boot__draw line, .boot__draw polyline, .boot__draw rect')
      paths.forEach((el) => {
        const len = typeof el.getTotalLength === 'function' ? el.getTotalLength() : 320
        gsap.set(el, {
          strokeDasharray: len,
          strokeDashoffset: len,
        })
      })

      gsap.set('.boot__logo', { autoAlpha: 0, scale: 1.06, filter: 'blur(8px)' })
      gsap.set('.boot__draw', { autoAlpha: 1 })
      gsap.set('.boot__slab', { scaleX: 0, transformOrigin: '50% 50%' })
      gsap.set('.boot__tag', { autoAlpha: 0, y: 14 })
      gsap.set('.boot__light', { xPercent: -130, autoAlpha: 0 })

      const tl = gsap.timeline({
        onComplete: () => {
          const exit = gsap.timeline({
            onComplete: () => {
              setDone(true)
              document.body.classList.remove('is-locked')
              onDone?.()
            },
          })
          exit
            .to('.boot__tag', { autoAlpha: 0, duration: 0.25 })
            .to('.boot__logo', { scale: 1.04, duration: 0.3, ease: 'power1.in' })
            .to(
              '.boot__inner',
              { y: -40, autoAlpha: 0, duration: 0.5, ease: 'power2.in' },
              '-=0.05'
            )
            .to('.boot__curtain', { yPercent: -100, duration: 0.75, ease: 'power3.inOut' }, '-=0.28')
            .to(root.current, { autoAlpha: 0, duration: 0.15 }, '-=0.2')
        },
      })

      tl.to('.boot__slab', { scaleX: 1, duration: 0.55, ease: 'power2.out' })
        .to(
          paths,
          {
            strokeDashoffset: 0,
            duration: 1.2,
            stagger: 0.07,
            ease: 'power2.inOut',
          },
          '-=0.15'
        )
        .to('.boot__draw', { autoAlpha: 0, y: -12, duration: 0.4, ease: 'power2.in' }, '+=0.12')
        .to(
          '.boot__logo',
          {
            autoAlpha: 1,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.12'
        )
        .fromTo(
          '.boot__light',
          { xPercent: -130, autoAlpha: 0.6 },
          { xPercent: 130, autoAlpha: 0, duration: 0.85, ease: 'power1.inOut' },
          '-=0.5'
        )
        .to('.boot__tag', { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.3')
        .to({}, { duration: 0.55 })

      return () => document.body.classList.remove('is-locked')
    },
    { scope: root, dependencies: [onDone] }
  )

  if (done) return null

  return (
    <div className="boot" ref={root} aria-busy="true" aria-label="Loading HODU">
      <div className="boot__curtain" aria-hidden="true" />

      <div className="boot__inner">
        <div className="boot__stage">
          <span className="boot__slab" aria-hidden="true" />

          <svg className="boot__draw" viewBox="0 0 240 140" fill="none" aria-hidden="true">
            <line x1="24" y1="118" x2="216" y2="118" stroke="currentColor" strokeWidth="1.5" />
            <polyline
              points="40,118 40,70 70,42 120,28 170,42 200,70 200,118"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path d="M70 70 H170 V118" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
            <rect x="102" y="86" width="36" height="32" stroke="currentColor" strokeWidth="1.3" />
            <line x1="120" y1="86" x2="120" y2="118" stroke="currentColor" strokeWidth="1" />
            <path d="M88 70 V55 H152 V70" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
          </svg>

          <div className="boot__logo">
            <span className="boot__light" aria-hidden="true" />
            <img src={brand.logoTransparent} alt="HODU" />
          </div>
        </div>

        <p className="boot__tag">Architecture that becomes home</p>
      </div>
    </div>
  )
}
