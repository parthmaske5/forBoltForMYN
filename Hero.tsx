import { ArrowRight, ArrowDown } from 'lucide-react';
import { hero, company } from '@/content/site';
import { QuoteButton } from './CTAs';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-50 pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Decorative blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #2B2B2B 1px, transparent 1px), linear-gradient(to bottom, #2B2B2B 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Decorative floral SVG — right side, blooms subtly */}
      <svg
        className="absolute -right-12 top-20 hidden lg:block w-[420px] h-[420px] text-marigold-400 opacity-30 animate-bloom"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          {/* Stem */}
          <path d="M100 180 Q100 140 100 100 Q100 70 105 50" />
          {/* Branches */}
          <path d="M100 130 Q80 120 70 105" />
          <path d="M100 110 Q120 100 130 85" />
          {/* Leaves */}
          <path d="M70 105 Q55 100 50 88 Q62 88 70 105 Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M130 85 Q145 80 150 68 Q138 68 130 85 Z" fill="currentColor" fillOpacity="0.15" />
        </g>
        {/* Flower petals */}
        <g className="origin-center">
          <circle cx="105" cy="45" r="18" fill="#F0B7A8" fillOpacity="0.4" />
          <circle cx="90" cy="38" r="14" fill="#F0B7A8" fillOpacity="0.3" />
          <circle cx="118" cy="40" r="14" fill="#F0B7A8" fillOpacity="0.3" />
          <circle cx="100" cy="28" r="12" fill="#F0B7A8" fillOpacity="0.25" />
          <circle cx="105" cy="45" r="8" fill="#E9A92B" fillOpacity="0.5" />
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

      {/* Bottom transition curve */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink-900/10 to-transparent" />
    </section>
  );
}
