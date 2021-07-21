import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "cd7e48a92ba80d8b2750f209accad5ce2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
        }
      },
    });
  }, []);

  return <div className="App"> My Ai News Application</div>;
};

export default App;
