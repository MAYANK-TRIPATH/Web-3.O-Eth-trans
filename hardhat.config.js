// https://eth-goerli.g.alchemy.com/v2/3djyHMZViPCWl_8uu2jBsGFTpVCFK9jB
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/3djyHMZViPCWl_8uu2jBsGFTpVCFK9jB',
      accounts: ['cb840748eaf1b28f9515628e48e2f337010b6ecd1035b056b9b6b016d80c5422']
    },
  },
};