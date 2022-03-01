import * as React from "react";

const Galery = ({ nfts }) => {
  console.log(nfts);
  return (
    <div>
      {nfts &&
        nfts.map((x) => (
          <img
            src={x.data.uri}
          />
        ))}
    </div>
  );
};

export default Galery;
