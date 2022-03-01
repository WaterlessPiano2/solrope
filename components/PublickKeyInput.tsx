import * as React from "react";
import * as web3 from "@solana/web3.js";
import {
  resolveToWalletAddress,
  getParsedNftAccountsByOwner,
} from "@nfteyez/sol-rayz";

const PublickKeyInput = () => {
  const [key, setKey] = React.useState("");

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
    var wallet = new web3.PublicKey(key);

    const publicAddress = await resolveToWalletAddress({
      text: key,
    });

    const nftArray = await getParsedNftAccountsByOwner({
      publicAddress,
    });

    console.log(nftArray);
    // get account info
    // account data is bytecode that needs to be deserialized
    // serialization and deserialization is program specific

    let account = await connection.getAccountInfo(wallet);
    console.log(account);
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
