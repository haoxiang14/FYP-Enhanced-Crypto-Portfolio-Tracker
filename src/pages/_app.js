import "@/styles/globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultConfig,
    RainbowKitProvider,
  } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
  } from 'wagmi/chains';
import {
    QueryClientProvider,
    QueryClient,
  } from "@tanstack/react-query";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base, zora],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

export default function App ({ Component, pageProps }) {

  const showNavbar = true;
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {showNavbar && <Navbar />}
          <div className="grid grid-cols-5">
              <div className="col-span-1">
                {showNavbar && <Sidebar />}
              </div>
              <div className="col-span-4">
                  <div className="p-4">
                    <Component {...pageProps} /> 
                  </div>
              </div>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

