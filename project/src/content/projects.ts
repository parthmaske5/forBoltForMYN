export type ProjectCategory = 'small' | 'major';
export type ProjectTag =
  | 'Painting'
  | 'Roofing'
  | 'Renovation'
  | 'Construction'
  | 'Electrical'
  | 'Repairs'
  | 'Industrial';

export interface ProjectStory {
  blueprint: string;
  build: string;
  bloom: string;
}

export interface ProjectDetail {
  clientRequirements: string;
  challenge: string;
  approach: string;
  workCarriedOut: string;
  outcome: string;
  additionalInfo: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  tags: ProjectTag[];
  /** Image URL — clearly a placeholder/stock until real photos are supplied */
  image: string;
  imageAlt: string;
  /** Optional second image for before/after comparison */
  beforeImage?: string;
  afterImage?: string;
  /** Whether a genuine before/after photo pair exists */
  hasBeforeAfter: boolean;
  /** Additional gallery images for detail page */
  gallery?: { src: string; alt: string; caption?: string }[];
  location: string;
  scale: string;
  story: ProjectStory;
  /** Indicative starting price for small jobs — placeholder until company provides rates */
  startingPrice?: string;
  featured?: boolean;
  /** Detailed content for project detail page */
  detail?: ProjectDetail;
}

