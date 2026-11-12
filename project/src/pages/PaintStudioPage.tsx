import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  RotateCcw,
  Droplet,
  Sun,
  Wind,
  Thermometer,
  ArrowLeft,
  ArrowRight,
  Check,
  Palette,
  Sofa,
  BedDouble,
  ChefHat,
  Sparkles,
  Send,
} from 'lucide-react';
import {
  paintStudio,
  roomTypes,
  palettes,
  finishes,
  climateTips,
  type PaintColor,
  type PaintPalette,
} from '@/content/paintStudio';
import { RoomPreview } from '@/components/RoomPreview';
import { Footer } from '@/components/Footer';

const DEFAULT_WALL = '#F5EFE6';
const DEFAULT_ACCENT = '#E0D0BC';
const DEFAULT_TRIM = '#FBF8F4';

const climateIcons = [Wind, Sun, Droplet, Thermometer];
const roomIcons: Record<string, React.ReactNode> = {
  living: <Sofa className="h-5 w-5" />,
  bedroom: <BedDouble className="h-5 w-5" />,
  kitchen: <ChefHat className="h-5 w-5" />,
};

const STEPS = ['Room', 'Mood', 'Palette', 'Finishes', 'Review'] as const;
type StepIndex = 0 | 1 | 2 | 3 | 4;

