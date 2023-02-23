import { useEffect, useState } from "react";
import useHttp from "../../hook/use-http";
import HomeShortUrl from "./HomeShortUrl";
const HomeFinal = () => {
  const [URL, setURL] = useState("");
  const [shortenedLink] = useState([]);

  const { isLoading, error, sendRequest: fetchURL } = useHttp();

  useEffect(() => {
    const transformedData = (URLObj) => {
      shortenedLink.push(URLObj.result.short_link);
    };
    fetchURL(
      {
        url: `https://api.shrtco.de/v2/shorten?url=${URL}`,
      },
      transformedData
    );
  }, [fetchURL, URL, shortenedLink]);

  const enteredUrlHandler = (enteredUrl) => {
    setURL(enteredUrl);
  };
  return (
    <div>
      <HomeShortUrl
        onEnterUrl={enteredUrlHandler}
        shortenedLink={shortenedLink}
        error={error}
        isLoading={isLoading}
      />
    </div>
  );
};

export default HomeFinal;
