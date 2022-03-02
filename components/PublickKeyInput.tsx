import * as React from "react";
import * as web3 from "@solana/web3.js";
import {
  resolveToWalletAddress,
  getParsedNftAccountsByOwner,
} from "@nfteyez/sol-rayz";

type Props = {
  nfts: (x) => {};
};

const PublickKeyInput = ({ nfts }: Props) => {
  const [key, setKey] = React.useState(
    "489RFKuM1fpZuczdHV3qsPoJ2K4Nm6hYHdSzGSWuRn2q"
  );
  console.log("pk component");

  const handleSubmit = async (evt) => {
    var connection = new web3.Connection(
      web3.clusterApiUrl("mainnet-beta"),
      "confirmed"
    );
    evt.preventDefault();
    // alert(`Submitting Public Key: ${key}`);
    var connection = new web3.Connection(
      web3.clusterApiUrl("mainnet-beta"),
      "confirmed"
    );
    // Generate a new wallet keypair and airdrop SOL
    const publicAddress = await resolveToWalletAddress({
      text: key,
    });
    const nftArray = await getParsedNftAccountsByOwner({
      publicAddress,
    });
    nfts(nftArray);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Public Key:
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default PublickKeyInput;
