interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: 'left' | 'center';
  className?: string;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = 'left',
  className = '',
  id,
}: SectionHeadingProps) {
  return (
    <div
      id={id}
      className={`${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] text-ink-900 text-balance">
        {heading}
      </h2>
      {intro && (
        <p className="mt-5 text-base lg:text-lg leading-relaxed text-ink-600 text-pretty">
          {intro}
        </p>
      )}
    </div>
  );
}
