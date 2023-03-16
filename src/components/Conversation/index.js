import { Box, Stack, TextField, useTheme } from "@mui/material";
import React from "react";
import Footer from "./Footer";

import Header from "./Header";
import Message from "./Message";

const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* HEADER */}
      <Header />
      {/* MESSAGES */}
      <Box width={"100%"} sx={{ flexGrow: 1 , height: "100%", overflow:"scroll"}}>
        <Message />
      </Box>
      {/* CHAT FOOTER */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
