import React, { useState, useEffect } from "react";

import Datatable from './Datatable';

require("es6-promise").polyfill();
require("isomorphic-fetch");

function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch("https://devmentor.live/api/examples/contacts?api_key=6097e5d5")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="App">
      <div>filter goes here</div>
      <div>
        <Datatable data={data}/>
      </div>
    </div>
  );
}

export default App;
