// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.0; //telling the version


import "hardhat/console.sol";

// All code related to blockchain will be written inside this block
contract spotify{

    uint256 totalWaves=0;  //unsigned int 256
    
    struct Wave {
           address waver;
           string message;
           uint256 timestamp;

             }

             event NewWave(address indexed from, uint256 timestamp,string message);/*This is used for directly logging the data in Block Chain without using transaction or at low cost
                                                                                      this basically is saving the data of user in block chain at low cost           */
         Wave[] waves; // Creating an array of datatype Wave whose name is waves

         constructor()  //nahi pta kya hai ye dekhle
             {

             }
            
            function wave (string memory _message) public { //memory means the message is stored in memory and public is the view which means we can change the things externally also as in block chain it is very difficult to change it externally when it is deployed
                totalWaves +=1;

                console.log("%s has waved",msg.sender);  //msg.sender is the person who interacts here i.e. who clicks the button in our project

                waves.push(Wave(msg.sender,_message,block.timestamp));//block.timestamp gives the time at which the block is mined;;;whenever we are clicking on the button and thing happens in blockchain , it is called mining

                emit NewWave(msg.sender,block.timestamp,_message);//We have initialized the event above now we are calling which means emit;
            }

            function getAllWaves() public view returns (Wave[] memory)  //we are using view => we are only reading data from blockchain and not writing any data into it i.e. not changing data/variables in it,using these keywords saves gasfees,which is like currency you require to run blockchain
                {
                     return waves;
                }//we are getting all the array of waves i.e. waves[0],waves[1],..........etc
                 // whenever using array or strings ,use memory

            function getTotalWaves() public view returns (uint256) //public rakhna padega as externally function ko tabhi call kar payenge for use
                                                                   // view as we need to reed the data
                                                                   //datatype daalne padega bracket me jo return kar rahe ho uska
                                                                   //This gives the total no.of waves i.e. how many people waved at it
            {
                return totalWaves;
            }
}

// Contract is completed finally now we can deploy it on remix.ethereum.org to see how it works and now we heading to build frontend part using React in vscode.//

// Message likhke Button pe click karne ke baad transaction hoga which will require ethereum,and after successful transaction, block will be mined,This was our account/address on remix.IDE => 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4