import type { Metadata } from 'next';
import AntdRegistry from '@/lib/antdRegistry';
import StyledComponentsRegistry from '@/lib/styledComponentsRegistry';

export const metadata: Metadata = {
  title: 'snip',
  description: 'snip',
  viewport: 'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <AntdRegistry>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </AntdRegistry>
      </body>
    </html>
  );
}
