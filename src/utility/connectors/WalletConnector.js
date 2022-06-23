// Import wallet-connectors from web3-react
import { InjectedConnector } from '@web3-react/injected-connector';

const RPC_URLS = {
    137: 'https://speedy-nodes-nyc.moralis.io/2c7dbf705635580af512f432/polygon/mainnet'
};

export const injected = new InjectedConnector({
    supportedChainIds: [137]
});