import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetch("data/data.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default App;
