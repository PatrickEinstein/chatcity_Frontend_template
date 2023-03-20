import { faker } from "@faker-js/faker";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar, updateSidebarType } from "../redux/slices/appReducer";
import UpdateSidebarType from "../redux/slices/appReducer";
import AntSwitch from "./AntSwitch";
import { DeleteDialog } from "./Dialogs";
import { BlockDialog } from "./Dialogs";


const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [openBlock, setOpenBlock] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)


  const handleCloseBlock =( ) =>{
    setOpenBlock(false)
  }
  const handleCloseDelete =( ) =>{
    setOpenBlock(false)
  }

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* HEADER */}
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
            justifyContent="space-between"
            spacing={3}
          >
            <Typography variant="subtitle2"> Contact info</Typography>
            <IconButton onClick={() => dispatch(toggleSidebar())}>
              <X />
            </IconButton>
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
          <Stack alignItems={"center"} direction="row" spacing={3} >
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{ height: 64, width: 64 }}
            />
            <Stack alignItems={"center"} justifyContent="space-between">
            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                {" "}
                {faker.name.fullName()}
              </Typography>
            </Stack>
            <Stack spacing={0.5}>
              <Typography variant="body2" fontWeight={500}>
                {" "}
                {"+91 725 2829 2992"}
              </Typography>
            </Stack>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent="space-evenly"
          >
            <Stack spacing={1} alignItems="center">
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice </Typography>
            </Stack>
            <Stack spacing={1} alignItems="center">
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>

          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="article"> About</Typography>
            <Typography variant="body2">
              {" "}
              Hi there, im using chatCity
            </Typography>
          </Stack>
          <Divider />
          <Stack>
          <Stack
            // alignItems={"center"}
            justifyContent="space-between"
            spacing={2}
          >
            <Stack justifyContent="space-between" spacing={4}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle">Media, Links & Docs</Typography>
            <Button onClick={() =>(
              UpdateSidebarType("SHARED")
            )} endIcon={<CaretRight />}>401</Button>
            </Stack>
            <Stack direction="row" spacing={2} alignItems={"center"}>
              {[1, 2, 3].map((el) => (
                <Box>
                  <img src={faker.image.food()} alt={faker.name.fullName()} />
                </Box>
              ))}
            </Stack>
            </Stack>
            <Divider />
            <Stack
              // alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <Stack direction={"row"} alignItems={"center"} justifyContent="space-between" spacing={2}>
                <Star size={25} />
                <Typography variant="subtitle2">Starred Messages</Typography>
              </Stack>
              <IconButton onClick={() =>(
              dispatch(updateSidebarType("STARRED"))
            )}>
                <CaretRight />
              </IconButton>
            </Stack>
            </Stack>
            <Divider />
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="space-between"
              sx={{
                pt:3,
                pb:3
              }}
            >
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <Bell size={25} />
                <Typography variant="subtitle2">Mute Notification</Typography>
              </Stack>
              <AntSwitch />
            </Stack>
            <Divider />
            <Stack sapcing={4} justifyContent="space-between" >
            <Typography>2 Groups in Common</Typography>

            <Stack sx={{pt : 3, pb : 3}}direction="row" sapcing={2} alignItems="center" justifyContent="space-between">
              <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
              <Stack spacing={0.5}>
                <Typography variant="subtitle2">PatrickEInstein</Typography>
                <Typography variant="caption">
                  Philomathy, MariahBella, LizzyBae, You
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button onClick={( ) =>(setOpenBlock(true))} startIcon={<Prohibit />} fullWidth variant="outlined">
                Block
              </Button>
              <Button onClick={( ) =>(setOpenDelete(true))} startIcon={<Trash />} fullWidth variant="outlined">
                Clear
              </Button>
            </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      { openBlock && <BlockDialog open={openBlock} handleClose={handleCloseBlock}/>}
      { openBlock && <openDelete open={openDelete} handleClose={handleCloseDelete}/>}

    </Box>
  );
};

export default Contact;
