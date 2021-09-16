import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router } from "react-router-dom";

const ServerConnected = () => {
  const [apiResponse, setApiResponse] = useState("");
  const callAPI = () => {
    fetch("http://localhost:3001/test/api")
      .then((response) => response.text())
      .then((response) => setApiResponse([response]));
  };
  useEffect(() => callAPI(), []);
  return (
    <div>
      <p>{apiResponse}</p>
    </div>
  );
};

export default ServerConnected;
