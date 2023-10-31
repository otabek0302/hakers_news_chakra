import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { ResultContextProvider } from "./context/ResultContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ResultContextProvider>
        <App />
      </ResultContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
