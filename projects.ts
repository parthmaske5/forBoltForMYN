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
  location: string;
  scale: string;
  story: ProjectStory;
  featured?: boolean;
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
    featured: true,
    story: {
      blueprint:
        '[The challenge: the apartment condition and the owner\u2019s goals for the space.]',
      build:
        '[The work: painting, door replacement, wallpaper, LED installation and finishing — all coordinated through one point of contact.]',
      bloom:
        '[The result: a refreshed, modern apartment ready to move into.]',
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
    story: {
      blueprint: '[The need: a new or replacement heater for the property.]',
      build: '[The work: safe installation and connection of the heater unit.]',
      bloom: '[The result: a working heater, installed and tested.]',
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
    story: {
      blueprint: '[The need: damaged, outdated or leaking tiles requiring replacement.]',
      build: '[The work: removal of old tiles and installation of new ones, including surface preparation.]',
      bloom: '[The result: a clean, finished surface with fresh tiles.]',
    },
  },
  {
    id: 'interior-painting',
    title: 'Interior Painting',
    category: 'small',
    tags: ['Painting'],
    image:
      'https://images.pexels.com/photos/6764270/pexels-photo-6764270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Person applying paint to an indoor wall with a roller',
    hasBeforeAfter: false,
    location: '[Location]',
    scale: 'Small job',
    story: {
      blueprint: '[The need: refresh a room or property with new paint.]',
      build: '[The work: surface preparation, priming and painting to a clean finish.]',
      bloom: '[The result: freshly painted walls with an even, durable finish.]',
    },
  },
  {
    id: 'door-replacement',
    title: 'Door Replacement',
    category: 'small',
    tags: ['Repairs', 'Renovation'],
    image:
      'https://images.pexels.com/photos/5691502/pexels-photo-5691502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Worker installing a door with a cordless screwdriver',
    hasBeforeAfter: false,
    location: '[Location]',
    scale: 'Small job',
    story: {
      blueprint: '[The need: an old or damaged door requiring replacement.]',
      build: '[The work: removal of the old door and installation of the new one, including hinges and hardware.]',
      bloom: '[The result: a properly fitted, functional new door.]',
    },
  },
  {
    id: 'window-pane',
    title: 'Window Pane Installation',
    category: 'small',
    tags: ['Repairs'],
    image:
      'https://images.pexels.com/photos/5691515/pexels-photo-5691515.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Worker assembling a window with a cordless screwdriver',
    hasBeforeAfter: false,
    location: '[Location]',
    scale: 'Small job',
    story: {
      blueprint: '[The need: a broken or outdated window pane needing replacement.]',
      build: '[The work: careful removal and installation of new glass and frame.]',
      bloom: '[The result: a clean, secure, weathertight window.]',
    },
  },
  {
    id: 'bathroom-leak',
    title: 'Bathroom Leak Repair',
    category: 'small',
    tags: ['Repairs'],
    image:
      'https://images.pexels.com/photos/19866415/pexels-photo-19866415.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern minimalist bathroom with sink and mirror',
    hasBeforeAfter: false,
    location: '[Location]',
    scale: 'Small job',
    story: {
      blueprint: '[The need: a bathroom leak causing damage or concern.]',
      build: '[The work: leak detection, repair and any necessary tile or sealant work.]',
      bloom: '[The result: a watertight bathroom, leak resolved.]',
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
    story: {
      blueprint: '[The need: new wiring, a fault, or a safety concern with the electrical system.]',
      build: '[The work: installation, fault detection and troubleshooting by a qualified electrician.]',
      bloom: '[The result: a safe, functioning electrical system.]',
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
