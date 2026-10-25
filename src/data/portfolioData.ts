export interface Experience {
  title: string;
  company: string;
  date: string;
  icon: string;
  align: 'left' | 'right';
  description?: string;
}

export interface Project {
  name: string;
  type: string;
  desc: string;
  img: string;
  link: string;
  align: 'start' | 'end';
  featured?: boolean;
  tags?: string[];
}

export interface Stat {
  label: string;
  value: string;
}

export const stats: Stat[] = [
  { label: 'ROLES HELD', value: '10 ACROSS 7 ORGS' },
  { label: 'PROJECTS SHIPPED', value: '29 REPOS' },
  { label: 'ON-TIME DELIVERY', value: '90%+ SPRINTS' },
  { label: 'PAGE LOAD', value: '−69% ONJI' },
];

export const experiences: Experience[] = [
  {
    title: 'Chief Operating Officer',
    company: '@ ONJI',
    date: 'AUG 2026 — PRESENT · REMOTE',
    icon: 'rocket_launch',
    align: 'right',
    description: 'Driving 90%+ on-time sprint delivery across a distributed eng team; grew engineering headcount by 3.'
  },
  {
    title: 'Machine Learning Intern',
    company: '@ FLYRANK AI',
    date: 'JUL 2026 — PRESENT · 4 MOS · REMOTE',
    icon: 'psychology',
    align: 'left',
    description: 'ML systems and AI agents — prompt engineering and search intelligence optimization for organic growth.'
  },
  {
    title: 'Program Committee Head',
    company: '@ IEEE FCRIT',
    date: 'JUL 2026 — PRESENT · ON-SITE',
    icon: 'workspace_premium',
    align: 'right',
    description: 'Leading the student IEEE chapter programming committee at FCRIT, Navi Mumbai.'
  },
  {
    title: 'Jt. Technical Head',
    company: '@ AI & DEEP LEARNING CLUB, FCRIT',
    date: 'JUL 2026 — PRESENT · ON-SITE',
    icon: 'network_intelligence',
    align: 'left',
    description: 'Co-leading technical programming for the AI & Deep Learning student club.'
  },
  {
    title: 'Full-stack Developer (Intern)',
    company: '@ AWAKENIQ',
    date: 'JUN 2026 — JUL 2026 · 2 MOS',
    icon: 'developer_mode',
    align: 'right',
    description: 'Built the student portal core (auth, enrollment, attendance) in React + Next.js — ~30% faster page response, weekly releases, zero critical regressions.'
  },
  {
    title: 'Scrum Master',
    company: '@ ONJI',
    date: 'JAN 2026 — SEP 2026 · REMOTE',
    icon: 'groups',
    align: 'left',
    description: 'End-to-end technical recruitment, standups, sprint planning, retrospectives. KPI tracking and structured feedback for a distributed eng team.'
  },
  {
    title: 'AI Intern',
    company: '@ INTERACTO AI',
    date: 'DEC 2025 — FEB 2026 · 3 MOS · PUNE',
    icon: 'smart_toy',
    align: 'right',
    description: 'Integrated core ML features into active production pipelines. Stack: Python, Git.'
  },
  {
    title: 'NSS Volunteer',
    company: '@ NSS FCRIT',
    date: 'JUL 2025 — PRESENT · 1 YR 4 MOS',
    icon: 'volunteer_activism',
    align: 'left',
    description: 'National Service Scheme community engagement at FCRIT.'
  },
  {
    title: 'Web Developer (Intern)',
    company: '@ ONJI',
    date: 'JAN 2025 — AUG 2025 · 8 MOS · REMOTE',
    icon: 'code',
    align: 'right',
    description: 'Built responsive React interfaces (+22% mobile engagement). API integration + code-splitting dropped page load −69%. Figma handoff workflow cut design→dev time −35%.'
  },
  {
    title: 'Finance & Sponsorship Head',
    company: '@ AGNEL CYBER CELL',
    date: 'JAN 2025 — JUN 2026 · 1 YR 6 MOS · ON-SITE',
    icon: 'account_balance',
    align: 'left',
    description: 'Owned sponsorship outreach and finance for the student cybersecurity cell.'
  },
];