export function PaintStudioPage() {
  const [step, setStep] = useState<StepIndex>(0);
  const [selectedRoom, setSelectedRoom] = useState(roomTypes[0]);
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [selectedPalette, setSelectedPalette] = useState<PaintPalette>(palettes[0]);
  const [wallColor, setWallColor] = useState<PaintColor>(palettes[0].colors[0]);
  const [accentColor, setAccentColor] = useState<PaintColor>(palettes[0].colors[1]);
  const [trimColor, setTrimColor] = useState<PaintColor>({
    id: 'trim-default',
    name: 'Linen White',
    hex: DEFAULT_TRIM,
    mood: 'Clean & bright',
  });
  const [selectedFinish, setSelectedFinish] = useState(finishes[1]);

  const selectPalette = (palette: PaintPalette) => {
    setSelectedPalette(palette);
    setWallColor(palette.colors[0]);
    setAccentColor(palette.colors[1] ?? palette.colors[0]);
  };

  const reset = () => {
    setStep(0);
    setSelectedRoom(roomTypes[0]);
    setSelectedMood('');
    setSelectedPalette(palettes[0]);
    setWallColor(palettes[0].colors[0]);
    setAccentColor(palettes[0].colors[1] ?? palettes[0].colors[0]);
    setTrimColor({ id: 'trim-default', name: 'Linen White', hex: DEFAULT_TRIM, mood: 'Clean & bright' });
    setSelectedFinish(finishes[1]);
  };

  const canAdvance = step !== 1 || selectedMood !== '';

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Top spacing for fixed header */}
      <div className="pt-20" />

      {/* Page header */}
      <header className="bg-cream-100 py-12 lg:py-16 border-b border-ink-900/6">
        <div className="section-container">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-600 transition-colors hover:text-marigold-600 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
          <div className="flex items-center gap-2.5 mb-3">
            <Palette className="h-5 w-5 text-marigold-600" />
            <p className="eyebrow">{paintStudio.eyebrow}</p>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tighter2 text-ink-900 text-balance max-w-3xl">
            {paintStudio.heading}
          </h1>
          <p className="mt-5 max-w-2xl text-base lg:text-lg leading-relaxed text-ink-600 text-pretty">
            {paintStudio.intro}
          </p>
        </div>
      </header>

      {/* Step indicator */}
      <div className="bg-cream-50 border-b border-ink-900/6 py-5">
        <div className="section-container">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-none">
            {STEPS.map((label, idx) => {
              const isActive = step === idx;
              const isDone = step > idx;
              return (
                <div key={label} className="flex items-center gap-2 sm:gap-4 shrink-0">
                  <button
                    onClick={() => setStep(idx as StepIndex)}
                    className={`flex items-center gap-2 rounded-full px-3 sm:px-4 py-2 text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-ink-900 text-cream-50'
                        : isDone
                        ? 'bg-sage-100 text-sage-700 hover:bg-sage-200'
                        : 'bg-ink-900/[0.05] text-ink-500 hover:bg-ink-900/[0.1]'
                    }`}
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold">
                      {isDone ? <Check className="h-3 w-3" /> : idx + 1}
                    </span>
                    {label}
                  </button>
                  {idx < STEPS.length - 1 && (
                    <span className="h-px w-4 sm:w-8 bg-ink-900/15" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="section-container py-12 lg:py-16">
        {/* Step 0: Select Room */}
        {step === 0 && (
          <div className="animate-fade-in">
            <StepHeading
              title="Which space are you painting?"
              subtitle="Start by choosing the room you'd like to transform. Each space has different considerations."
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {roomTypes.map((room) => (
                <button
                  key={room.id}
                  onClick={() => setSelectedRoom(room)}
                  className={`group rounded-2xl border-2 p-7 text-left transition-all ${
                    selectedRoom.id === room.id
                      ? 'border-marigold-500 bg-marigold-50'
                      : 'border-ink-900/8 bg-cream-50 hover:border-ink-900/20'
                  }`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                    selectedRoom.id === room.id
                      ? 'bg-marigold-500 text-ink-900'
                      : 'bg-ink-900/[0.05] text-ink-600 group-hover:bg-ink-900/[0.1]'
                  }`}>
                    {roomIcons[room.scene]}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
                    {room.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 text-pretty">
                    {room.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Choose Mood */}
        {step === 1 && (
          <div className="animate-fade-in">
            <StepHeading
              title="What mood do you want?"
              subtitle="The feeling you want to create guides the colour direction. Pick one that resonates."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood.id)}
                  className={`group rounded-2xl border-2 p-6 text-left transition-all ${
                    selectedMood === mood.id
                      ? 'border-marigold-500 bg-marigold-50'
                      : 'border-ink-900/8 bg-cream-50 hover:border-ink-900/20'
                  }`}
                >
                  <div className="flex gap-1.5 mb-3">
                    {mood.swatches.map((hex) => (
                      <span
                        key={hex}
                        className="h-8 w-8 rounded-lg border border-ink-900/10"
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink-900">
                    {mood.label}
                  </h3>
                  <p className="mt-1 text-sm text-ink-500 leading-relaxed">
                    {mood.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Explore Palette & Colours */}
        {step === 2 && (
          <div className="animate-fade-in grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <StepHeading
                title="Explore colours"
                subtitle="Pick a palette, then choose your wall, accent, and trim colours. See them live in the preview."
              />
              <div className="mt-6 lg:sticky lg:top-24">
                <div className="flex gap-2 mb-4">
                  {roomTypes.map((room) => (
                    <button
                      key={room.id}
                      onClick={() => setSelectedRoom(room)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                        selectedRoom.id === room.id
                          ? 'bg-ink-900 text-cream-50'
                          : 'bg-ink-900/[0.05] text-ink-700 hover:bg-ink-900/[0.1]'
                      }`}
                    >
                      {room.label}
                    </button>
                  ))}
                </div>
                <div className="relative aspect-[8/5] overflow-hidden rounded-2xl card-shadow border border-ink-900/8">
                  <RoomPreview
                    room={selectedRoom}
                    wallColor={wallColor.hex}
                    accentColor={accentColor.hex}
                    trimColor={trimColor.hex}
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    <ColorChip label={paintStudio.wallLabel} color={wallColor} />
                    <ColorChip label={paintStudio.accentLabel} color={accentColor} />
                    <ColorChip label={paintStudio.trimLabel} color={trimColor} />
                  </div>
                </div>
                <p className="mt-4 text-sm text-ink-500 leading-relaxed text-pretty">
                  {selectedRoom.description}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-7">
              {/* Palette selector */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500 mb-3">
                  {paintStudio.paletteLabel}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {palettes.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => selectPalette(p)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                        selectedPalette.id === p.id
                          ? 'bg-marigold-500 text-ink-900'
                          : 'bg-ink-900/[0.05] text-ink-700 hover:bg-ink-900/[0.1]'
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-ink-500 leading-relaxed mb-4">
                  {selectedPalette.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {selectedPalette.colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setWallColor(color)}
                      className={`group flex items-center gap-3 rounded-xl border p-3 text-left transition-all ${
                        wallColor.id === color.id
                          ? 'border-ink-900 bg-cream-50'
                          : 'border-ink-900/8 bg-cream-50/50 hover:border-ink-900/20'
                      }`}
                    >
                      <span
                        className="h-10 w-10 shrink-0 rounded-lg border border-ink-900/10"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-ink-900 truncate">{color.name}</span>
                        <span className="block text-xs text-ink-400 truncate">{color.mood}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Accent wall */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500 mb-3">
                  {paintStudio.accentLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedPalette.colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setAccentColor(color)}
                      className={`h-10 w-10 rounded-lg border-2 transition-all ${
                        accentColor.id === color.id
                          ? 'border-ink-900 scale-110'
                          : 'border-ink-900/10 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={`${color.name} — ${color.mood}`}
                      aria-label={`Accent colour: ${color.name}`}
                    />
                  ))}
                </div>
              </div>

              {/* Trim */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500 mb-3">
                  {paintStudio.trimLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {palettes[0].colors.slice(0, 2).map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setTrimColor(color)}
                      className={`h-10 w-10 rounded-lg border-2 transition-all ${
                        trimColor.id === color.id
                          ? 'border-ink-900 scale-110'
                          : 'border-ink-900/10 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                      aria-label={`Trim colour: ${color.name}`}
                    />
                  ))}
                  <button
                    onClick={() => setTrimColor({ id: 'trim-default', name: 'Linen White', hex: DEFAULT_TRIM, mood: 'Clean & bright' })}
                    className={`h-10 w-10 rounded-lg border-2 transition-all ${
                      trimColor.id === 'trim-default'
                        ? 'border-ink-900 scale-110'
                        : 'border-ink-900/10 hover:scale-105'
                    }`}
                    style={{ backgroundColor: DEFAULT_TRIM }}
                    title="Linen White"
                    aria-label="Trim colour: Linen White"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Finishes */}
        {step === 3 && (
          <div className="animate-fade-in">
            <StepHeading
              title="Choose your finish"
              subtitle="The finish affects how light interacts with the colour, and how durable it is in different spaces."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {finishes.map((finish) => (
                <button
                  key={finish.id}
                  onClick={() => setSelectedFinish(finish)}
                  className={`group rounded-2xl border-2 p-6 text-left transition-all ${
                    selectedFinish.id === finish.id
                      ? 'border-marigold-500 bg-marigold-50'
                      : 'border-ink-900/8 bg-cream-50 hover:border-ink-900/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold text-ink-900">
                      {finish.name}
                    </h3>
                    {selectedFinish.id === finish.id && (
                      <Check className="h-5 w-5 text-marigold-600" />
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600 text-pretty">
                    {finish.description}
                  </p>
                  <p className="mt-3 text-xs font-medium text-ink-400">
                    Best for: {finish.bestFor}
                  </p>
                </button>
              ))}
            </div>

            {/* Climate tips */}
            <div className="mt-12 rounded-2xl bg-cream-100 border border-ink-900/8 p-7 lg:p-8">
              <div className="flex items-center gap-2.5 mb-5">
                <Thermometer className="h-5 w-5 text-marigold-600" />
                <h3 className="font-display text-xl font-semibold text-ink-900">
                  {paintStudio.climateHeading}
                </h3>
              </div>
              <p className="mb-5 text-sm text-ink-600 leading-relaxed text-pretty">
                {paintStudio.climateIntro}
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                {climateTips.map((tip, idx) => {
                  const Icon = climateIcons[idx % climateIcons.length];
                  return (
                    <div key={tip.title} className="flex gap-3">
                      <Icon className="h-4 w-4 text-sage-500 shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-ink-900">{tip.title}</p>
                        <p className="mt-0.5 text-sm text-ink-600 leading-relaxed text-pretty">{tip.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Review & Enquire */}
        {step === 4 && (
          <div className="animate-fade-in grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <StepHeading
                title="Your selections"
                subtitle="Here's a summary of everything you've chosen. Send it to us and we'll prepare a painting quote for your space."
              />
              <div className="mt-6 relative aspect-[8/5] overflow-hidden rounded-2xl card-shadow border border-ink-900/8">
                <RoomPreview
                  room={selectedRoom}
                  wallColor={wallColor.hex}
                  accentColor={accentColor.hex}
                  trimColor={trimColor.hex}
                />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  <ColorChip label={paintStudio.wallLabel} color={wallColor} />
                  <ColorChip label={paintStudio.accentLabel} color={accentColor} />
                  <ColorChip label={paintStudio.trimLabel} color={trimColor} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-cream-100 border border-ink-900/8 p-6 lg:p-7 space-y-4">
                <h3 className="font-display text-lg font-semibold text-ink-900">
                  Summary
                </h3>
                <SummaryRow label="Room" value={selectedRoom.label} />
                <SummaryRow label="Mood" value={moods.find((m) => m.id === selectedMood)?.label ?? '[Not selected]'} />
                <SummaryRow label="Palette" value={selectedPalette.name} />
                <ColorSummaryRow label="Wall" color={wallColor} />
                <ColorSummaryRow label="Accent" color={accentColor} />
                <ColorSummaryRow label="Trim" color={trimColor} />
                <SummaryRow label="Finish" value={selectedFinish.name} />
              </div>

              <div className="mt-6 rounded-2xl bg-marigold-50 border border-marigold-200/60 p-6">
                <div className="flex items-center gap-2.5 mb-2">
                  <Sparkles className="h-5 w-5 text-marigold-600" />
                  <p className="text-sm font-semibold text-ink-900">Ready to enquire?</p>
                </div>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Send us your selections and we'll prepare a painting quote for your space.
                </p>
                <a
                  href="/#quote"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-marigold-500 px-7 py-3.5 text-sm font-semibold text-ink-900 transition-all hover:bg-marigold-400 active:scale-[0.98]"
                >
                  <Send className="h-4 w-4" />
                  {paintStudio.enquiryCta}
                </a>
              </div>

              <button
                onClick={reset}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink-600 transition-colors hover:text-marigold-600"
              >
                <RotateCcw className="h-4 w-4" />
                {paintStudio.resetLabel}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Navigation footer */}
      <div className="border-t border-ink-900/6 bg-cream-100 py-6">
        <div className="section-container flex items-center justify-between">
          <button
            onClick={() => setStep(Math.max(0, step - 1) as StepIndex)}
            disabled={step === 0}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-ink-700 transition-all hover:bg-ink-900/[0.04] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <span className="text-xs text-ink-400 tabular-nums">
            Step {step + 1} of {STEPS.length}
          </span>
          {step < 4 ? (
            <button
              onClick={() => canAdvance && setStep(Math.min(4, step + 1) as StepIndex)}
              disabled={!canAdvance}
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-all hover:bg-ink-800 active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <a
              href="/#quote"
              className="inline-flex items-center gap-2 rounded-full bg-marigold-500 px-5 py-2.5 text-sm font-semibold text-ink-900 transition-all hover:bg-marigold-400 active:scale-[0.98]"
            >
              <Send className="h-4 w-4" />
              Enquire
            </a>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

const moods = [
  {
    id: 'calm',
    label: 'Calm & Serene',
    description: 'Soft, muted tones that create a peaceful atmosphere.',
    swatches: ['#B8CCD8', '#C2CFB8', '#D6D4D0'],
  },
  {
    id: 'warm',
    label: 'Warm & Cosy',
    description: 'Earthy, inviting colours that make a space feel like home.',
    swatches: ['#E0D0BC', '#C67D5D', '#E8DBC5'],
  },
  {
    id: 'bold',
    label: 'Bold & Expressive',
    description: 'Confident colours that make a statement.',
    swatches: ['#C67D5D', '#2E6B66', '#E0A52E'],
  },
  {
    id: 'natural',
    label: 'Natural & Grounded',
    description: 'Organic tones inspired by the landscape.',
    swatches: ['#4A5D3A', '#9B9888', '#E8DBC5'],
  },
  {
    id: 'bright',
    label: 'Bright & Airy',
    description: 'Light, open colours that maximise the sense of space.',
    swatches: ['#F5EFE6', '#FBF8F4', '#EFE7D8'],
  },
  {
    id: 'dramatic',
    label: 'Moody & Dramatic',
    description: 'Deep, rich colours for a sophisticated atmosphere.',
    swatches: ['#2E6B66', '#5C3A52', '#1A1A1A'],
  },
];

function StepHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold leading-[1.15] text-ink-900 text-balance">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-ink-600 text-pretty">
        {subtitle}
      </p>
    </div>
  );
}

function ColorChip({ label, color }: { label: string; color: PaintColor }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-ink-900/70 px-3 py-1.5 backdrop-blur-sm">
      <span
        className="h-4 w-4 rounded-full border border-cream-50/30"
        style={{ backgroundColor: color.hex }}
      />
      <span className="text-xs font-medium text-cream-50">
        {label}: {color.name}
      </span>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-ink-900/6 pb-3 last:border-0">
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-400">{label}</span>
      <span className="text-sm font-semibold text-ink-900">{value}</span>
    </div>
  );
}

function ColorSummaryRow({ label, color }: { label: string; color: PaintColor }) {
  return (
    <div className="flex items-center justify-between border-b border-ink-900/6 pb-3 last:border-0">
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-400">{label}</span>
      <div className="flex items-center gap-2">
        <span
          className="h-5 w-5 rounded-md border border-ink-900/10"
          style={{ backgroundColor: color.hex }}
        />
        <span className="text-sm font-semibold text-ink-900">{color.name}</span>
      </div>
    </div>
  );
}
