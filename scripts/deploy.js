// Creating a Deploy scrip to deploy the DAP=>Decentralised Application => Blockchain as a backend;
// Making from Scratch

//async-await so that our code runs line by line
const main = async()=>{

const [deployer] = await hre.ethers.getSigners(); //deployer=> who has deployed the contract,the deployer,which we can get with the help of hardhat by getsigners method, and [deployer]=>array destructuring

const [accountBalance] = await deployer.getBalance();// Here we get the account balance of the deployer and this is needed because in remix IDE , that was given by them ,that account was their and balance i.e. 100 free ethers was there but now we are going to use our own wallet to deploy so we need to check and deal with the account balance.

console.log("Deploying the contract with account(address) ",deployer.address);
console.log("AccountBalance is ",accountBalance.toString());//converting account balance to string

//Now how to get our contract which we have made and will deploy i.e. Spotify.sol waala (S capital kyunki React me hain)

const waveContractFactory=hre.ethers.waveContractFactory("Spotify");//write name of file and we got the contract present in spotify.sol file and is stored in waveContractFactory variable

//setting to deploy
const waveContract=waveContractFactory.deploy();

//deploying the contract, below await=> wait until contract is deployed dont further till then to execute next line of code.
 await waveContract.deployed();
 
 console.log("Contract is deployed and WaveContract add = ",waveContract.address);
};

// try-catch is for catching the error so it would be helpful to debug
const runMain= async () => {

  try {
    await main(); // running the main function described above
    process.exit(0);
  } catch (error) {
    console.log(error);
  }


}