import { Box, Stack } from "@mui/system";
import React from "react";
import {
  Avatar,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import  {useTheme} from "@mui/material/styles"
import { faker } from "@faker-js/faker";
import StyledBadge from "../StyledBadge";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import { useDispatch } from "react-redux";
import { toggleSidebar, ToggleSidebar } from "../../redux/slices/appReducer";


const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch()
  return (
    <Box
      sx={{
        height: 100,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
      p={2}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        sx={{ width: "100%", height: "100%" }}
      >
        <Stack onClick={( ) =>(dispatch(toggleSidebar()))} direction={"row"} spacing={2}>
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={faker.name?.fullName} src={faker.image.avatar()} />
            </StyledBadge>
          </Box>
          <Stack sapcing={2}>
            <Typography variant="subtitle"> {faker.name.fullName()}</Typography>
            <Typography variant="caption"> Online</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems={"center"} spacing={2}>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
