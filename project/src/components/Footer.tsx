import { Link } from 'react-router-dom';
import { Hammer, Phone, MessageCircle, MapPin } from 'lucide-react';
import { company, nav } from '@/content/site';

export function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-100">
      <div className="section-container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-marigold-500">
                <Hammer className="h-5 w-5 text-ink-900" />
              </span>
              <span className="font-display text-lg font-semibold">{company.name}</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-100/70">
              {company.description}
            </p>
            <p className="mt-4 font-display text-base italic text-marigold-300">
              {company.tagline}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-100/50">
              Explore
            </h4>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-cream-100/80 transition-colors hover:text-marigold-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-100/50">
              Contact
            </h4>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-cream-100/80 transition-colors hover:text-marigold-300"
                >
                  <MessageCircle className="h-4 w-4 text-marigold-400" />
                  {company.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3 text-sm text-cream-100/80 transition-colors hover:text-marigold-300"
                >
                  <Phone className="h-4 w-4 text-marigold-400" />
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream-100/80">
                <MapPin className="h-4 w-4 text-marigold-400" />
                {company.area}
              </li>
            </ul>
            <Link
              to="/#quote"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-marigold-500 px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-marigold-400"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-cream-100/10 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-cream-100/40">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="text-xs text-cream-100/40">
            {company.hours}
          </p>
        </div>
      </div>
    </footer>
  );
}
