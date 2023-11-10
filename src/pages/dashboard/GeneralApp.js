import React from "react";
import { Box, Stack } from "@mui/material";
import Chats from "./ChatList";
import Conversation from "../../components/Conversation/index";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/slices/appReducer";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

const GeneralApp = () => {
  const contactOnOff = useSelector((state) => state.sidebar.open);
  const contacttype = useSelector((state) => state.sidebar.type);

  console.log(contactOnOff);
  const theme = useTheme();
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      {/* CHATS */}
      {/* <Chats /> */}
      {/* //calc(100vw - 420px) */}
      {/* calc(100vw - 740px) */}
      <Box
        sx={{
          height: "100%",
          width: contactOnOff ? "calc(100vw - 400px)" : "100%",
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
      {contactOnOff
        ? (() => {
            switch (contacttype) {
              case "CONTACT":
                return <Contact />;

              case "STARRED":
                return <StarredMessages />;

              case "SHARED":
                return <SharedMessages />;

              default:
                return <Contact />;
            }
          })()
        : null}
    </Stack>
  );
};

export default GeneralApp;
