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
      <body>
        <StyledComponentsRegistry>
          <AntdRegistry>{children}</AntdRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
