import * as React from "react";

const send = () => {
  console.log("chad");
};

const PublickKeyInput = () => {
  const [key, setKey] = React.useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Public Key: ${key}`);
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
