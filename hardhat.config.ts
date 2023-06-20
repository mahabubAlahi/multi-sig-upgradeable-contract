import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { fornoURLs, ICeloNetwork } from "@ubeswap/hardhat-celo";
import "hardhat-deploy";

import * as dotenv from "dotenv";

import * as path from 'path';
dotenv.config({ path: path.resolve(__dirname, './.env') });

let keys = [process.env.PRIVATE_KEY!];

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    celo: {
      chainId: 42220,
      url: fornoURLs[ICeloNetwork.MAINNET],
      accounts: keys,
    },
    alfajores: {
      chainId: 44787,
      url: fornoURLs[ICeloNetwork.ALFAJORES],
      accounts: keys,
    },
  },
  paths: {
    tests: "./test/",
  },
  mocha: {
    timeout: 10000000000,
  },
  namedAccounts: {
    deployer: 0
  },
  typechain: {
    outDir: 'typechain',
  }
};

export default config;
