import { MessageCircle, Phone, FileText, Hammer } from 'lucide-react';
import { quote } from '@/content/about';
import { company } from '@/content/site';
import { SectionHeading } from './SectionHeading';

export function QuoteSection() {
  return (
    <section id="quote" className="bg-ink-900 py-20 lg:py-28">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="eyebrow text-marigold-400">{quote.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-cream-50 text-balance">
            {quote.heading}
          </h2>
          <p className="mt-5 text-base lg:text-lg leading-relaxed text-cream-100/70 text-pretty">
            {quote.body}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {/* Primary CTA — Get a Quote */}
          <a
            href="/#top"
            className="group flex flex-col items-start rounded-2xl bg-marigold-500 p-7 transition-all hover:bg-marigold-400 hover:shadow-xl hover:shadow-marigold-500/20"
          >
            <FileText className="h-7 w-7 text-ink-900" />
            <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
              {quote.primaryCta}
            </h3>
            <p className="mt-2 text-sm text-ink-800/80 leading-relaxed">
              Send us your project details and we{"\u2019"}ll prepare a clear quote.
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start rounded-2xl bg-ink-800 border border-cream-100/10 p-7 transition-all hover:border-cream-100/20 hover:bg-ink-700"
          >
            <MessageCircle className="h-7 w-7 text-marigold-400" />
            <h3 className="mt-4 font-display text-lg font-semibold text-cream-50">
              {quote.whatsappLabel}
            </h3>
            <p className="mt-2 text-sm text-cream-100/60 leading-relaxed">
              {company.whatsapp}
            </p>
          </a>

          {/* Phone */}
          <a
            href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}
            className="group flex flex-col items-start rounded-2xl bg-ink-800 border border-cream-100/10 p-7 transition-all hover:border-cream-100/20 hover:bg-ink-700"
          >
            <Phone className="h-7 w-7 text-marigold-400" />
            <h3 className="mt-4 font-display text-lg font-semibold text-cream-50">
              {quote.phoneLabel}
            </h3>
            <p className="mt-2 text-sm text-cream-100/60 leading-relaxed">
              {company.phone}
            </p>
          </a>
        </div>

        {/* Form note placeholder */}
        <div className="mt-10 flex items-start gap-3 rounded-xl border border-dashed border-cream-100/15 bg-ink-800/50 p-5">
          <Hammer className="h-4 w-4 text-marigold-400 shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed text-cream-100/50 italic">
            {quote.formNote}
          </p>
        </div>
      </div>
    </section>
  );
}
