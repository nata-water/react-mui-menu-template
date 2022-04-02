import { DrawerHeader } from "../layouts/DrawerHeader";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { NoteCardContainer } from "./note-card/NoteCardContainer";
import { NoteEditContainer } from "./note-edit/NoteEditContainer";
import Box from "@mui/material/Box";

export const MainContents = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <NoteCardContainer />
      <NoteEditContainer />
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </Typography>
    </Box>
  );
};
