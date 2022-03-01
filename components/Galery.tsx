import * as React from "react";

const Galery = ({ nfts }) => {
  console.log(nfts);
  const [metadata, setMetadata] = React.useState({});

  const fetchMetadata = React.useCallback(async () => {
    for (const nft of nfts) {
      fetch(nft.data.uri)
        .then((response) => response.json())
        .then((meta) =>
          setMetadata((state) => ({ ...state, [nft.mint]: meta }))
        );
    }
  }, [nfts]);

  React.useEffect(() => {
    if (nfts?.length) fetchMetadata();
  }, [nfts, fetchMetadata]);

  return (
    <div>
      <h1>Solana NFT List</h1>
      <hr />
      {(nfts || []).map((nft) => {
        console.log(metadata?.[nft.mint]?.image);
        return (
          <div key={nft.mint}>
            <img src={metadata?.[nft.mint]?.image} alt="nft" width="200" />
            <br />
            {nft.data.name}
          </div>
        );
      })}
    </div>
  );
};

export default Galery;
