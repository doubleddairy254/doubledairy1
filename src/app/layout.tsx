import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DoubleDDairy Digital | Innovative Mobile Experiences',
  description: 'DoubleDDairy builds modern, high-performance Android applications using advanced technologies and intuitive, user-focused design.',
  keywords: ['mobile apps', 'android development', 'react native', 'expo', 'app development', 'doubleddairy'],
  authors: [{ name: 'DoubleDDairy' }],
  creator: 'DoubleDDairy',
  publisher: 'DoubleDDairy',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-body antialiased selection:bg-primary/20 bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
