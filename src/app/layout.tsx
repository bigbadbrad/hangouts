// /app/layout.tsx
import * as React from 'react';
import type { Viewport, Metadata } from 'next';

import '@/styles/global.css';
import { UserProvider } from '@/contexts/user-context';
import { LocalizationProvider } from '@/components/core/localization-provider';
import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { GoogleAnalytics } from '@/utils/GoogleAnalytics';

export const viewport = { width: 'device-width', initialScale: 1 } satisfies Viewport;

export const metadata: Metadata = {
  metadataBase: new URL('https://hangouts.fun'),
  alternates: {
    canonical: 'https://hangouts.fun',
  },
  title: {
    default: 'Hangouts — 3D Chat That Comes Alive',
    template: '%s',
  },
  description:
    '3D chat that comes alive. Hangouts — private rooms, live voice, worlds that react. The best 3D chat for real hangouts with friends.',
  keywords: ['3d chat', 'hangouts', '3d chat app', 'private 3d chat', 'live 3d chat', '3d chat rooms'],
  openGraph: {
    siteName: 'Hangouts',
    url: 'https://hangouts.fun',
    title: 'Hangouts — 3D Chat That Comes Alive',
    description:
      '3D chat that comes alive. Hangouts — private rooms, live voice, worlds that react. The best 3D chat for real hangouts with friends.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hangouts — 3D Chat That Comes Alive',
    description:
      '3D chat that comes alive. Hangouts — private rooms, live voice, worlds that react. The best 3D chat for real hangouts with friends.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'Hangouts',
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Hangouts',
    description: '3D chat that comes alive. Private rooms, live voice, worlds that react.',
    url: 'https://hangouts.fun',
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics />
        <LocalizationProvider>
          <UserProvider>
            <ThemeProvider>
              <LayoutWrapper>
                {children}
              </LayoutWrapper>
            </ThemeProvider>
          </UserProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
