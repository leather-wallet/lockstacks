import { StacksNetworkName } from '@stacks/network';
import { ChainId } from '@stacks/network';

import {
  DEFAULT_DEVNET_SERVER,
  DEFAULT_MAINNET_SERVER,
  DEFAULT_TESTNET_SERVER,
} from '../constants';

export const NetworkIdModeMap: { [key in ChainId]: StacksNetworkName } = {
  [ChainId.Mainnet]: 'mainnet',
  [ChainId.Testnet]: 'testnet',
};

export const NetworkModeUrlMap: Record<StacksNetworkName, string> = {
  mainnet: DEFAULT_MAINNET_SERVER,
  testnet: DEFAULT_TESTNET_SERVER,
  devnet: DEFAULT_DEVNET_SERVER,
  mocknet: DEFAULT_DEVNET_SERVER,
};

export const CustomNetworksLSKey = 'CustomNetworks';
