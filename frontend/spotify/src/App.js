import { ethers } from 'hardhat';
import './App.css';
import spotify from './utils/spotify.json';
import {useEffect,useState} from 'react';//HOOKS for Rendering

//Now we need to render the function we created in contract using blockchain so we will create it here also and the user should have metamask installed to use our DAP//

function App() {
  
  const [message, setMessage] = useState("");
  const [currentAccount,setCurrentAccount] = useState("");
  const [allWaves,setAllWaves] = useState([]);
  const {ethereum}=window; 
  
  const contractAddress = "0xa0c5D2d665869641E86c3d5fE3c9dB4FFF18F67b";
  const provider=new ethers.providers.Web3Provider(ethereum); //here provider==> metamask
  const signer=provider.getSigner();//I think signer is the user who is interacting//
  const spotifyContract=new ethers.Contract(contractAddress , spotify.abi , signer) //This is the way to get the contract in FrontEnd//Now we dont have       contractAddress because we havent deployed the contract.

  const getAllwaves=async()=>{
    const {ethereum}=window; 
    try{
 if(window.ethereum)  // kya jo use kar raha hai dap uske pass etherum => Metamask hai??=> tabhi chalega else nahi chalega. aur Metamask account agar hai then it should be connected
 {
  const provider=new ethers.providers.Web3Provider(ethereum); //here provider==> metamask
  const signer=provider.getSigner();//I think signer is the user who is interacting//
  const spotifyContract=new ethers.Contract(contractAddress , spotify.abi , signer) //This is the way to get the contract in FrontEnd//Now we dont have       contractAddress because we havent deployed the contract.

//Calling the function in frontend
     const waves =await spotifyContract.getAllwaves();//first we got the contract in frontend and stored it in variable call spotifyContract and now from that contract we are calling getAllwaves() function in frontend.

     console.log("These are the waves ",waves);
 }

    }
    catch(err) {
           console.log(err);
    }


  }

  const checkIfWalletIsConnected = async()=>{

    try {
      
      const {ethereum}=window; //Metamask injects the ethereum object into the window/screen so it is also called as injected provider in Remix_IDE

      if(!ethereum)
      {
        console.log("Make sure you have Metamask");
        return;
      }
      else{
        console.log("We have the ethereum object ",ethereum);

      }

      const accounts = await ethereum.request({method: 'eth_accounts'});

      if(accounts.length !=0)
      {
        const account = accounts[0];
        console.log("Found an authorized account: ",account);
        setCurrentAccount(account);
      }
      else{
         console.log("No authorized account found");
      }

    } catch (error) {
      console.log(error);
    }
  }

    const connectWallet = async () => {
   
      try {
        const {ethereum} = window;
        if(!ethereum){
          console.log("Make sure you have a Metamask!");
          return;
        }
        const accounts = await ethereum.request({method: "eth_requestAccounts"});

        setCurrentAccount(accounts[0]);

      } catch (error) {
        console.log(error);
      }


    }


  
  
  
  
 //This is the main function/major function 
  const wave = async()=>{


    try {

      let count =await spotifyContract.getTotalWaves();

      console.log("Retrieved wave count ", count.toNumber());

      const waveTxn = await spotifyContract.wave(message);//Txn=transaction
      console.log("Mining..... ", waveTxn.hash);//Transaction hash can give all the transaction details , it is like bank statement transaction id irl
      
      await waveTxn.wait();//wahan wahan awit use kar rahe hain wherever we have a doubt ki time lagega execute hoke result aane me tab tak aage na badhein
      getAllwaves();
      console.log("Mined...... ",waveTxn.hash);

      count = spotifyContract.getTotalWaves();//updating the count


      
    } catch (error) {
      console.log(error);
      
    }

  }
  
  //useEffect hook rendering only when app starts 
  
  useEffect(()=>{

   checkIfWalletIsConnected();

  },[])

  
  
  
  return (
    <div className="App">

    <div className="header">

    <h1>Kuch toh Banega hi !!!</h1>
    
    </div>
    <div className='bio'> Enjoy kar vaii </div>

    <input className='form' type="text" placeholder="Likh bhai kuch Mai hi karun kya sab?" onChange={(e)=>setMessage(e.target.value)}/>

    <button className="waveButton" onClick={wave}>Wave at Me</button>
     
    {(!currentAccount) && (<button className="connectButton" onClick={connectWallet}>Connect Wallet</button>)}//conditional rendering
    </div>


  );
}

export default App;
