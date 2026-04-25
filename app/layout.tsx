import './global.css';
import Providers from '@/components/Providers';

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
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 text-foreground transition-colors duration-300">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
