We made contract on remix IDE using Solidity and did transaction there itself
Then we came here in VSCODE installed hardhat dependencies which allows to test the contract after deploying(Shayad) as in blockchain DAPs after deployment are not changeable or immutable
So yahan we removed Lock.sol and created Spotify.sol and pasted our contract code from remix IDE //Naming of the file i.e. Spotify.sol,it should be in capital i.e. S capital and this file is in replacement with Lock.sol
Pasting_the_code_which_we_made_in_remix_IDE
then we made deploy.js from scratch
Now since we want to deploy and run it on different testnet and not hardhat we made changes into hardhat.config.js
Compile locally with hardhat using npx hardhat compile to obtain abi from spotify.json
Now doing the FRONTEND PART 