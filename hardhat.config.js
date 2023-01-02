require("@nomicfoundation/hardhat-toolbox");

//************Making changes i.e. writing code for network in @type to run contract on test network i.e. goerli test network ********//
//************This originar code(unchanged one) is for deploying and running the contract on local blockchain i.e. hardhat ***********//

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  // networks:{
  //  goerli: {  // We would be deploying on goerli testnet,TO DEPLOY we need two things 1. quick node API endpoints(url) and 2. account/private key(accounts)
   
  //   url:"QUICKNODE_API_URL_Here",//Quicknode.com>>sign in>>endpoints
  //   accounts:[""]  //Metamask se milega 
  
  // }
// }
};
