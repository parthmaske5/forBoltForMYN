import { useState } from 'react';
import { RotateCcw, Droplet, Sun, Wind, Thermometer, Info } from 'lucide-react';
import {
  paintStudio,
  roomTypes,
  palettes,
  finishes,
  climateTips,
  type PaintColor,
} from '@/content/paintStudio';
import { SectionHeading } from './SectionHeading';
import { RoomPreview } from './RoomPreview';
import { QuoteButton } from './CTAs';

const DEFAULT_WALL = '#F5EFE6';
const DEFAULT_ACCENT = '#E0D0BC';
const DEFAULT_TRIM = '#FBF8F4';

const climateIcons = [Wind, Sun, Droplet, Thermometer];

export function PaintStudioSection() {
  const [selectedRoom, setSelectedRoom] = useState(roomTypes[0]);
  const [selectedPalette, setSelectedPalette] = useState(palettes[0]);
  const [wallColor, setWallColor] = useState<PaintColor>(
    palettes[0].colors[0]
  );
  const [accentColor, setAccentColor] = useState<PaintColor>(
    palettes[0].colors[1]
  );
  const [trimColor, setTrimColor] = useState<PaintColor>({
    id: 'trim-default',
    name: 'Linen White',
    hex: DEFAULT_TRIM,
    mood: 'Clean & bright',
  });

  const selectPalette = (paletteId: string) => {
    const palette = palettes.find((p) => p.id === paletteId);
    if (!palette) return;
    setSelectedPalette(palette);
    setWallColor(palette.colors[0]);
    setAccentColor(palette.colors[1] ?? palette.colors[0]);
  };

  const reset = () => {
    setSelectedRoom(roomTypes[0]);
    setSelectedPalette(palettes[0]);
    setWallColor(palettes[0].colors[0]);
    setAccentColor(palettes[0].colors[1] ?? palettes[0].colors[0]);
    setTrimColor({ id: 'trim-default', name: 'Linen White', hex: DEFAULT_TRIM, mood: 'Clean & bright' });
  };

  return (
    <section id="paint-studio" className="bg-cream-100 py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow={paintStudio.eyebrow}
          heading={paintStudio.heading}
          intro={paintStudio.intro}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left: Room preview (main visual focus) */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-24">
              {/* Room type selector */}
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

              {/* Room preview */}
              <div className="relative aspect-[8/5] overflow-hidden rounded-2xl card-shadow border border-ink-900/8">
                <RoomPreview
                  room={selectedRoom}
                  wallColor={wallColor.hex}
                  accentColor={accentColor.hex}
                  trimColor={trimColor.hex}
                />
                {/* Colour labels overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  <ColorChip label={paintStudio.wallLabel} color={wallColor} />
                  <ColorChip label={paintStudio.accentLabel} color={accentColor} />
                  <ColorChip label={paintStudio.trimLabel} color={trimColor} />
                </div>
              </div>

              <p className="mt-4 text-sm text-ink-500 leading-relaxed text-pretty">
                {selectedRoom.description}
              </p>

              {/* Reset */}
              <button
                onClick={reset}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink-600 transition-colors hover:text-marigold-600"
              >
                <RotateCcw className="h-4 w-4" />
                {paintStudio.resetLabel}
              </button>
            </div>
          </div>

          {/* Right: Controls */}
          <div className="lg:col-span-5 space-y-8">
            {/* Palette selector */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500 mb-3">
                {paintStudio.paletteLabel}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {palettes.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => selectPalette(p.id)}
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

              {/* Colour swatches */}
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

            {/* Accent wall colour */}
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

            {/* Trim colour */}
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

            {/* Enquiry CTA */}
            <div className="rounded-xl bg-marigold-50 border border-marigold-200/60 p-5">
              <p className="text-sm font-semibold text-ink-900">Found a look you like?</p>
              <p className="mt-1 text-sm text-ink-600 leading-relaxed">
                Send us your selections and we\u2019ll prepare a painting quote for your space.
              </p>
              <QuoteButton label={paintStudio.enquiryCta} className="mt-4" />
            </div>
          </div>
        </div>

        {/* Info panels: finishes + climate */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Finishes */}
          <div className="rounded-2xl bg-cream-50 border border-ink-900/8 p-7 lg:p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <Info className="h-5 w-5 text-marigold-600" />
              <h3 className="font-display text-xl font-semibold text-ink-900">
                {paintStudio.finishInfoHeading}
              </h3>
            </div>
            <div className="space-y-4">
              {finishes.map((finish) => (
                <div key={finish.id} className="border-l-2 border-marigold-200 pl-4">
                  <p className="text-sm font-semibold text-ink-900">{finish.name}</p>
                  <p className="mt-0.5 text-sm text-ink-600 leading-relaxed">{finish.description}</p>
                  <p className="mt-1 text-xs text-ink-400">
                    Best for: {finish.bestFor}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Climate tips */}
          <div className="rounded-2xl bg-cream-50 border border-ink-900/8 p-7 lg:p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <Thermometer className="h-5 w-5 text-marigold-600" />
              <h3 className="font-display text-xl font-semibold text-ink-900">
                {paintStudio.climateHeading}
              </h3>
            </div>
            <p className="mb-5 text-sm text-ink-600 leading-relaxed text-pretty">
              {paintStudio.climateIntro}
            </p>
            <div className="space-y-4">
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
      </div>
    </section>
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
