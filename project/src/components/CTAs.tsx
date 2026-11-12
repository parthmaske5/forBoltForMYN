import { Phone, MessageCircle } from 'lucide-react';
import { company } from '@/content/site';

interface QuoteButtonProps {
  variant?: 'primary' | 'secondary';
  className?: string;
  label?: string;
}

export function QuoteButton({ variant = 'primary', className = '', label = 'Get a Quote' }: QuoteButtonProps) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  return (
    <a href="/#quote" className={`${base} ${className}`}>
      {label}
    </a>
  );
}

export function WhatsAppLink({ className = '' }: { className?: string }) {
  return (
    <a
      href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, '')}`}
      className={`btn-ghost ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
    </a>
  );
}

export function PhoneLink({ className = '' }: { className?: string }) {
  return (
    <a href={`tel:${company.phone.replace(/[^0-9+]/g, '')}`} className={`btn-ghost ${className}`}>
      <Phone className="h-4 w-4" />
      Call
    </a>
  );
}
