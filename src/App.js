import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "cd7e48a92ba80d8b2750f209accad5ce2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div className="App">
      <h1>My Ai News Application</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
