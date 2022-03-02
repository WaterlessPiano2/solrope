import * as React from "react";

const Galery = ({ nfts }) => {
  const [metadatas, setMetadata] = React.useState([]);

  const fetchMetadata = async () => {
    for (const nft of nfts) {
      fetch(nft.data.uri)
        .then((response) => response.json())
        .then((meta) => {
          metadatas.push(meta);
          setMetadata(metadatas);
        });
    }
    console.log("1metadatas: ", metadatas);
  };

  React.useEffect(() => {
    setMetadata([]);
    if (nfts?.length) fetchMetadata();
  }, [nfts]);

  return (
    <div>
      <h1>Solana NFT List</h1>
      <hr />
      {(metadatas || []).map((metadata) => {
        console.log("2metadata: ", metadatas);
        return (
          <div key={metadata?.mint}>
            <img src={metadata?.image} alt="nft" width="200" />
            <br />
            {metadata?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Galery;
