import './globals.css';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rajiv Agarwal — Full-stack + AI Engineer',
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
};

import SmoothScroll from '@/components/ui/SmoothScroll';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background antialiased">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
