import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Hammer, Flower2, MapPin, ImageOff, ArrowUpRight, Tag } from 'lucide-react';
import {
  projects,
  projectFilters,
  proofOfWork,
  type Project,
  type ProjectCategory,
  type ProjectTag,
} from '@/content/projects';
import { SectionHeading } from './SectionHeading';
import { BeforeAfter } from './BeforeAfter';
import { QuoteButton } from './CTAs';

type FilterValue = 'all' | ProjectCategory | ProjectTag;

export function ProofOfWork() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  const filtered = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'small' || activeFilter === 'major') return p.category === activeFilter;
    return p.tags.includes(activeFilter as ProjectTag);
  });

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="proof-of-work" className="bg-cream-50 py-20 lg:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow={proofOfWork.eyebrow}
          heading={proofOfWork.heading}
          intro={proofOfWork.intro}
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeFilter === f.value
                  ? 'bg-ink-900 text-cream-50'
                  : 'bg-ink-900/[0.05] text-ink-700 hover:bg-ink-900/[0.1]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Placeholder note */}
        <div className="mt-6 flex items-start gap-2.5 rounded-lg bg-marigold-50 border border-marigold-200/60 px-4 py-3">
          <ImageOff className="h-4 w-4 text-marigold-600 shrink-0 mt-0.5" />
          <p className="text-xs leading-relaxed text-ink-600">
            {proofOfWork.placeholderNote}
          </p>
        </div>

        {/* Featured projects — large editorial layout */}
        {featured.length > 0 && (
          <div className="mt-12 space-y-12 lg:space-y-16">
            {featured.map((project, idx) => (
              <FeaturedProject
                key={project.id}
                project={project}
                reversed={idx % 2 === 1}
              />
            ))}
          </div>
        )}

        {/* Remaining projects — asymmetric grid */}
        {rest.length > 0 && (
          <div className="mt-16">
            {activeFilter === 'all' && (
              <div className="mb-8">
                <h3 className="font-display text-2xl font-semibold text-ink-900">
                  {proofOfWork.smallWorksHeading}
                </h3>
                <p className="mt-2 text-sm text-ink-500 max-w-xl">
                  {proofOfWork.smallWorksIntro}
                </p>
              </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center text-center">
          <p className="text-base text-ink-600 max-w-md text-pretty">
            Have a project in mind? We handle everything from small repairs to full builds.
          </p>
          <QuoteButton className="mt-6" />
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ project, reversed }: { project: Project; reversed: boolean }) {
  return (
    <article className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
      {/* Image */}
      <div className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}>
        <Link to={`/projects/${project.id}`} className="block group">
          {project.hasBeforeAfter && project.beforeImage && project.afterImage ? (
            <BeforeAfter
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              beforeLabel={proofOfWork.beforeLabel}
              afterLabel={proofOfWork.afterLabel}
              alt={project.imageAlt}
            />
          ) : (
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl card-shadow">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-ink-900/60 px-3 py-1 text-xs font-medium text-cream-50 backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/10 transition-colors duration-300" />
            </div>
          )}
        </Link>
      </div>

      {/* Story */}
      <div className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="rounded-full bg-marigold-100 px-3 py-1 text-xs font-semibold text-marigold-700">
            {project.scale}
          </span>
          <span className="flex items-center gap-1 text-xs text-ink-400">
            <MapPin className="h-3 w-3" />
            {project.location}
          </span>
        </div>

        <h3 className="font-display text-2xl lg:text-3xl font-semibold text-ink-900 leading-tight">
          {project.title}
        </h3>

        {/* Blueprint → Build → Bloom story */}
        <div className="mt-6 space-y-5">
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

        <Link
          to={`/projects/${project.id}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-800 transition-colors hover:text-marigold-600 group"
        >
          View project
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
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

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group rounded-xl overflow-hidden bg-cream-100 border border-ink-900/6 card-shadow card-shadow-hover block"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full bg-ink-900/60 px-2.5 py-0.5 text-[11px] font-medium text-cream-50 backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>

        {/* Starting price badge for small jobs */}
        {project.startingPrice && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-marigold-500 px-3 py-1.5 text-xs font-bold text-ink-900 shadow-lg shadow-marigold-500/30">
            <Tag className="h-3 w-3" />
            {project.startingPrice}
          </div>
        )}

        {/* Scale label for non-priced (major) projects */}
        {!project.startingPrice && (
          <span className="absolute bottom-3 right-3 rounded-full bg-cream-50/90 px-2.5 py-0.5 text-[11px] font-medium text-ink-700 backdrop-blur-sm">
            {project.scale}
          </span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/5 transition-colors duration-300" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-display text-base font-semibold text-ink-900">{project.title}</h4>
          <ArrowUpRight className="h-4 w-4 text-ink-400 shrink-0 mt-1 transition-all group-hover:text-marigold-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="mt-1 text-xs text-ink-400 flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          {project.location}
        </p>
      </div>
    </Link>
  );
}
