import { useRef, useState, useCallback, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  alt: string;
}

export function BeforeAfter({ beforeImage, afterImage, beforeLabel, afterLabel, alt }: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (e instanceof MouseEvent) updatePosition(e.clientX);
      else if (e.touches[0]) updatePosition(e.touches[0].clientX);
    };
    const onEnd = () => setDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onEnd);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [dragging, updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-ew-resize select-none"
      onMouseDown={(e) => { setDragging(true); updatePosition(e.clientX); }}
      onTouchStart={(e) => { setDragging(true); if (e.touches[0]) updatePosition(e.touches[0].clientX); }}
    >
      {/* After (full) */}
      <img
        src={afterImage}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <span className="absolute bottom-3 right-3 rounded-full bg-ink-900/70 px-3 py-1 text-xs font-medium text-cream-50 backdrop-blur-sm">
        {afterLabel}
      </span>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeImage}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: containerRef.current?.offsetWidth ?? '100%' }}
          draggable={false}
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-ink-900/70 px-3 py-1 text-xs font-medium text-cream-50 backdrop-blur-sm">
          {beforeLabel}
        </span>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-cream-50 shadow-lg pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-cream-50 shadow-xl">
          <MoveHorizontal className="h-5 w-5 text-ink-800" />
        </div>
      </div>
    </div>
  );
}
