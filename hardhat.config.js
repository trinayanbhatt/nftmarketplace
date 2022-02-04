require("@nomiclabs/hardhat-waffle");
const fs = require('fs')
const privkey = fs.readFileSync(".secret").toString()

const projectId = env.projectId;

module.exports = {
  networks:{
    hardhat:{
      chainId: 1337
    },
    mumbai:{
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts=[privkey]
    },
    mainnet:{
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts=[privkey]
    }
  },
  solidity: "0.8.4",
};

