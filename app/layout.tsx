import './global.css';
import OfflineBanner from '@/components/wallet/ui/OfflineBanner';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Providers } from './providers';

export const metadata = {
  title: 'SwiftChain',
  description: 'Blockchain-Powered Logistics Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <OfflineBanner />
          <div className="fixed right-4 top-4 z-50">
            <ThemeToggle />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
