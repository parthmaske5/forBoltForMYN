import { Link } from 'react-router-dom';
import { ArrowRight, Palette } from 'lucide-react';
import { paintStudioHome, palettes } from '@/content/paintStudio';

export function PaintStudioTeaser() {
  return (
    <section id="paint-studio" className="bg-cream-100 py-20 lg:py-28">
      <div className="section-container">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-center">
          {/* Left: visual */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[5/4] lg:aspect-[6/5] overflow-hidden rounded-2xl card-shadow border border-ink-900/8">
              {/* Layered room-inspired visual using SVG with palette colours */}
              <svg viewBox="0 0 800 650" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
                {/* Warm neutral base wall */}
                <rect x="0" y="0" width="800" height="480" fill="#F5EFE6" />
                {/* Accent wall section */}
                <rect x="480" y="0" width="320" height="480" fill="#C67D5D" opacity="0.85" />
                {/* Ceiling */}
                <rect x="0" y="0" width="800" height="50" fill="#FBF8F4" />
                {/* Floor */}
                <polygon points="0,480 800,480 800,650 0,650" fill="#C4A884" />
                <line x1="0" y1="520" x2="800" y2="520" stroke="#B89A72" strokeWidth="1" opacity="0.3" />
                <line x1="0" y1="570" x2="800" y2="570" stroke="#B89A72" strokeWidth="1" opacity="0.3" />
                <line x1="0" y1="615" x2="800" y2="615" stroke="#B89A72" strokeWidth="1" opacity="0.3" />
                {/* Baseboard */}
                <rect x="0" y="470" width="800" height="14" fill="#FBF8F4" />
                {/* Window */}
                <rect x="70" y="90" width="170" height="160" rx="4" fill="#EAF0F4" opacity="0.6" />
                <rect x="70" y="90" width="170" height="160" rx="4" fill="none" stroke="#FBF8F4" strokeWidth="4" />
                <line x1="155" y1="90" x2="155" y2="250" stroke="#FBF8F4" strokeWidth="3" />
                <line x1="70" y1="170" x2="240" y2="170" stroke="#FBF8F4" strokeWidth="3" />
                {/* Sofa */}
                <rect x="280" y="360" width="210" height="75" rx="10" fill="#546344" opacity="0.8" />
                <rect x="290" y="350" width="65" height="32" rx="6" fill="#424E36" opacity="0.8" />
                <rect x="415" y="350" width="65" height="32" rx="6" fill="#424E36" opacity="0.8" />
                {/* Frame on accent wall */}
                <rect x="560" y="110" width="90" height="120" rx="2" fill="#FBF8F4" />
                <rect x="568" y="118" width="74" height="104" rx="1" fill="#E0D0BC" opacity="0.4" />
                {/* Plant */}
                <rect x="650" y="400" width="32" height="45" rx="4" fill="#92480C" opacity="0.6" />
                <circle cx="666" cy="378" r="28" fill="#546344" opacity="0.5" />
                <circle cx="654" cy="368" r="20" fill="#6B7C56" opacity="0.5" />
                <circle cx="680" cy="372" r="18" fill="#889872" opacity="0.5" />
              </svg>

              {/* Floating palette dots overlay */}
              <div className="absolute bottom-5 left-5 flex gap-2">
                {palettes[2].colors.map((c) => (
                  <span
                    key={c.id}
                    className="h-8 w-8 rounded-full border-2 border-cream-50/80 shadow-md"
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: text + palette preview */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <Palette className="h-5 w-5 text-marigold-600" />
              <p className="eyebrow">{paintStudioHome.eyebrow}</p>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-ink-900 text-balance">
              {paintStudioHome.heading}
            </h2>

            <p className="mt-5 text-base lg:text-lg leading-relaxed text-ink-600 text-pretty">
              {paintStudioHome.intro}
            </p>

            {/* Palette preview chips */}
            <div className="mt-7 space-y-3">
              {palettes.slice(0, 3).map((palette) => (
                <div key={palette.id} className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    {palette.colors.map((c) => (
                      <span
                        key={c.id}
                        className="h-7 w-7 rounded-md border border-ink-900/10"
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-ink-700">{palette.name}</span>
                </div>
              ))}
            </div>

            <Link
              to="/paint-studio"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-all duration-300 hover:bg-ink-800 hover:shadow-lg active:scale-[0.98] group"
            >
              {paintStudioHome.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
