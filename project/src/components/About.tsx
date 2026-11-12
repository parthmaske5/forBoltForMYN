import { about } from '@/content/about';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="bg-cream-50 py-20 lg:py-28">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={about.eyebrow}
              heading={about.heading}
              intro={about.body}
            />
          </div>

          <div className="lg:col-span-7">
            {/* Values woven as narrative prose, not card grid */}
            <div className="space-y-1">
              {about.values.map((value, idx) => (
                <div
                  key={value.title}
                  className={`py-6 ${idx < about.values.length - 1 ? 'border-b border-ink-900/8' : ''}`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-sm font-semibold text-marigold-600 tabular-nums">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink-900 inline">
                        {value.title}.
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-600 text-pretty">
                        {value.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Crew note placeholder */}
            <div className="mt-8 rounded-2xl border border-dashed border-ink-900/15 bg-cream-100/50 p-6 lg:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400 mb-2">
                Crew &amp; Labour
              </p>
              <p className="text-sm leading-relaxed text-ink-500 italic">
                {about.crewNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
