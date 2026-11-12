import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Compass,
  Hammer,
  Flower2,
  ImageOff,
  Tag,
  Info,
  ClipboardList,
  AlertTriangle,
  Lightbulb,
  Sparkles,
} from 'lucide-react';
import { projects, proofOfWork } from '@/content/projects';
import { company } from '@/content/site';
import { BeforeAfter } from '@/components/BeforeAfter';
import { Footer } from '@/components/Footer';

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.tags.some((t) => project.tags.includes(t)))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Back bar */}
      <div className="pt-24 pb-4 bg-cream-50 border-b border-ink-900/6">
        <div className="section-container">
          <Link
            to="/#proof-of-work"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-600 transition-colors hover:text-marigold-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all work
          </Link>
        </div>
      </div>

      {/* Hero header */}
      <header className="bg-cream-50 pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-5">
            <span className="rounded-full bg-marigold-100 px-3 py-1 text-xs font-semibold text-marigold-700">
              {project.scale}
            </span>
            <div className="flex gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-ink-900/[0.06] px-3 py-1 text-xs font-medium text-ink-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tighter2 text-ink-900 text-balance max-w-4xl">
            {project.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {project.location}
            </span>
            {project.startingPrice && (
              <span className="flex items-center gap-1.5 font-semibold text-marigold-700">
                <Tag className="h-4 w-4" />
                {project.startingPrice}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Main image / before-after */}
      <div className="section-container">
        <div className="relative overflow-hidden rounded-2xl card-shadow border border-ink-900/8">
          {project.hasBeforeAfter && project.beforeImage && project.afterImage ? (
            <BeforeAfter
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              beforeLabel={proofOfWork.beforeLabel}
              afterLabel={proofOfWork.afterLabel}
              alt={project.imageAlt}
            />
          ) : (
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Placeholder note */}
        <div className="mt-4 flex items-start gap-2.5 rounded-lg bg-marigold-50 border border-marigold-200/60 px-4 py-3">
          <ImageOff className="h-4 w-4 text-marigold-600 shrink-0 mt-0.5" />
          <p className="text-xs leading-relaxed text-ink-600">
            {proofOfWork.placeholderNote}
          </p>
        </div>
      </div>

      {/* Detail sections */}
      {project.detail && (
        <div className="section-container mt-16 lg:mt-20">
          <div className="grid gap-10 lg:gap-14 lg:grid-cols-12">
            {/* Left rail: section nav / metadata */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="rounded-2xl bg-cream-100 border border-ink-900/8 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400 mb-4">
                    Project Overview
                  </p>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-xs text-ink-400">Category</dt>
                      <dd className="text-sm font-semibold text-ink-900 mt-0.5">
                        {project.scale}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-ink-400">Location</dt>
                      <dd className="text-sm font-semibold text-ink-900 mt-0.5">
                        {project.location}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-ink-400">Scope</dt>
                      <dd className="text-sm font-semibold text-ink-900 mt-0.5">
                        {project.tags.join(' · ')}
                      </dd>
                    </div>
                    {project.startingPrice && (
                      <div>
                        <dt className="text-xs text-ink-400">Indicative rate</dt>
                        <dd className="text-sm font-semibold text-marigold-700 mt-0.5">
                          {project.startingPrice}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>

                <div className="rounded-2xl bg-marigold-50 border border-marigold-200/60 p-6">
                  <p className="text-sm font-semibold text-ink-900">
                    Need a similar job done?
                  </p>
                  <p className="mt-1 text-sm text-ink-600 leading-relaxed">
                    Send us your details and we{"\u2019"}ll prepare a quote.
                  </p>
                  <a
                    href="/#quote"
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-marigold-500 px-6 py-3 text-sm font-semibold text-ink-900 transition-all hover:bg-marigold-400"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </aside>

            {/* Right: detail content */}
            <div className="lg:col-span-8 space-y-12">
              <DetailSection
                icon={<ClipboardList className="h-5 w-5" />}
                label="Client Requirements & Expectations"
              >
                {project.detail.clientRequirements}
              </DetailSection>

              <DetailSection
                icon={<AlertTriangle className="h-5 w-5" />}
                label="The Challenge"
              >
                {project.detail.challenge}
              </DetailSection>

              <DetailSection
                icon={<Lightbulb className="h-5 w-5" />}
                label="Our Approach"
              >
                {project.detail.approach}
              </DetailSection>

              {/* Blueprint → Build → Bloom narrative */}
              <div className="rounded-2xl bg-cream-100 border border-ink-900/8 p-7 lg:p-8">
                <h3 className="font-display text-xl font-semibold text-ink-900 mb-6">
                  How we approached this project
                </h3>
                <div className="space-y-6">
                  <StoryStep
                    icon={<Compass className="h-4 w-4" />}
                    label={proofOfWork.blueprintLabel}
                    text={project.story.blueprint}
                    color="text-blueprint-500"
                  />
                  <StoryStep
                    icon={<Hammer className="h-4 w-4" />}
                    label={proofOfWork.buildLabel}
                    text={project.story.build}
                    color="text-marigold-600"
                  />
                  <StoryStep
                    icon={<Flower2 className="h-4 w-4" />}
                    label={proofOfWork.bloomLabel}
                    text={project.story.bloom}
                    color="text-sage-500"
                  />
                </div>
              </div>

              <DetailSection
                icon={<Hammer className="h-5 w-5" />}
                label="Work Carried Out"
              >
                {project.detail.workCarriedOut}
              </DetailSection>

              <DetailSection
                icon={<Sparkles className="h-5 w-5" />}
                label="The Outcome"
              >
                {project.detail.outcome}
              </DetailSection>

              <DetailSection
                icon={<Info className="h-5 w-5" />}
                label="Additional Information"
              >
                {project.detail.additionalInfo}
              </DetailSection>

              {/* Gallery placeholder */}
              <div>
                <h3 className="font-display text-xl font-semibold text-ink-900 mb-5">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[4/3] rounded-xl border border-dashed border-ink-900/15 bg-cream-100 flex items-center justify-center">
                    <div className="text-center">
                      <ImageOff className="h-6 w-6 text-ink-400 mx-auto" />
                      <p className="mt-2 text-xs text-ink-400">Photo 1</p>
                    </div>
                  </div>
                  <div className="aspect-[4/3] rounded-xl border border-dashed border-ink-900/15 bg-cream-100 flex items-center justify-center">
                    <div className="text-center">
                      <ImageOff className="h-6 w-6 text-ink-400 mx-auto" />
                      <p className="mt-2 text-xs text-ink-400">Photo 2</p>
                    </div>
                  </div>
                  <div className="aspect-[4/3] rounded-xl border border-dashed border-ink-900/15 bg-cream-100 flex items-center justify-center">
                    <div className="text-center">
                      <ImageOff className="h-6 w-6 text-ink-400 mx-auto" />
                      <p className="mt-2 text-xs text-ink-400">Before</p>
                    </div>
                  </div>
                  <div className="aspect-[4/3] rounded-xl border border-dashed border-ink-900/15 bg-cream-100 flex items-center justify-center">
                    <div className="text-center">
                      <ImageOff className="h-6 w-6 text-ink-400 mx-auto" />
                      <p className="mt-2 text-xs text-ink-400">After</p>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-ink-400">
                  [Real project photographs will appear here once supplied.]
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <div className="section-container mt-20 lg:mt-24 mb-20">
          <h3 className="font-display text-2xl font-semibold text-ink-900 mb-8">
            Related work
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((rp) => (
              <Link
                key={rp.id}
                to={`/projects/${rp.id}`}
                className="group rounded-xl overflow-hidden bg-cream-100 border border-ink-900/6 card-shadow card-shadow-hover block"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={rp.image}
                    alt={rp.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {rp.startingPrice && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-marigold-500 px-3 py-1.5 text-xs font-bold text-ink-900 shadow-lg shadow-marigold-500/30">
                      <Tag className="h-3 w-3" />
                      {rp.startingPrice}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-display text-lg font-semibold text-ink-900">{rp.title}</h4>
                    <ArrowUpRight className="h-4 w-4 text-ink-400 shrink-0 mt-1 transition-all group-hover:text-marigold-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-1 text-xs text-ink-400">{rp.scale}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

function DetailSection({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-marigold-100 text-marigold-600">
          {icon}
        </span>
        <h3 className="font-display text-xl font-semibold text-ink-900">{label}</h3>
      </div>
      <p className="text-base leading-relaxed text-ink-600 text-pretty ml-12">
        {children}
      </p>
    </div>
  );
}

function StoryStep({
  icon,
  label,
  text,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
  color: string;
}) {
  return (
    <div className="flex gap-3.5">
      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-900/[0.04] ${color}`}>
        {icon}
      </div>
      <div>
        <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${color}`}>{label}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-600 text-pretty">{text}</p>
      </div>
    </div>
  );
}