export const projects: Project[] = [
  {
    id: 'office-renovation',
    title: 'Office Renovation',
    category: 'major',
    tags: ['Renovation', 'Construction'],
    image:
      'https://images.pexels.com/photos/5505931/pexels-photo-5505931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Renovated office hallway with modern and rustic design elements',
    hasBeforeAfter: true,
    beforeImage:
      'https://images.pexels.com/photos/14840813/pexels-photo-14840813.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    afterImage:
      'https://images.pexels.com/photos/5505931/pexels-photo-5505931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: '[Location]',
    scale: 'Major project',
    featured: true,
    story: {
      blueprint:
        '[The challenge: describe the office condition before renovation and what the client needed.]',
      build:
        '[The work: scope of renovation, materials used, and the trades involved — handled by one team from start to finish.]',
      bloom:
        '[The result: the completed office space, delivered and ready for use.]',
    },
    detail: {
      clientRequirements: '[What the client asked for — space requirements, timeline, budget expectations, and any specific design preferences.]',
      challenge: '[The initial condition of the office and the key obstacles — structural, logistical, or design-related.]',
      approach: '[Our proposed design solution and how we planned the renovation in phases to minimise disruption.]',
      workCarriedOut: '[A detailed breakdown of the work carried out — demolition, structural changes, electrical, plumbing, painting, fittings, and finishing.]',
      outcome: '[The final result — what was delivered, how the space transformed, and the client\u2019s response.]',
      additionalInfo: '[Any other relevant details — materials sourced, special techniques used, or lessons learned during the project.]',
    },
  },
  {
    id: 'apartment-renovation',
    title: 'Apartment Renovation',
    category: 'major',
    tags: ['Renovation', 'Painting'],
    image:
      'https://images.pexels.com/photos/8146144/pexels-photo-8146144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Renovated apartment with open kitchen and living area',
    hasBeforeAfter: false,
    location: '[Location]',
    scale: 'Major project',
    story: {
      blueprint:
        '[The challenge: the apartment condition and the owner\u2019s goals for the space.]',
      build:
        '[The work: painting, door replacement, wallpaper, LED installation and finishing — all coordinated through one point of contact.]',
      bloom:
        '[The result: a refreshed, modern apartment ready to move into.]',
    },
    detail: {
      clientRequirements: '[What the apartment owner wanted to achieve — modernisation, layout changes, specific finishes.]',
      challenge: '[The condition of the apartment before renovation and any constraints of working within an occupied building.]',
      approach: '[Our renovation plan, including how we sequenced the trades to deliver efficiently.]',
      workCarriedOut: '[Detailed scope — painting, door replacement, wallpaper, LED installation, tiling, and finishing work.]',
      outcome: '[The transformed apartment and the owner\u2019s reaction to the finished space.]',
      additionalInfo: '[Any notable materials, techniques, or coordination details.]',
    },
  },
  {
    id: 'roof-replacement',
    title: 'Full Building Roof Replacement',
    category: 'major',
    tags: ['Roofing', 'Construction'],
    image:
      'https://images.pexels.com/photos/34524716/pexels-photo-34524716.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Construction worker repairing a rooftop on a high building',
    hasBeforeAfter: false,
    location: '[Location]',
    scale: 'Major project',
    story: {
      blueprint:
        '[The challenge: the existing roof condition and why replacement was needed.]',
      build:
        '[The work: removal of the old roof and installation of a new one across the entire building.]',
      bloom:
        '[The result: a weather-tight, durable roof protecting the building below.]',
    },
    detail: {
      clientRequirements: '[Why the roof needed replacement and what the building owner expected from the new roof.]',
      challenge: '[The condition of the existing roof, access constraints, and weather considerations.]',
      approach: '[Our plan for safe removal and installation, including how we protected the building below.]',
      workCarriedOut: '[Full scope — old roof removal, structural repairs if needed, new roofing system installation, and weatherproofing.]',
      outcome: '[A completed, weather-tight roof system protecting the entire building.]',
      additionalInfo: '[Materials used, warranty information, or any structural reinforcements carried out.]',
    },
  },
  {
    id: 'shed-installation',
    title: 'Shed Installation & Replacement',
    category: 'major',
    tags: ['Roofing', 'Construction'],
    image:
      'https://images.pexels.com/photos/17290735/pexels-photo-17290735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Wooden shed structure in a tropical outdoor setting',
    hasBeforeAfter: false,
    location: '[Location]',
    scale: 'Major project',
    story: {
      blueprint:
        '[The challenge: the need for a new or replacement shed on the property.]',
      build:
        '[The work: shed installation or replacement, tailored to the site and the owner\u2019s requirements.]',
      bloom:
        '[The result: a functional outdoor structure built to last.]',
    },
    detail: {
      clientRequirements: '[What the property owner needed — storage, shelter, or a specific use for the shed.]',
      challenge: '[Site conditions, sizing requirements, and material selection for durability.]',
      approach: '[Our design and build plan, tailored to the site layout and the owner\u2019s requirements.]',
      workCarriedOut: '[Site preparation, structure fabrication, installation, and finishing.]',
      outcome: '[A functional, durable outdoor structure ready for use.]',
      additionalInfo: '[Materials chosen, treatment for weather resistance, or custom features.]',
    },
  },
  {
    id: 'full-house-construction',
    title: 'Full House Construction',
    category: 'major',
    tags: ['Construction'],
    image:
      'https://images.pexels.com/photos/31197870/pexels-photo-31197870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Steel framework structure under construction',
    hasBeforeAfter: false,
    location: '[Location]',
    scale: 'Major project',
    story: {
      blueprint:
        '[The challenge: building from a blank site — including basement, structure and upper levels.]',
      build:
        '[The work: full construction from the ground up, including pillars, basement and structural work, carried out by one team with all equipment brought in-house.]',
      bloom:
        '[The result: a completed home, built to specification and ready for handover.]',
    },
    detail: {
      clientRequirements: '[The owner\u2019s vision for their home — size, layout, structural requirements, and key features.]',
      challenge: '[Building from a blank site, including ground preparation, basement excavation, and structural engineering.]',
      approach: '[Our construction plan from ground up — phased build covering foundation, structure, and upper levels.]',
      workCarriedOut: '[Full construction scope — site prep, foundation and basement, pillars and structural framework, walls, roofing, and basic finishing.]',
      outcome: '[A completed home structure, built to specification and ready for interior finishing and handover.]',
      additionalInfo: '[Structural specifications, materials used, or special engineering considerations.]',
    },
  },
  {
    id: 'industrial-infrastructure',
    title: 'Industrial Infrastructure',
    category: 'major',
    tags: ['Industrial', 'Construction'],
    image:
      'https://images.pexels.com/photos/36736681/pexels-photo-36736681.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Steel industrial structure with stairs and platforms',
    hasBeforeAfter: false,
    location: '[Location]',
    scale: 'Major project',
    story: {
      blueprint:
        '[The challenge: construction and infrastructure needed to support industrial machinery.]',
      build:
        '[The work: structural construction, pillars and supporting infrastructure — not the machinery itself.]',
      bloom:
        '[The result: a robust industrial foundation ready for equipment installation.]',
    },
    detail: {
      clientRequirements: '[What the industrial client needed — structural support for machinery, platforms, access infrastructure.]',
      challenge: '[Engineering requirements for load-bearing structures and the precision needed for industrial applications.]',
      approach: '[Our structural design and construction plan, engineered to support the specific machinery and operational needs.]',
      workCarriedOut: '[Structural construction, pillars, supporting infrastructure, platforms, and access structures.]',
      outcome: '[A robust industrial foundation ready for equipment installation and operation.]',
      additionalInfo: '[Engineering standards met, load specifications, or coordination with machinery suppliers.]',
    },
  },
  {
    id: 'heater-installation',
    title: 'Heater Installation',
    category: 'small',
    tags: ['Electrical', 'Repairs'],
    image:
      'https://images.pexels.com/photos/34938442/pexels-photo-34938442.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician inspecting and repairing a heating system',
    hasBeforeAfter: false,
    location: '[Location]',
    scale: 'Small job',
    startingPrice: '[From RM XX]',
    story: {
      blueprint: '[The need: a new or replacement heater for the property.]',
      build: '[The work: safe installation and connection of the heater unit.]',
      bloom: '[The result: a working heater, installed and tested.]',
    },
    detail: {
      clientRequirements: '[What the customer needed — a new heater installation or replacement of an existing unit.]',
      challenge: '[Any access or wiring considerations for the installation.]',
      approach: '[Our installation process, including safety checks and compliance with electrical standards.]',
      workCarriedOut: '[Heater unit installation, electrical connection, testing, and safety verification.]',
      outcome: '[A working, safely installed heater ready for daily use.]',
      additionalInfo: '[Brand or model recommendations, warranty information, or maintenance tips.]',
    },
  },
  {
    id: 'tile-replacement',
    title: 'Tile Replacement',
    category: 'small',
    tags: ['Repairs', 'Renovation'],
    image:
      'https://images.pexels.com/photos/32998547/pexels-photo-32998547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern bathroom with marble tiles and glass shower',
    hasBeforeAfter: false,
    location: '[Location]',
    scale: 'Small job',
    startingPrice: '[From RM XX]',
    story: {
      blueprint: '[The need: damaged, outdated or leaking tiles requiring replacement.]',
      build: '[The work: removal of old tiles and installation of new ones, including surface preparation.]',
      bloom: '[The result: a clean, finished surface with fresh tiles.]',
    },
    detail: {
      clientRequirements: '[Why the tiles needed replacement — damage, leaks, or aesthetic update.]',
      challenge: '[Surface condition under old tiles, waterproofing requirements, or pattern matching.]',
      approach: '[Our tile replacement process — removal, surface prep, waterproofing, and installation.]',
      workCarriedOut: '[Old tile removal, surface preparation, new tile installation, grouting, and sealing.]',
      outcome: '[A clean, professionally finished surface with fresh tiles.]',
      additionalInfo: '[Tile material recommendations, grout options, or waterproofing details.]',
    },
  },
  {
    id: 'interior-painting',
    title: 'Interior Painting',
    category: 'small',
    tags: ['Painting'],
    image:
      'https://images.pexels.com/photos/5691515/pexels-photo-5691515.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Worker painting a wall with a roller',
    hasBeforeAfter: false,
    location: '[Location]',
    scale: 'Small job',
    startingPrice: '[From RM XX]',
    story: {
      blueprint: '[The need: refreshing interior walls with a new colour or finish.]',
      build: '[The work: surface preparation, priming, and painting of interior walls and trim.]',
      bloom: '[The result: a clean, fresh-looking space with a professional paint finish.]',
    },
    detail: {
      clientRequirements: '[What the customer wanted — colour change, freshening up, or covering marks and damage.]',
      challenge: '[Wall condition, existing paint type, or coverage requirements.]',
      approach: '[Our painting process — surface preparation, priming, and application for a lasting finish.]',
      workCarriedOut: '[Surface prep, priming, two-coat painting of walls, trim, and ceiling if required.]',
      outcome: '[A refreshed interior with a smooth, professional paint finish.]',
      additionalInfo: '[Paint type and finish recommendations, or colour consultation details.]',
    },
  },
  {
    id: 'door-replacement',
    title: 'Door Replacement',
    category: 'small',
    tags: ['Repairs'],
    image:
      'https://images.pexels.com/photos/3789032/pexels-photo-3789032.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Wooden door being installed by a worker',
    hasBeforeAfter: false,
    location: '[Location]',
    scale: 'Small job',
    startingPrice: '[From RM XX]',
    story: {
      blueprint: '[The need: a damaged, outdated, or malfunctioning door needing replacement.]',
      build: '[The work: removal of the old door and installation of a new one, including hinges and hardware.]',
      bloom: '[The result: a properly fitted, smoothly operating new door.]',
    },
    detail: {
      clientRequirements: '[Why the door needed replacing — damage, style update, or security improvement.]',
      challenge: '[Frame condition, sizing, or matching existing hardware and finishes.]',
      approach: '[Our door replacement process — careful removal, frame adjustment, and precise installation.]',
      workCarriedOut: '[Old door removal, frame preparation, new door installation, hinge and hardware fitting, and adjustment.]',
      outcome: '[A properly fitted, smoothly operating new door.]',
      additionalInfo: '[Door material options, hardware recommendations, or finishing details.]',
    },
  },
  {
    id: 'electrical-installation',
    title: 'Electrical Installation & Troubleshooting',
    category: 'small',
    tags: ['Electrical'],
    image:
      'https://images.pexels.com/photos/3614763/pexels-photo-3614763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Exposed electrical wiring being installed during renovation',
    hasBeforeAfter: false,
    location: '[Location]',
    scale: 'Small job',
    startingPrice: '[From RM XX]',
    story: {
      blueprint: '[The need: new wiring, a fault, or a safety concern with the electrical system.]',
      build: '[The work: installation, fault detection and troubleshooting by a qualified electrician.]',
      bloom: '[The result: a safe, functioning electrical system.]',
    },
    detail: {
      clientRequirements: '[What the customer needed — new installation, fault diagnosis, or safety upgrade.]',
      challenge: '[Diagnosing intermittent faults, working within existing wiring, or access constraints.]',
      approach: '[Our diagnostic and installation process, including safety-first practices and compliance checks.]',
      workCarriedOut: '[Fault detection, wiring installation or repair, testing, and safety verification.]',
      outcome: '[A safe, properly functioning electrical system.]',
      additionalInfo: '[Compliance standards, safety recommendations, or maintenance advice.]',
    },
  },
  {
    id: 'major-building-painting',
    title: 'Major Building Painting',
    category: 'major',
    tags: ['Painting'],
    image:
      'https://images.pexels.com/photos/31608473/pexels-photo-31608473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Person painting a building exterior wall with a roller',
    hasBeforeAfter: false,
    location: '[Location]',
    scale: 'Major project',
    story: {
      blueprint: '[The challenge: a full building exterior requiring repainting.]',
      build: '[The work: surface preparation, priming and painting across the entire building exterior.]',
      bloom: '[The result: a refreshed, protected building exterior.]',
    },
    detail: {
      clientRequirements: '[Why the building needed repainting — weathering, aesthetic update, or protective coating.]',
      challenge: '[Building height, surface area, weather exposure, and access requirements.]',
      approach: '[Our exterior painting plan, including surface preparation, priming, and weather-resistant coating application.]',
      workCarriedOut: '[Full exterior surface preparation, priming, multi-coat painting, and protective finishing across the building.]',
      outcome: '[A refreshed, weather-protected building exterior with a durable finish.]',
      additionalInfo: '[Paint system used, weather-resistance properties, or maintenance recommendations.]',
    },
  },
];

