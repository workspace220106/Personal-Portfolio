export interface Experience {
  title: string;
  company: string;
  date: string;
  icon: string;
  align: 'left' | 'right';
}

export interface Project {
  name: string;
  type: string;
  desc: string;
  img: string;
  link: string;
  align: 'start' | 'end';
  featured?: boolean;
}

export const experiences: Experience[] = [
  { 
    title: 'Scrum Master', 
    company: '@ ONJI', 
    date: 'JAN 2024 — PRESENT', 
    icon: 'groups', 
    align: 'right' 
  },
  { 
    title: 'AI Intern', 
    company: '@ INTERACTO AI', 
    date: 'JUL 2023 — DEC 2023', 
    icon: 'psychology', 
    align: 'left' 
  },
  { 
    title: 'Web Dev Intern', 
    company: '@ ONJI', 
    date: 'JAN 2023 — JUN 2023', 
    icon: 'code', 
    align: 'right' 
  },
  
  /* -------------------------------------------------------------
     TEMPLATE FOR NEW EXPERIENCES:
     To add a new experience section, uncomment the template below,
     fill in the details, and make sure the alignment alternates
     between 'left' and 'right' to look good on the timeline.
     ------------------------------------------------------------- */
  // {
  //   title: 'New Role Title',
  //   company: '@ COMPANY NAME',
  //   date: 'START DATE — END DATE',
  //   icon: 'work', // Material Icons identifier: 'work', 'code', 'psychology', 'groups', etc.
  //   align: 'left'
  // },
];

export const projects: Project[] = [
  {
    name: 'PacPay',
    type: 'Fintech',
    desc: 'Next-gen payment gateway with real-time analytics and high-performance infrastructure.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5EaU1wpVLyx6dfGkz7PWbYKaIGQqafqJF6isCAxcghlmZsPyIOw30jczDMLFsHV4em-pYIzYqnQKEV-3uIUVxECujqvS5dspnsBh6Kh5PVFlu6ZWSZ3bJ7Xy82I0t94mABhOU0I2vspnzhYyavrMQp3DOLRq-uWr917DVheiE77AyUoe17pOjGTJgLwl5Q_AvOwH6_TccyNFnNs9Xp6pyax6SrJ0nzfAgGkWle6OUhVAN_y8Or2lIhGyry42edwz389q_kZZE7xc',
    link: 'https://pacpay.vercel.app/',
    align: 'start',
    featured: true
  },
  {
    name: 'Aakash ERP',
    type: 'ERP',
    desc: 'Enterprise-grade inventory and resource management system.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCjTwbWGqamPAgaAeMlOumlU6TFBZRx-eH4zyGwW2j8M_HjqRBCcWjdfW2icWyy5FvmqT3pyp29c2JaxAVy1JG-okZQ-8js4U9IKydVHU6MzG-BdwBHpg_UIFXJP--K6PgozqOMtXATt4Bg80YulDpFbQHXTt-slk2l2UeEV89v13RJI0B1b_sXwtMrQY6ZGfSq0gxMuQfUVa6ny7Pg2Eo10hmUDA_Of57ecaZ-4KcFOA8Q5KWVv6TlgcAAjVCt_zKK78wzwY23z4',
    link: 'https://aakash-enterprises-frontend.vercel.app/',
    align: 'end'
  },
  {
    name: 'Aquacare',
    type: 'IOT',
    desc: 'An intelligent water management system designed for sustainable resource tracking and automated conservation.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDubbBplN-Ggsr9R4wfWe4EdsPOgazVzNmszAfWCiq_-EAjJ4NZ2Tvy7Gd9hig9RkWEXFX4XQRnILumNmH54Adr-abr28OasvMXUvBRqiEPPeH_nguSkcBpMmrOj0dJbXTtugnYAm23vy-gC-mNU_v7FiAhG0PrL3moAh7rhF8kCgPg_qQkeU11E2xtZg6g1glqotLxScbJSZVoaolptaifZ4e_t0dlRkDjp4hr2T1VWFJH9jLH2oe0w8rf6mxQX4z4PLlW9MBeqqY',
    link: 'https://aquacare-final.vercel.app/',
    align: 'start'
  },

  /* -------------------------------------------------------------
     TEMPLATE FOR NEW PROJECTS:
     To add a new project, uncomment the template below, fill in
     the details, and choose an alignment ('start' or 'end') to
     keep the layout alternating.
     ------------------------------------------------------------- */
  // {
  //   name: 'New Project Name',
  //   type: 'Project Type (e.g. AI/ML, Fullstack)',
  //   desc: 'A brief description of your new project.',
  //   img: 'https://images.unsplash.com/... or your custom url',
  //   link: 'https://your-project-link.com',
  //   align: 'end',
  //   featured: false
  // },
];
