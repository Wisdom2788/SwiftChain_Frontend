import { DeliveryList } from '@/components/DeliveryList';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary-900 dark:text-white sm:text-5xl">
          Welcome to SwiftChain
        </h1>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
          Decentralized Logistics & Escrow Delivery Platform
        </p>
      </div>
      <DeliveryList />
    </main>
  );
}
