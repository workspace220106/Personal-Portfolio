import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Cursor from '@/components/ui/Cursor';
import Grain from '@/components/ui/Grain';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const SITE = 'https://rajivagarwal.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Rajiv Agarwal — Full-stack + AI Engineer',
    template: '%s — Rajiv Agarwal',
  },
  description:
    'Rajiv Agarwal — Full-stack + AI, not AI on top of full-stack. COO @ ONJI · ML Intern @ FlyRank AI. React, Next.js, FastAPI, RAG, custom CNNs, Transformers from scratch — 29 shipped projects, every one live.',
  keywords: [
    'Rajiv Agarwal',
    'Full-stack engineer',
    'AI engineer',
    'Machine learning',
    'React',
    'Next.js',
    'FastAPI',
    'RAG',
    'FAISS',
    'Gemini',
    'Flutter',
    'FCRIT',
  ],
  authors: [{ name: 'Rajiv Agarwal' }],
  creator: 'Rajiv Agarwal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE,
    title: 'Rajiv Agarwal — Full-stack + AI Engineer',
    description:
      'Full-stack + AI, not AI on top of full-stack. 29 shipped projects, every one live.',
    siteName: 'Rajiv Agarwal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajiv Agarwal — Full-stack + AI Engineer',
    description:
      'Full-stack + AI, not AI on top of full-stack. 29 shipped projects, every one live.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Person schema — gives Google and OG scrapers structured facts.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rajiv Agarwal',
    url: SITE,
    jobTitle: 'Full-stack + AI Engineer',
    worksFor: { '@type': 'Organization', name: 'ONJI' },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Fr. C. Rodrigues Institute of Technology',
    },
    sameAs: [
      'https://github.com/workspace220106',
      'https://www.linkedin.com/in/rajiv-agarwal221/',
    ],
    email: 'mailto:workspace220106@gmail.com',
  };

  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`bg-background text-on-background antialiased ${spaceGrotesk.className}`}>
        {/* Accessibility — keyboard users land here first */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-black focus:px-4 focus:py-2 focus:rounded font-label-caps text-label-caps"
        >
          Skip to content
        </a>
        <Grain />
        <Cursor />
        <SmoothScroll>
          <Navbar />
          <div id="main-content">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
