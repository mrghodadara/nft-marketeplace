'use client';

interface NFTCardProps {
  id: number;
  name: string;
  creator: string;
  price: string;
  image: string;
}

const NFTCard = ({ name, creator, price }: NFTCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-64 w-full">
        <div className="absolute inset-0 bg-gray-700 animate-pulse" />
        {/* Uncomment when you have actual images
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        */}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-gray-400 mt-2">Created by {creator}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-purple-400 font-bold">{price}</span>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
