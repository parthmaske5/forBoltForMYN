import { Users, Wrench, Sparkles } from 'lucide-react';
import { about } from '@/content/about';
import { SectionHeading } from './SectionHeading';

const valueIcons = [Users, Wrench, Sparkles];

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

          <div className="lg:col-span-7 space-y-6">
            {about.values.map((value, idx) => {
              const Icon = valueIcons[idx % valueIcons.length];
              return (
                <div
                  key={value.title}
                  className="flex gap-5 rounded-2xl bg-cream-100 border border-ink-900/6 p-6 lg:p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-marigold-100 text-marigold-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink-900">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600 text-pretty">
                      {value.body}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Crew note placeholder */}
            <div className="rounded-2xl border border-dashed border-ink-900/15 bg-cream-50 p-6 lg:p-7">
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
