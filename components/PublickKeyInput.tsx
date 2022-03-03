import * as React from "react";
import * as web3 from "@solana/web3.js";
import {
  resolveToWalletAddress,
  getParsedNftAccountsByOwner,
} from "@nfteyez/sol-rayz";

type Props = {
  nfts: (x: {}[]) => {};
};

const PublickKeyInput = ({ nfts }: Props) => {
  const [key, setKey] = React.useState(
    "489RFKuM1fpZuczdHV3qsPoJ2K4Nm6hYHdSzGSWuRn2q"
  );

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const publicAddress = await resolveToWalletAddress({
      text: key,
    });
    const nftArray = await getParsedNftAccountsByOwner({
      publicAddress,
    });
    const metadatas = await fetchMetadata(nftArray);
    return nfts(metadatas);
  };

  const fetchMetadata = async (nftArray) => {
    let metadatas = [];
    for (const nft of nftArray) {
      await fetch(nft.data.uri)
        .then((response) => response.json())
        .then((meta) => {
          metadatas.push(meta);
        });
    }
    return metadatas;
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
