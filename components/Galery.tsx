import * as React from "react";

const Galery = ({ nfts }) => {
  const renderNfts = () => {

    return nfts.map((metadata, index) => {
      return (
        <div key={index}>
          <h1>he;llo</h1>
          <img src={metadata?.image} alt="nft" width="200" />
          <br />
          {metadata?.name}
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Solana NFT List</h1>
      <hr />
      {renderNfts()}
    </div>
  );
};

export default Galery;
