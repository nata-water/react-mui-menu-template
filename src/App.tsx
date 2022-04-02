import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { SideMenu } from "./components/SideMenu";
import { MainContents } from "./components/MainContents";

function App() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  const handleClickSideMenuOpen = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideMenu
          isSideMenuOpen={isSideMenuOpen}
          handleClickSideMenuOpen={handleClickSideMenuOpen}
        />
        <MainContents />
      </Box>
    </div>
  );
}

export default App;
