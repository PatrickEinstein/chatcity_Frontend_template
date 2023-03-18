import React from "react";
import { Box, Stack } from "@mui/material";
import Chats from "./ChatList";
import Conversation from "../../components/Conversation/index";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/slices/appReducer";

const GeneralApp = () => {
  const contactOnOff = useSelector((state) => state.sidebar.open);
  console.log(contactOnOff);
  const theme = useTheme();
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      {/* CHATS */}
      <Chats />

      <Box
        sx={{
          height: "100%",
          width: contactOnOff ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          backgoundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.default,
        }}
      >
        {/* CONVERSION */}
        <Conversation />
      </Box>
      {/* CONTACT INFO */}
      {contactOnOff && <Contact />}
    </Stack>
  );
};

export default GeneralApp;
