import type { RoomType } from '@/content/paintStudio';

interface RoomPreviewProps {
  room: RoomType;
  wallColor: string;
  accentColor: string;
  trimColor: string;
}

/**
 * SVG-based room renderer. The wall, accent wall, and trim/ceiling colours
 * change in real time based on the visitor's selections.
 */
export function RoomPreview({ room, wallColor, accentColor, trimColor }: RoomPreviewProps) {
  if (room.scene === 'living') {
    return (
      <svg viewBox="0 0 800 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        {/* Back wall */}
        <rect x="0" y="0" width="800" height="380" fill={wallColor} />
        {/* Accent wall section (right side) */}
        <rect x="520" y="0" width="280" height="380" fill={accentColor} />
        {/* Ceiling */}
        <rect x="0" y="0" width="800" height="40" fill={trimColor} />
        {/* Floor */}
        <polygon points="0,380 800,380 800,500 0,500" fill="#C4A884" />
        {/* Floor texture lines */}
        <line x1="0" y1="410" x2="800" y2="410" stroke="#B89A72" strokeWidth="1" opacity="0.4" />
        <line x1="0" y1="445" x2="800" y2="445" stroke="#B89A72" strokeWidth="1" opacity="0.4" />
        {/* Baseboard */}
        <rect x="0" y="370" width="520" height="12" fill={trimColor} />
        <rect x="520" y="370" width="280" height="12" fill={trimColor} />
        {/* Window on left wall */}
        <rect x="80" y="80" width="160" height="140" rx="4" fill="#EAF0F4" opacity="0.7" />
        <rect x="80" y="80" width="160" height="140" rx="4" fill="none" stroke={trimColor} strokeWidth="4" />
        <line x1="160" y1="80" x2="160" y2="220" stroke={trimColor} strokeWidth="3" />
        <line x1="80" y1="150" x2="240" y2="150" stroke={trimColor} strokeWidth="3" />
        {/* Sofa */}
        <rect x="300" y="280" width="200" height="70" rx="10" fill="#6B6B6B" opacity="0.85" />
        <rect x="310" y="270" width="60" height="30" rx="6" fill="#525252" opacity="0.85" />
        <rect x="430" y="270" width="60" height="30" rx="6" fill="#525252" opacity="0.85" />
        {/* Side table */}
        <rect x="540" y="310" width="50" height="50" rx="4" fill="#8A8A8A" opacity="0.7" />
        {/* Lamp */}
        <circle cx="565" cy="295" r="18" fill="#FFEDCC" opacity="0.8" />
        <rect x="563" y="295" width="4" height="20" fill="#525252" />
        {/* Plant */}
        <rect x="640" y="320" width="30" height="40" rx="4" fill="#92480C" opacity="0.7" />
        <circle cx="655" cy="300" r="25" fill="#546344" opacity="0.6" />
        <circle cx="645" cy="290" r="18" fill="#6B7C56" opacity="0.6" />
        <circle cx="668" cy="295" r="16" fill="#889872" opacity="0.6" />
        {/* Frame on accent wall */}
        <rect x="600" y="100" width="80" height="100" rx="2" fill={trimColor} />
        <rect x="606" y="106" width="68" height="88" rx="1" fill="#E0D0BC" opacity="0.5" />
      </svg>
    );
  }

  if (room.scene === 'bedroom') {
    return (
      <svg viewBox="0 0 800 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        {/* Back wall */}
        <rect x="0" y="0" width="800" height="370" fill={wallColor} />
        {/* Accent wall (headboard area) */}
        <rect x="250" y="0" width="300" height="370" fill={accentColor} />
        {/* Ceiling */}
        <rect x="0" y="0" width="800" height="35" fill={trimColor} />
        {/* Floor */}
        <polygon points="0,370 800,370 800,500 0,500" fill="#B89A72" />
        <line x1="0" y1="400" x2="800" y2="400" stroke="#A88A60" strokeWidth="1" opacity="0.3" />
        <line x1="0" y1="440" x2="800" y2="440" stroke="#A88A60" strokeWidth="1" opacity="0.3" />
        {/* Baseboard */}
        <rect x="0" y="360" width="800" height="12" fill={trimColor} />
        {/* Bed */}
        <rect x="270" y="300" width="260" height="80" rx="8" fill="#6B6B6B" opacity="0.8" />
        {/* Headboard */}
        <rect x="280" y="200" width="240" height="110" rx="12" fill="#3D3D3D" opacity="0.75" />
        {/* Pillows */}
        <rect x="300" y="290" width="90" height="30" rx="6" fill="#F5EFE6" opacity="0.85" />
        <rect x="410" y="290" width="90" height="30" rx="6" fill="#F5EFE6" opacity="0.85" />
        {/* Bedside tables */}
        <rect x="180" y="320" width="70" height="50" rx="4" fill="#8A8A8A" opacity="0.6" />
        <rect x="550" y="320" width="70" height="50" rx="4" fill="#8A8A8A" opacity="0.6" />
        {/* Lamps */}
        <circle cx="215" cy="305" r="14" fill="#FFEDCC" opacity="0.7" />
        <rect x="213" y="305" width="4" height="18" fill="#525252" />
        <circle cx="585" cy="305" r="14" fill="#FFEDCC" opacity="0.7" />
        <rect x="583" y="305" width="4" height="18" fill="#525252" />
        {/* Window left */}
        <rect x="50" y="80" width="100" height="130" rx="4" fill="#EAF0F4" opacity="0.6" />
        <rect x="50" y="80" width="100" height="130" rx="4" fill="none" stroke={trimColor} strokeWidth="3" />
        <line x1="100" y1="80" x2="100" y2="210" stroke={trimColor} strokeWidth="2" />
        {/* Frame on right */}
        <rect x="660" y="90" width="70" height="90" rx="2" fill={trimColor} />
        <rect x="666" y="96" width="58" height="78" rx="1" fill="#E0D0BC" opacity="0.4" />
      </svg>
    );
  }

  // Kitchen
  return (
    <svg viewBox="0 0 800 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      {/* Back wall */}
      <rect x="0" y="0" width="800" height="370" fill={wallColor} />
      {/* Accent wall section (upper cabinets area) */}
      <rect x="0" y="0" width="800" height="180" fill={accentColor} opacity="0.5" />
      {/* Ceiling */}
      <rect x="0" y="0" width="800" height="30" fill={trimColor} />
      {/* Floor */}
      <polygon points="0,370 800,370 800,500 0,500" fill="#D6D4D0" />
      <line x1="0" y1="410" x2="800" y2="410" stroke="#B5B2AC" strokeWidth="1" opacity="0.4" />
      <line x1="0" y1="445" x2="800" y2="445" stroke="#B5B2AC" strokeWidth="1" opacity="0.4" />
      {/* Baseboard */}
      <rect x="0" y="360" width="800" height="12" fill={trimColor} />
      {/* Upper cabinets */}
      <rect x="50" y="50" width="120" height="100" rx="3" fill="#8A8A8A" opacity="0.5" />
      <rect x="180" y="50" width="120" height="100" rx="3" fill="#8A8A8A" opacity="0.5" />
      <line x1="110" y1="50" x2="110" y2="150" stroke="#6B6B6B" strokeWidth="1.5" opacity="0.4" />
      <line x1="240" y1="50" x2="240" y2="150" stroke="#6B6B6B" strokeWidth="1.5" opacity="0.4" />
      {/* Lower cabinets / counter */}
      <rect x="30" y="240" width="500" height="120" rx="4" fill="#9B9888" opacity="0.7" />
      <rect x="30" y="230" width="500" height="15" rx="2" fill="#1A1A1A" opacity="0.6" />
      {/* Cabinet doors */}
      <line x1="155" y1="245" x2="155" y2="355" stroke="#6B6B6B" strokeWidth="1.5" opacity="0.4" />
      <line x1="280" y1="245" x2="280" y2="355" stroke="#6B6B6B" strokeWidth="1.5" opacity="0.4" />
      <line x1="405" y1="245" x2="405" y2="355" stroke="#6B6B6B" strokeWidth="1.5" opacity="0.4" />
      {/* Stove */}
      <rect x="180" y="232" width="60" height="12" rx="2" fill="#3D3D3D" opacity="0.7" />
      <circle cx="195" cy="238" r="4" fill="#525252" />
      <circle cx="225" cy="238" r="4" fill="#525252" />
      {/* Sink */}
      <rect x="310" y="232" width="50" height="12" rx="2" fill="#CDD6C3" opacity="0.6" />
      {/* Range hood */}
      <path d="M170 50 L170 30 L250 30 L250 50 Z" fill="#6B6B6B" opacity="0.5" />
      {/* Window right side */}
      <rect x="600" y="70" width="140" height="120" rx="4" fill="#EAF0F4" opacity="0.6" />
      <rect x="600" y="70" width="140" height="120" rx="4" fill="none" stroke={trimColor} strokeWidth="3" />
      <line x1="670" y1="70" x2="670" y2="190" stroke={trimColor} strokeWidth="2" />
      <line x1="600" y1="130" x2="740" y2="130" stroke={trimColor} strokeWidth="2" />
      {/* Island hint */}
      <rect x="320" y="300" width="200" height="60" rx="6" fill="#8A8A8A" opacity="0.3" />
    </svg>
  );
}