export const projects: Project[] = [
  // ─── TIER 2 FEATURED (lead with the strongest new reveal) ────────────────
  {
    name: 'TRADELINE',
    type: 'FORENSICS / 3D',
    desc: 'Air-gapped Bitcoin forensics — Three.js 3D entity graph + Isolation Forest anomaly detection. SIH-grade investigative tool.',
    img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&q=80&auto=format&fit=crop',
    link: 'https://tradeline-psi.vercel.app/',
    align: 'start',
    featured: true,
    tags: ['Three.js', 'Isolation Forest', 'Python', 'React', 'Air-gapped']
  },

  // ─── TIER 1: ON-SITE, KEEP + IMPROVE ─────────────────────────────────────
  {
    name: 'PacPay',
    type: 'FINTECH / PWA',
    desc: 'Gamified financial PWA with an AI coach — XP system, real-time analytics, Gemini AI integration. Strongest product narrative.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5EaU1wpVLyx6dfGkz7PWbYKaIGQqafqJF6isCAxcghlmZsPyIOw30jczDMLFsHV4em-pYIzYqnQKEV-3uIUVxECujqvS5dspnsBh6Kh5PVFlu6ZWSZ3bJ7Xy82I0t94mABhOU0I2vspnzhYyavrMQp3DOLRq-uWr917DVheiE77AyUoe17pOjGTJgLwl5Q_AvOwH6_TccyNFnNs9Xp6pyax6SrJ0nzfAgGkWle6OUhVAN_y8Or2lIhGyry42edwz389q_kZZE7xc',
    link: 'https://pacpay.vercel.app/',
    align: 'end',
    featured: true,
    tags: ['Next.js', 'Gemini AI', 'PWA', 'Gamification']
  },
  {
    name: 'Yojana Sarthi',
    type: 'AI / RAG',
    desc: 'AI Citizen Scheme Portal — discover, compare, and verify eligibility for Indian govt schemes. FastAPI + RAG + FAISS + Gemini + React.',
    img: '/yojana-sarthi.png',
    link: 'https://yojana-sarthi-sand.vercel.app/',
    align: 'start',
    featured: true,
    tags: ['FastAPI', 'RAG', 'FAISS', 'Gemini', 'React']
  },
  {
    name: 'Aakash Enterprises',
    type: 'ERP',
    desc: 'Enterprise inventory + resource management. Most-iterated codebase — 85 commits, 8 Postgres tables. Automated data pipelines drove a 15% boost in sales efficiency.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCjTwbWGqamPAgaAeMlOumlU6TFBZRx-eH4zyGwW2j8M_HjqRBCcWjdfW2icWyy5FvmqT3pyp29c2JaxAVy1JG-okZQ-8js4U9IKydVHU6MzG-BdwBHpg_UIFXJP--K6PgozqOMtXATt4Bg80YulDpFbQHXTt-slk2l2UeEV89v13RJI0B1b_sXwtMrQY6ZGfSq0gxMuQfUVa6ny7Pg2Eo10hmUDA_Of57ecaZ-4KcFOA8Q5KWVv6TlgcAAjVCt_zKK78wzwY23z4',
    link: 'https://aakash-enterprises-frontend.vercel.app/',
    align: 'end',
    tags: ['Express 5', 'PostgreSQL', '85 commits', '8 PG tables']
  },
  {
    name: 'Aquapure',
    type: 'IOT / DATA',
    desc: 'Intelligent water management + conservation. Pulls live USGS + EPA datasets for real-time quality tracking.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDubbBplN-Ggsr9R4wfWe4EdsPOgazVzNmszAfWCiq_-EAjJ4NZ2Tvy7Gd9hig9RkWEXFX4XQRnILumNmH54Adr-abr28OasvMXUvBRqiEPPeH_nguSkcBpMmrOj0dJbXTtugnYAm23vy-gC-mNU_v7FiAhG0PrL3moAh7rhF8kCgPg_qQkeU11E2xtZg6g1glqotLxScbJSZVoaolptaifZ4e_t0dlRkDjp4hr2T1VWFJH9jLH2oe0w8rf6mxQX4z4PLlW9MBeqqY',
    link: 'https://aquacare-final.vercel.app/',
    align: 'start',
    tags: ['IoT', 'USGS', 'EPA', 'React']
  },

  // ─── TIER 2: STRONG, DEPLOYED, NEW TO THE SITE ───────────────────────────
  {
    name: 'Vocalize (ASL)',
    type: 'CV / CNN',
    desc: '29-class ASL sign recognition — custom CNN hitting 94%+ accuracy, sub-50ms inference, multi-language translation layer.',
    img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80&auto=format&fit=crop',
    link: 'https://asl-sign-recognition-alpha.vercel.app/',
    align: 'end',
    tags: ['CNN', 'MediaPipe', '94% acc', 'sub-50ms']
  },
  {
    name: 'Smart Agri IoT',
    type: 'IOT / AGTECH',
    desc: 'IoT-based agricultural monitoring — sensor telemetry, dashboarding, and automated advisories for small-plot farming.',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format&fit=crop',
    link: 'https://smart-iot-agricultural-system.vercel.app/',
    align: 'start',
    tags: ['IoT', 'Agriculture', 'Sensors']
  },
  {
    name: 'Aahar Kitchen',
    type: 'SAAS',
    desc: 'Kitchen / restaurant management SaaS — orders, inventory, and operations in one place.',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=80&auto=format&fit=crop',
    link: 'https://aahar-six.vercel.app/',
    align: 'end',
    tags: ['SaaS', 'Operations', 'React']
  },

  // ─── TIER 3: AI / AGENTS — "AI engineer" narrative ──────────────────────
  {
    name: 'Jarvis AI',
    type: 'AI AGENTS',
    desc: 'Multi-agent AI dev system targeted at above-average PCs. Companion to the FlyRank AI role.',
    img: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1600&q=80&auto=format&fit=crop',
    link: 'https://github.com/workspace220106/Jarvis-ai',
    align: 'start',
    tags: ['Multi-agent', 'LLM', 'Local']
  },
  {
    name: 'Attention Is All You Need',
    type: 'ML FUNDAMENTALS',
    desc: 'Transformer architecture implemented from scratch — not an API wrapper, actual ML fundamentals. Great AI/ML credibility signal.',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80&auto=format&fit=crop',
    link: 'https://github.com/workspace220106/Attention-Is-All-You-Need-Implementation',
    align: 'end',
    tags: ['Transformer', 'From scratch', 'PyTorch']
  },
];

export const techStack: string[] = [
  // Core web
  'REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND', 'VITE',
  // Backend
  'NODE.JS', 'EXPRESS', 'FASTAPI', 'FLASK', 'PYTHON',
  // Data
  'POSTGRESQL', 'FIREBASE',
  // ML / AI
  'TENSORFLOW', 'KERAS', 'SCIKIT-LEARN', 'OPENCV', 'MEDIAPIPE',
  'GEMINI API', 'FAISS', 'RAG',
  // 3D / mobile
  'THREE.JS', 'FLUTTER', 'DART', 'PWA',
  // Workflow
  'FIGMA', 'GIT', 'VERCEL', 'POWER BI', 'BLADE / PHP', 'AGILE',
];

export const narrativePillars = {
  tagline: 'Full-stack + AI, not AI on top of full-stack.',
  threads: [
    'Shipping cadence > perfection — 29 repos, most deployed live, sub-month build-ship cycles.',
    'Range — web, mobile, ML research, agents, IoT, forensics, PWA.',
    'From-scratch literacy — Transformer impl + CNN from scratch, not just an API-glue dev.',
  ],
};
