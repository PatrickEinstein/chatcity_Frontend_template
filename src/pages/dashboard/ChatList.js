import React from "react";
import {
  Box,
  IconButton,
  Typography,
  Stack,
  InputBase,
  Button,
  Avatar,
  Badge,
} from "@mui/material";
import {
  ArchiveBox,
  CircleDashed,
  Divide,
  MagnifyingGlass,
} from "phosphor-react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/settings/Search";

import { faker } from "@faker-js/faker";
import StyledBadge from "../../components/StyledBadge";

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#FFF"
            : theme.palette.background.paper,
      }}
      p="8"
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={2}>
          {" "}
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle">{name}</Typography>
            <Typography variant="option">{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems="center">
          <Typography sx={{ fontWeight: 400 }} variant="option">
            {" "}
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};



const Chats = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: 320,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,25%)",
        }}
      >
        <Stack padding={3} spacing={2} sx={{ height: "100vh" }}>
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Typography variant="h5">Chats</Typography>
            <IconButton>
              <CircleDashed />
            </IconButton>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Search >
              <SearchIconWrapper >
                <MagnifyingGlass color="#709ce6" />
              </SearchIconWrapper>
              <StyledInputBase  placeholder="search" />
            </Search>
          </Stack>
          <Stack spacing={1}>
            <Stack direction="row" alignItems={"center"} spacing={1.5}>
              <ArchiveBox size={24} />
              <Button>Archive</Button>
            </Stack>
            <Divide />
          </Stack>
          <Stack
            spacing={2}
            direction="column"
            sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}
          >
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={3}>
                <Typography variant="subtitle" sx={{ color: "#676767" }}>
                  Pinned
                </Typography>
                {ChatList.filter((el) => el.pinned).map(
                  ({ id, name, img, msg, time, unread, online }) => (
                    <ChatElement
                      id={id}
                      name={name}
                      img={img}
                      msg={msg}
                      time={time}
                      unread={unread}
                      online={online}
                    />
                  )
                )}
              </Stack>

              <Stack spacing={2.4}>
                <Typography variant="subtitle" sx={{ color: "#676767" }}>
                  All Chats
                </Typography>
                {ChatList.filter((el) => !el.pinned).map(
                  ({ id, name, img, msg, time, unread, online }) => (
                    <ChatElement
                      id={id}
                      name={name}
                      img={img}
                      msg={msg}
                      time={time}
                      unread={unread}
                      online={online}
                    />
                  )
                )}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Chats;
