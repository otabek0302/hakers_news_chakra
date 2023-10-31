import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Poasts/Posts";


import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <Box h="100vh" backgroundImage="url('/images/main_bg.svg')" backgroundPosition="center" backgroundSize="cover">
      <Navbar />
      <Posts />
    </Box>
  );
};

export default App;
