import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-solpp';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-typechain';
import 'hardhat-contract-sizer';
import { Network, loadDefs } from './hardhat.utils';

export default {
    defaultNetwork: 'env',
    solidity: {
        version: '0.7.3',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    contractSizer: {
        runOnCompile: false
    },
    paths: {
        sources: './contracts'
    },
    solpp: {
        defs: loadDefs(process.env.ETH_NETWORK as Network)
    },
    networks: {
        env: {
            url: `${process.env.WEB3_URL}`
        }
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY
    }
};
