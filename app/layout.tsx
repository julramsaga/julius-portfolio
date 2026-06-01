import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './globals.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme } from './theme';
import type { Metadata } from 'next'; // 👈 add this

export const metadata: Metadata = {  // 👈 add Metadata type
  metadataBase: new URL('https://julius-ramon-saga.vercel.app'),
  alternates: {
    canonical: '/',                   // 👈 add this
  },
  title: 'Julius Ramon Saga | UX/UI Designer & Developer',
  description: 'UX/UI Designer, Product Designer, Frontend / Full-Stack Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Notifications position="top-right" zIndex={9999}/>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}