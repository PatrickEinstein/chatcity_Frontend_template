import React from "react";
import { Box, Stack, StepperClassKey} from "@mui/material";
import Chats from "./ChatList";
import Conversation from "../../components/Conversation/index";
import { useTheme } from "@mui/material/styles";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      {/* CHATS */}
      <Chats />

      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)",
          backgoundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.default,
        }}
      >
        {/* CONVERSION */}
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
