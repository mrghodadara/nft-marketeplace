'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useWallet } from '@/context/WalletContext';
import { Spinner } from './Loader/Spinner';
import { formatAddress } from '@/utils/formatAddress';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const { account, isLoading, connectWallet, isInitialLoading } = useWallet();

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link
                  href="/explore"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Explore
                </Link>
                <Link
                  href="/create"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Create
                </Link>
                <Link
                  href="/my-nfts"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  My NFTs
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {isInitialLoading ? (
              <div
                onClick={() => connectWallet()}
                className="bg-gray-700 rounded-md w-34 animate-pulse h-9"
              />
            ) : (
              <>
                {account ? (
                  <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-md">
                    <p className="text-sm font-medium text-gray-200">
                      {formatAddress(account)}
                    </p>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(account);
                        toast.success('Address copied to clipboard!');
                      }}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      title="Copy address"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                        />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => connectWallet()}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium w-34 flex justify-center items-center cursor-pointer h-9"
                    disabled={isLoading}
                  >
                    {isLoading ? <Spinner /> : 'Connect Wallet'}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
