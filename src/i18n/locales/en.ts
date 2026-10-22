/** English is the source of truth: every other locale must have the same shape (see `Translation`). */
export const en = {
  nav: {
    home: 'Home',
    about: 'About',
    blog: 'Blog',
    team: 'Our team',
  },
  header: {
    mainNavigation: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },
  titles: {
    dedicated: { line1: 'Dedicated', line2: 'to life' },
    insights: { line1: 'Insights', line2: 'for you' },
  },
  hero: {
    title: 'Dedicated to living',
    alt: 'Interior with a peach velvet armchair and a gold bar cart',
  },
  intro: {
    title: 'Excceptional living',
  },
  projects: {
    label: 'Projects',
  },
  dedicated: {
    explore: 'Explore',
    alt1: 'Living room with a wooden slat ceiling, a round mirror and a rattan sideboard',
    alt2: 'Dining room with a glass table and a view of the sea',
  },
  video: {
    play: 'Play the studio video',
    alt: 'People around a wooden table taking notes during a meeting',
  },
  services: {
    label: 'Our services',
    design: {
      label: 'Design',
      alt: 'Dark interior with a window and curtains',
    },
    featured: {
      alt: 'Living room with two rattan pendant lamps, a grey sofa and a round coffee table',
    },
    planning: {
      label: 'Planning',
      alt: 'Living room with framed pictures above a sofa',
    },
    interior: {
      label: 'Interior',
      alt: 'Bedroom with large windows',
    },
  },
  insights: {
    allPosts: 'All posts',
    featureAlt: 'Bathroom with a wooden vanity, white marble tiles and a glass door to the garden',
    posts: {
      'art-of-feng-shui': {
        title: 'The Art of Feng Shui : More Design Ideas',
        category: 'Interior',
        alt: 'Wooden staircase with a glass balustrade',
      },
      'contemporary-architecture': {
        title: 'Contemporary Architecture & Design',
        category: 'Ideas',
      },
      'home-interior-ideas': {
        title: 'Home Interior Design Ideas',
        category: 'Exterior',
      },
    },
  },
  products: {
    sale: 'Sale',
    new: 'New',
    alt: {
      'product-1': 'Mixed grey and brown stone tiles',
      'product-2': 'Dark grey diagonal stone tiles',
      'product-3': 'Rose coloured textured stone tiles',
      'product-4': 'Beige travertine tiles',
      'product-5': 'Light grey concrete tiles',
      'product-6': 'Grey stone tiles',
    },
  },
  testimonial: {
    label: 'Testimonial',
  },
  stats: {
    label: 'De Arco in numbers',
    items: {
      project: 'Project',
      clients: 'Clients',
      pavilions: 'Pavilions',
      awards: 'Awards',
      spaces: 'Spaces',
      workers: 'Workers',
    },
  },
  clients: {
    title: 'Our clients',
    readAll: 'Read all review',
    alt: {
      'review-1': 'Smiling woman with long red hair',
      'review-2': 'Smiling man talking on the phone',
      'review-3': 'Man in a dark suit and a red tie',
    },
  },
  tagline: {
    title: 'Bulding exceptional living experience',
  },
  footer: {
    tagline: 'We build exceptional living experience for 35 years',
    contact: 'Contact',
    projects: 'Projects',
    address: 'Address',
    email: 'Email',
    telephone: 'Telephone',
    copyright: 'Copyright ©{{year}} – De Arco – All Rights Reserved.',
    links: {
      residential: 'Residential',
      interior: 'Interior',
      competitions: 'Competitions',
      reuse: 'Reuse',
    },
  },
}

type Widen<T> = { [K in keyof T]: T[K] extends string ? string : Widen<T[K]> }

export type Translation = Widen<typeof en>
