require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_SEPOLIA_RPC = "https://rpc.sepolia.org";
const NEXT_PUBLIC_PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;

const GOERLI_URL = "https://eth-sepolia.g.alchemy.com/v2/NIlbhGK8UdkayMrrHGrxg3QasHsVtIdI"
const PRIVATE_KEY = "4dfae266b0af6da781b0257340ea73068f26f0e53ea71470387f558c59be35c3"

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
    ]
  },
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
      gas: 12000000,
      gasPrice: 25000000000 // 25 gwei
    },
  },
  mocha: {
    timeout: 60000 // Increase timeout to 60 seconds
  }
};
