import React, { useContext, useState } from "react";
import axios from "axios";
import style from "./ChainSwitcher.module.css";
import Overlay from "../../containers/Overlay/Overlay";
import ChainCard from "./ChainCard";
import ethChainIcon from "../../assets/ethIconWhiteTest.svg";
import bnbIcon from "../../assets/bnbIcon.svg";
import { UserContext } from "../../contexts/UserContext";
import { useUser } from "@clerk/clerk-react";
import toast, { toastConfig } from 'react-simple-toasts';
toastConfig({ theme: 'dark' });


const ChainSwitcher = () => {
  const { selectedChain, setSelectedChain } = useContext(UserContext);
  const [showSwitcher, setShowSwitcher] = useState(true);

  const API_URL = process.env.REACT_APP_API_URL;
  const { user } = useUser();

  const switchCurrentChain = async (chain) => {
    try {
      // Set the selected chain locally
      setSelectedChain(chain);

      // API call to update currentChain in the backend
      const response = await axios.put(`${API_URL}/users/update-current-chain`, {
        userID: user.id, // Replace with the actual user ID
        currentChain: chain,
      });

      // Handle success response	  
	  toast('chain switch synced.');
      // Close the switcher after successful update
      setShowSwitcher(false);
    } catch (error) {
      // Handle error response
      console.error("Error updating current chain:", error.response?.data || error.message);
    }
  };

  return (
    <>
      {showSwitcher && (
        <Overlay>
          <div className={style.ChainSwitcher}>
            <ChainCard
              ChainImage={bnbIcon}
              ChainName="(BNB) Testnet"
              click={() => switchCurrentChain("bnb-testnet")}
            />
            <ChainCard
              ChainImage={ethChainIcon}
              ChainName="Ethereum Sepolia"
              click={() => switchCurrentChain("eth-sepolia")}
            />
            <ChainCard
              ChainImage={ethChainIcon}
              ChainName="Ethereum Holesky"
              click={() => switchCurrentChain("eth-holesky")}
            />
          </div>
        </Overlay>
      )}
    </>
  );
};

export default ChainSwitcher;
