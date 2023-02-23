import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";

const ShortUrl = (props) => {
  const [isCopy, setIsCopy] = useState(false);

  const clickHandler = () => {
    setIsCopy(true);
  };

  return (
    <>
      <Input
        id={props.id}
        label="shortened URL"
        type="text"
        value={props.short}
        readonly="true"
      />

      <CopyToClipboard text={props.short}>
        <Button
          onClick={clickHandler}
          style={{ background: !isCopy ? "red" : "green" }}
        >
          {isCopy ? "Copied" : "Copy URL"}
        </Button>
      </CopyToClipboard>
    </>
  );
};

export default ShortUrl;
