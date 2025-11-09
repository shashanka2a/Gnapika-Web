import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Gnapika - Personalized Wooden Gifts | Crafted with Love',
  description: 'Create lasting memories with personalized wooden gifts. From elegant keepsakes to bespoke home decor, discover the timeless beauty of wood, uniquely yours.',
  keywords: ['personalized gifts', 'wooden gifts', 'custom engraving', 'handcrafted', 'wooden jewelry box', 'home decor'],
  authors: [{ name: 'Gnapika' }],
  icons: {
    icon: '/gnapika-logo.png',
    shortcut: '/gnapika-logo.png',
    apple: '/gnapika-logo.png',
  },
  openGraph: {
    title: 'Gnapika - Personalized Wooden Gifts',
    description: 'Create lasting memories with personalized wooden gifts. Crafted with love, engraved for life.',
    type: 'website',
    locale: 'en_US',
    images: ['/gnapika-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gnapika - Personalized Wooden Gifts',
    description: 'Create lasting memories with personalized wooden gifts.',
    images: ['/gnapika-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${lato.variable}`}>
      <body className="min-h-screen bg-[#f7f0e0]">
        {children}
      </body>
    </html>
  );
}

