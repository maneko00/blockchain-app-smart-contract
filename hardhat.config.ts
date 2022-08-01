import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "goerli",
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/Dt1GR3AWmnHrojQl2R3pBRhdUGoxzS7q",
      accounts:[
        process.env.GOERLI_ACCOUNT!,
      ],
    },
  },
};

export default config;