export const projectFilters: { label: string; value: 'all' | ProjectCategory | ProjectTag }[] = [
  { label: 'All Work', value: 'all' },
  { label: 'Small Jobs', value: 'small' },
  { label: 'Major Projects', value: 'major' },
  { label: 'Painting', value: 'Painting' },
  { label: 'Roofing', value: 'Roofing' },
  { label: 'Construction', value: 'Construction' },
  { label: 'Electrical', value: 'Electrical' },
  { label: 'Repairs', value: 'Repairs' },
];

export const proofOfWork = {
  eyebrow: 'Proof of Work',
  heading: 'What we\u2019ve actually built.',
  intro:
    'Not a list of services — a record of results. From quick repairs to full constructions, here\u2019s what our team has delivered.',
  smallWorksHeading: 'Small Works',
  smallWorksIntro:
    'Specific repairs and installations for customers who need a job done right, without the runaround.',
  majorProjectsHeading: 'Major Projects',
  majorProjectsIntro:
    'Larger renovations, constructions and infrastructure — where our team\u2019s range and capability show.',
  blueprintLabel: 'Blueprint',
  buildLabel: 'Build',
  bloomLabel: 'Bloom',
  beforeLabel: 'Before',
  afterLabel: 'After',
  placeholderNote:
    'Images shown are illustrative placeholders. Real project photographs will replace them once supplied.',
};
