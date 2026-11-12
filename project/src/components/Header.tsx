import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hammer } from 'lucide-react';
import { nav, company } from '@/content/site';
import { QuoteButton, WhatsAppLink, PhoneLink } from './CTAs';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm shadow-ink-900/5'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between py-4 lg:py-5">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={closeMenu}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-marigold-500 transition-transform group-hover:scale-105">
            <Hammer className="h-5 w-5 text-ink-900" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tightish text-ink-900">
            {company.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-900/[0.04] hover:text-ink-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <WhatsAppLink />
          <PhoneLink />
          <QuoteButton className="ml-2" />
        </div>

        <button
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-ink-900 hover:bg-ink-900/[0.06]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-cream-50 border-t border-ink-900/8">
          <div className="section-container py-6 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-base font-medium text-ink-800 hover:bg-ink-900/[0.04]"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 px-4 pt-4">
              <WhatsAppLink />
              <PhoneLink />
            </div>
            <div className="px-4 pt-3">
              <QuoteButton className="w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
