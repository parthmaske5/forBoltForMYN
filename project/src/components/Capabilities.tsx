import { capabilities } from '@/content/site';
import { SectionHeading } from './SectionHeading';
import { ArrowRight } from 'lucide-react';

export function Capabilities() {
  return (
    <section className="bg-cream-100 py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow={capabilities.eyebrow}
          heading={capabilities.heading}
          intro={capabilities.body}
        />

        <div className="mt-12 grid gap-px bg-ink-900/8 sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-ink-900/8">
          {capabilities.groups.map((group) => (
            <div key={group.title} className="bg-cream-50 p-7 lg:p-8">
              <h3 className="font-display text-lg font-semibold text-ink-900">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-600 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-marigold-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/#proof-of-work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-800 transition-colors hover:text-marigold-600 group"
          >
            See what we{"\u2019"}ve built
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
