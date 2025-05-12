import Navbar from '@/components/Navbar';
import NFTCard from '@/components/NFTCard';

export default function Home() {
  const featuredNFTs = [
    {
      id: 1,
      name: 'Cosmic Dreams #1',
      creator: 'Artist1',
      price: '0.5 ETH',
      image: '/nft1.jpg'
    },
    {
      id: 2,
      name: 'Digital Waves #42',
      creator: 'Artist2',
      price: '0.8 ETH',
      image: '/nft2.jpg'
    },
    {
      id: 3,
      name: 'Neon City #7',
      creator: 'Artist3',
      price: '1.2 ETH',
      image: '/nft3.jpg'
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              Discover, Collect & Sell
              <span className="block text-indigo-200">Extraordinary NFTs</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              The world's largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="/explore" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Explore
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="/create" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Create
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured NFTs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Featured NFTs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredNFTs.map((nft) => (
            <NFTCard key={nft.id} {...nft} />
          ))}
        </div>
      </div>
    </main>
  );
}
