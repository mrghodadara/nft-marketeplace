import Navbar from '@/components/Navbar';
import NFTCard from '@/components/NFTCard';

const exploreNFTs = [
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
    {
        id: 4,
        name: 'Abstract Mind #15',
        creator: 'Artist4',
        price: '0.3 ETH',
        image: '/nft4.jpg'
    },
    {
        id: 5,
        name: 'Pixel World #23',
        creator: 'Artist5',
        price: '0.7 ETH',
        image: '/nft5.jpg'
    },
    {
        id: 6,
        name: 'Digital Art #9',
        creator: 'Artist6',
        price: '1.5 ETH',
        image: '/nft6.jpg'
    },
];

export default function Explore() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-4 md:mb-0">Explore NFTs</h1>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4">
                        <select className="bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700">
                            <option value="">Price: All</option>
                            <option value="low">Price: Low to High</option>
                            <option value="high">Price: High to Low</option>
                        </select>

                        <select className="bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700">
                            <option value="">Recently Listed</option>
                            <option value="old">Oldest First</option>
                            <option value="new">Newest First</option>
                        </select>
                    </div>
                </div>

                {/* NFT Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {exploreNFTs.map((nft) => (
                        <NFTCard key={nft.id} {...nft} />
                    ))}
                </div>
            </div>
        </main>
    );
} 