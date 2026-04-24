import './global.css';
import OfflineBanner from '@/components/wallet/ui/OfflineBanner';

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
    <html lang="en">
      <body>
        <OfflineBanner />
        {children}
      </body>
    </html>
  );
}
