import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from '@clerk/clerk-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

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
} from 'wagmi/chains';
import {
	QueryClientProvider,
	QueryClient,
} from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById('root'));
const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

const config = getDefaultConfig({
	appName: 'My RainbowKit App',
	projectId: 'YOUR_PROJECT_ID',
	chains: [mainnet, polygon, optimism, arbitrum, base],
});

const queryClient = new QueryClient();



root.render(
	<React.StrictMode>
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider>
					<ClerkProvider frontendApi={frontendApi}>
						<App />
					</ClerkProvider>
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
