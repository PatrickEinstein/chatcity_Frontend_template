import {
  Box,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useTheme, styled } from "@mui/material/styles";
import HttpCaller from "../../RepositoryService/ApiCaller";
import {
  Camera,
  File,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  SmileySad,
  Sticker,
  User,
} from "phosphor-react";
import { useState } from "react";
import { updateChatHistory } from "../../redux/slices/appReducer";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "16px",
  },
}));

const Actions = [
  {
    color: "#1b8c52",
    icon: <Sticker size={15} />,
    y: 80,
    title: "Stickers",
  },
  {
    color: "#167042",
    icon: <Camera size={15} />,
    y: 130,
    title: "Image",
  },
  {
    color: "#76ba97",
    icon: <File size={15} />,
    y: 180,
    title: "Documents",
  },
  {
    color: "#051c10",
    icon: <User size={15} />,
    y: 230,
    title: "Contacts",
  },
];

const ChatInput = ({ setOpenPicker, ChatInputed, handleInputChange }) => {
  const [openActions, setOpenActions] = useState(false);

  return (
    <StyledInput
      onChange={handleInputChange}
      fullWidth
      placeholder="write a message..."
      variant="filled"
      InputProps={{
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            <Stack
              sx={{
                position: "relative",
                display: openActions ? "inline-block" : "none",
              }}
            >
              {Actions.map(({ color, icon, y, title }) => (
                <Tooltip title={title} placement="right">
                  <Fab
                    sx={{
                      position: "absolute",
                      top: -y,
                      backgroundColor: { color },
                    }}
                  >
                    {icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment position="start">
              <IconButton onClick={() => setOpenActions((prev) => !prev)}>
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),

        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={
                () => setOpenPicker((prev) => !prev)
                //this setOpenPicker takes the value of the
                //openPiker an inverts it on every press
              }
            >
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
const Footer = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [openPicker, setOpenPicker] = useState(false);
  const [ChatInputed, setChatInputed] = useState("");
  const handleInputChange = (event) => {
    setChatInputed(event.target.value);
  };

  console.log(`chat==>`, ChatInputed);

  const onChat = async () => {
    try {
      const response = await HttpCaller(`chatbot?query=${ChatInputed}`, "POST");
      console.log(`BotRes==>`, response);
      const kindOfResponse =
        typeof response === "string" ? JSON.parse(response) : response;
      dispatch(
        updateChatHistory({
          type: "msg",
          message: kindOfResponse,
          incoming: true,
          outgoing: false,
        })
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Box
      p={2}
      sx={{
        width: "100",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack direction="row" alignItems={"center"} spacing={3}>
        <Stack sx={{ width: "100%" }}>
          {/* CHAT INPUT */}
          <Box
            sx={{
              zIndex: 10,
              position: "fixed",
              bottom: 51,
              right: 100,
              display: openPicker ? "inline" : "none",
            }}
            //the display in the sx tag means that
            //if openPicker is true
            //as set by the setOpenPicker
            //, display is inline otherwise if it is false, no display
          >
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>
          <ChatInput
            setOpenPicker={setOpenPicker}
            setChatInputed={setChatInputed}
            handleInputChange={handleInputChange}
          />
        </Stack>

        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton onClick={onChat}>
              <PaperPlaneTilt color="white" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
