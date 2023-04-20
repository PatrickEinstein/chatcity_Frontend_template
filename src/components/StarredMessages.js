import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import { useDispatch } from "react-redux";
import { updateSidebarType } from "../redux/slices/appReducer";
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";
import Message from "./Conversation/Message";

function StarredMessages() {
  const theme = useTheme();
  const dispatch = useDispatch();


  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8F8F8"
                : theme.palette.background,
          }}
        >
          <Stack
            direction="row"
            sx={{ height: "100%", p: 2 }}
            alignItems={"center"}
            spacing={3}
          >
            {" "}
            <IconButton onClick={() => dispatch(updateSidebarType("SHARED"))}>
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2"> Starred Messages</Typography>
          </Stack>
        </Box>

        {/* BODY */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflow: "scroll",
          }}
          padding={3}
          spacing={3}
        >
            <Message />
        </Stack>
      </Stack>
    </Box>
  );
}

export default StarredMessages;
