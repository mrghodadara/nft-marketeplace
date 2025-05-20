/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { ethers } from 'ethers';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import toast from 'react-hot-toast';

// interface EthereumProvider extends ethers.providers.ExternalProvider {
//   on?: (event: string, handler: (...args: any[]) => void) => void;
//   removeListener?: (event: string, handler: (...args: any[]) => void) => void;
// }

declare global {
  interface Window {
    ethers: typeof ethers;
    ethereum: any;
  }
}
interface WalletContextType {
  connectWallet: () => void;
  account: string | null;
  isLoading: boolean;
  isInitialLoading: boolean;
}

interface WalletProviderType {
  children: ReactNode;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider = ({ children }: WalletProviderType) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [account, setAccount] = useState<string | null>(null);

  const getConnectedWallet = async () => {
    if (typeof window?.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });

        if (accounts?.length) {
          setAccount(accounts?.[0]);
          //   toast.success('Account connected');
        }
      } catch (e: any) {
        if (e?.code === 4001) {
          toast.error('Connection request was rejected.');
        } else {
          toast.error('An error occurred while connecting.');
        }
        setAccount('');
      } finally {
        setIsInitialLoading(false);
      }
    } else {
      setIsInitialLoading(false);
    }
  };

  const connectWallet = async () => {
    if (!window?.ethereum) {
      toast.error('MetaMask is not installed');
      return;
    }

    try {
      setIsLoading(true);

      const provider = new ethers.providers.Web3Provider(window.ethereum);

      await provider.send('eth_requestAccounts', []);

      const signer = provider.getSigner();
      const address = await signer.getAddress();
      // const balance = await signer.getBalance();

      setAccount(address);

      toast.success('Wallet connected');
    } catch (e: any) {
      if (e?.code === 4001) {
        toast.error('Connection request was rejected.');
      } else {
        toast.error('An error occurred while connecting.');
      }
      setAccount('');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getConnectedWallet();
  }, []);

  useEffect(() => {
    if (!window.ethereum) return;

    const handleAccountsChanged = (accounts: string[]) => {
      console.log('accounts', accounts);
      if (!accounts?.length) {
        toast.success('Wallet disconnected by user');
        setAccount(null);
      } else {
        setAccount(accounts?.[0]);
      }
    };

    window.ethereum.on('accountsChanged', handleAccountsChanged);

    return () => {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
    };
  }, []);

  return (
    <WalletContext.Provider
      value={{ connectWallet, account, isLoading, isInitialLoading }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);

  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }

  return context;
};
