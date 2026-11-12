export interface RoomType {
  id: string;
  label: string;
  description: string;
  /** SVG scene key — maps to the renderer */
  scene: 'living' | 'bedroom' | 'kitchen';
}

export interface PaintColor {
  id: string;
  name: string;
  hex: string;
  /** Suggested use context */
  mood: string;
}

export interface PaintPalette {
  id: string;
  name: string;
  description: string;
  colors: PaintColor[];
}

export interface PaintFinish {
  id: string;
  name: string;
  description: string;
  bestFor: string;
}

export const paintStudio = {
  eyebrow: 'Paint Studio',
  heading: 'Imagine it before we paint it.',
  intro:
    'Pick a room, explore colour palettes, and see how different combinations could transform your space. When you find a look you like, send it to us for a quote.',
  enquiryCta: 'Enquire about painting',
  resetLabel: 'Reset selections',
  wallLabel: 'Wall colour',
  accentLabel: 'Accent wall',
  trimLabel: 'Trim & ceiling',
  roomLabel: 'Room',
  paletteLabel: 'Palette',
  finishLabel: 'Finish',
  finishInfoHeading: 'Paint finishes explained',
  climateHeading: 'Painting in Malaysian conditions',
  climateIntro:
    'General guidance for hot, humid climates. We\u2019ll advise on the best products for your specific project during quotation.',
};

export const roomTypes: RoomType[] = [
  {
    id: 'living',
    label: 'Living Room',
    description: 'The heart of the home — where colour sets the mood for everyday life.',
    scene: 'living',
  },
  {
    id: 'bedroom',
    label: 'Bedroom',
    description: 'A personal retreat — calmer tones for rest and relaxation.',
    scene: 'bedroom',
  },
  {
    id: 'kitchen',
    label: 'Kitchen',
    description: 'A working space — colours that balance warmth and cleanliness.',
    scene: 'kitchen',
  },
];

export const palettes: PaintPalette[] = [
  {
    id: 'warm-neutrals',
    name: 'Warm Neutrals',
    description: 'Soft, inviting tones that make any room feel like home.',
    colors: [
      { id: 'linen-white', name: 'Linen White', hex: '#F5EFE6', mood: 'Airy & open' },
      { id: 'warm-sand', name: 'Warm Sand', hex: '#E0D0BC', mood: 'Cosy & grounded' },
      { id: 'soft-taupe', name: 'Soft Taupe', hex: '#C4B39A', mood: 'Sophisticated' },
      { id: 'clay-mist', name: 'Clay Mist', hex: '#D4BBF5', mood: 'Gentle warmth' },
    ],
  },
  {
    id: 'calm-cool',
    name: 'Calm & Cool',
    description: 'Serene blues and greens that bring a sense of calm.',
    colors: [
      { id: 'misty-blue', name: 'Misty Blue', hex: '#B8CCD8', mood: 'Tranquil' },
      { id: 'sage-whisper', name: 'Sage Whisper', hex: '#C2CFB8', mood: 'Natural & fresh' },
      { id: 'dove-grey', name: 'Dove Grey', hex: '#D6D4D0', mood: 'Quiet elegance' },
      { id: 'sea-glass', name: 'Sea Glass', hex: '#A8C9C0', mood: 'Refreshing' },
    ],
  },
  {
    id: 'bold-accent',
    name: 'Bold Accents',
    description: 'Statement colours for a confident, characterful space.',
    colors: [
      { id: 'terracotta', name: 'Terracotta', hex: '#C67D5D', mood: 'Warm & earthy' },
      { id: 'deep-teal', name: 'Deep Teal', hex: '#2E6B66', mood: 'Rich & grounding' },
      { id: 'mustard-glow', name: 'Mustard Glow', hex: '#E0A52E', mood: 'Energetic' },
      { id: 'plum-noir', name: 'Plum Noir', hex: '#5C3A52', mood: 'Dramatic' },
    ],
  },
  {
    id: 'earthy-tones',
    name: 'Earthy Tones',
    description: 'Grounded, natural colours inspired by the landscape.',
    colors: [
      { id: 'forest-floor', name: 'Forest Floor', hex: '#4A5D3A', mood: 'Deep & natural' },
      { id: 'stone-grey', name: 'Stone Grey', hex: '#9B9888', mood: 'Solid & timeless' },
      { id: 'burnt-sienna', name: 'Burnt Sienna', hex: '#A0522D', mood: 'Warm rust' },
      { id: 'oak-cream', name: 'Oak Cream', hex: '#E8DBC5', mood: 'Soft & woody' },
    ],
  },
];

export const finishes: PaintFinish[] = [
  {
    id: 'matte',
    name: 'Matte',
    description: 'No shine — absorbs light and hides minor imperfections.',
    bestFor: 'Living rooms, bedrooms, and ceilings',
  },
  {
    id: 'eggshell',
    name: 'Eggshell',
    description: 'A subtle sheen — more washable than matte with a soft finish.',
    bestFor: 'Living areas, dining rooms, and hallways',
  },
  {
    id: 'satin',
    name: 'Satin',
    description: 'A smooth, pearl-like finish — durable and easy to clean.',
    bestFor: 'Kitchens, bathrooms, and children\u2019s rooms',
  },
  {
    id: 'semi-gloss',
    name: 'Semi-Gloss',
    description: 'A noticeable shine — highly durable and moisture-resistant.',
    bestFor: 'Trim, doors, cabinets, and high-moisture areas',
  },
];

export const climateTips: { title: string; body: string }[] = [
  {
    title: 'Humidity & mould resistance',
    body: 'In humid climates, opt for mould-resistant paint formulations, especially in bathrooms, kitchens, and exterior walls. Proper surface preparation and anti-fungal primers help prevent mould growth.',
  },
  {
    title: 'Heat-reflective exterior paints',
    body: 'Lighter exterior colours and heat-reflective coatings can help reduce indoor temperatures by reflecting more sunlight — a practical consideration for Malaysian homes.',
  },
  {
    title: 'Monsoon & rain exposure',
    body: 'Exterior walls exposed to heavy rain benefit from water-resistant, elastomeric paints that flex with temperature changes and resist cracking and water penetration.',
  },
  {
    title: 'Drying conditions',
    body: 'High humidity slows paint drying. We plan painting around weather conditions to ensure proper curing and a lasting finish.',
  },
];
