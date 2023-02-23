import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classes from "./HomeShortUrl.module.css";
import { useState } from "react";
import ShortUrl from "./ShortUrl";

const HomeShortUrl = (props) => {
  const [urlInput, setUrlInput] = useState("");
  const [showshortenedUrl, setShowShortenedUrl] = useState(false);

  const urlInputChangeHandler = (event) => {
    setUrlInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(urlInput);

    if (urlInput.trim().length > 0) {
      props.onEnterUrl(urlInput);
    } else {
      return;
    }
    setShowShortenedUrl(true);

    setUrlInput("");
  };

  return (
    <>
      <form className={classes.newToDo} onSubmit={submitHandler}>
        <Input
          id="url"
          label="Enter the URL"
          type="url"
          onChange={urlInputChangeHandler}
          value={urlInput}
        />
        <Button type="submit">{props.isLoading ? "Loading..." : "send"}</Button>
        {showshortenedUrl && !props.isLoading && props.error && (
          <p>{props.error}</p>
        )}
        {showshortenedUrl &&
          !props.isLoading &&
          !props.error &&
          props.shortenedLink.map((shortlink) => (
            <ShortUrl short={shortlink} />
          ))}
      </form>
    </>
  );
};

export default HomeShortUrl;
