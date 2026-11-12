import { ArrowRight, ArrowDown } from 'lucide-react';
import { hero } from '@/content/site';
import { QuoteButton } from './CTAs';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-50 pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Layered ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft warm gradient mesh */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 15% 20%, rgba(255, 203, 102, 0.12), transparent 60%), radial-gradient(ellipse 60% 50% at 85% 30%, rgba(230, 168, 154, 0.08), transparent 55%), radial-gradient(ellipse 70% 50% at 50% 90%, rgba(170, 184, 154, 0.06), transparent 60%)',
          }}
        />

        {/* Subtle contour lines — topographic feel */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05]"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g stroke="#2B2B2B" strokeWidth="0.8" fill="none">
            <path d="M-50 200 Q300 160 600 220 T1250 180 Q1400 170 1550 200" />
            <path d="M-50 260 Q300 220 600 280 T1250 240 Q1400 230 1550 260" />
            <path d="M-50 320 Q300 280 600 340 T1250 300 Q1400 290 1550 320" />
            <path d="M-50 380 Q300 340 600 400 T1250 360 Q1400 350 1550 380" />
            <path d="M-50 440 Q300 400 600 460 T1250 420 Q1400 410 1550 440" />
            <path d="M-50 500 Q300 460 600 520 T1250 480 Q1400 470 1550 500" />
            <path d="M-50 560 Q300 520 600 580 T1250 540 Q1400 530 1550 560" />
            <path d="M-50 620 Q300 580 600 640 T1250 600 Q1400 590 1550 620" />
            <path d="M-50 680 Q300 640 600 700 T1250 660 Q1400 650 1550 680" />
            <path d="M-50 740 Q300 700 600 760 T1250 720 Q1400 710 1550 740" />
          </g>
        </svg>

        {/* Drifting warm glow blobs */}
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-marigold-200/20 blur-3xl animate-drift" />
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-blush-100/15 blur-3xl animate-drift-slow" />
      </div>

      {/* Decorative botanical SVG — right side, subtle organic accent */}
      <svg
        className="absolute -right-16 top-16 hidden lg:block w-[480px] h-[480px] text-marigold-400 opacity-20 animate-bloom"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
          {/* Main stem */}
          <path d="M100 190 Q100 145 100 95 Q100 65 108 42" />
          {/* Branches */}
          <path d="M100 135 Q78 125 65 108" />
          <path d="M100 110 Q122 100 136 82" />
          <path d="M100 85 Q82 78 70 62" />
          {/* Leaves */}
          <path d="M65 108 Q48 102 42 88 Q56 90 65 108 Z" fill="currentColor" fillOpacity="0.12" />
          <path d="M136 82 Q152 76 158 60 Q144 62 136 82 Z" fill="currentColor" fillOpacity="0.12" />
          <path d="M70 62 Q56 58 50 46 Q62 48 70 62 Z" fill="currentColor" fillOpacity="0.10" />
        </g>
        {/* Flower — layered petals */}
        <g>
          <circle cx="108" cy="38" r="20" fill="#F0B7A8" fillOpacity="0.35" />
          <circle cx="92" cy="30" r="15" fill="#F0B7A8" fillOpacity="0.25" />
          <circle cx="122" cy="33" r="15" fill="#F0B7A8" fillOpacity="0.25" />
          <circle cx="103" cy="20" r="13" fill="#F0B7A8" fillOpacity="0.20" />
          <circle cx="108" cy="38" r="9" fill="#E9A92B" fillOpacity="0.4" />
        </g>
        {/* Secondary smaller bloom */}
        <g opacity="0.5">
          <path d="M65 108 Q55 100 50 92" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="48" cy="88" r="8" fill="#F0B7A8" fillOpacity="0.2" />
          <circle cx="48" cy="88" r="4" fill="#E9A92B" fillOpacity="0.3" />
        </g>
      </svg>

      <div className="section-container relative">
        <div className="max-w-4xl">
          <p className="eyebrow animate-fade-in">{hero.eyebrow}</p>

          <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.95] tracking-tighter2 text-ink-900 text-balance animate-fade-up">
            {hero.headline}
          </h1>

          <p className="mt-7 max-w-2xl text-lg lg:text-xl leading-relaxed text-ink-600 text-pretty animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {hero.subhead}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <QuoteButton className="px-8 py-4 text-base" />
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 text-base font-semibold text-ink-800 transition-colors hover:text-marigold-600 group"
            >
              {hero.secondaryCta.label}
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl sm:text-4xl font-semibold text-ink-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-ink-500 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink-900/10 to-transparent" />
    </section>
  );
}
