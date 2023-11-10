import { Divider, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { DotsThreeCircleVertical, DownloadSimple, Image } from "phosphor-react";
import { Link } from "react-router-dom";
import { Message_options } from "../../data/index";
import { useState } from "react";

export const DocMsg = ({ el, menu }) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        padding={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.primary.main
            : theme.palette.secondary.main,
          borderRadius: 1.5,
          width: "vex-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Image size={48} />
            <Typography variant="caption">Abstract.png</Typography>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography
            variant="body2"
            sx={{ color: el.incoming ? theme.palette.primary.main : "#fff" }}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
      { menu && <MessageOptions/> }
    </Stack>
  );
};

/////////////////////////////////
export const LinkMsg = ({ el , menu }) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        padding={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.primary.main
            : theme.palette.secondary.main,
          borderRadius: 1.5,
          width: "vex-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            spacing={3}
            // alignItems="center"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <img
              src={el.preview}
              alt={el.message}
              style={{ maxHeight: 210, borderRadius: "10px" }}
            />
            <Stack spacing={2}>
              <Typography variant="subtitle2">Visit chatCity</Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.primary.main }}
                component={Link}
                to="//http://www/youtube.com"
              >
                www.chatcity.com
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              color={el.incoming ? theme.palette.text : "#fff"}
            ></Typography>
          </Stack>
        </Stack>
      </Box>
      { menu && <MessageOptions/> }
    </Stack>
  );
};
//////////////////////////////////////////////////
export const TimeLine = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Divider width="46%" />
      <Typography variant="caption" sx={{ color: theme.palette.text }}>
        {" "}
        {el.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};

export const MessageOptions = () => {
  const [anchorEl, setAnchorEl] =useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    //from my pov
    //this on clicks sets a vslue inside the anchor
    // this makes the anchor non-empty hence 1
    // then the open props in the menu takes a value of 1 and opens
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <DotsThreeCircleVertical
      id="simple2-menu2"
      // aria-aria-controls={open ? "simple-menu2" : undefined}
      aria-haspopup ="true"
      // aria-expanded ={open ? "true" : undefined}
      onClick ={handleClick}
      size={20} />
      <Menu
        id="basic2-menu2"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps ={{
          "aria-labelledby":"simple2-menu2"
        }}
        
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((el) => (
            <MenuItem
            onClick={handleClose}
            >
              {el.title}
            </MenuItem>
          ))}
        </Stack>
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </>
  );
};

////////////////////////////////////////
export const TextMsg = ({ el, menu }) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        padding={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.primary.main
            : theme.palette.secondary.main,
          borderRadius: 1.5,
          width: "vex-content",
        }}
      >
        <Typography
          variant="body2"
          color={el.incoming ? theme.palette.text : "#fff"}
        >
          {el.message}
        </Typography>
      </Box>
      {/* MESSAGE OPTIONS */}
      { menu && <MessageOptions/> }
    </Stack>
  );
};
///////////////////////////////
export const MediaMsg = ({ el , menu}) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        padding={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.primary.main
            : theme.palette.secondary.main,
          borderRadius: 1.5,
          width: "vex-content",
        }}
      >
        <Stack spacing={1}>
          <img
            src={el.img}
            alt={el.msg}
            style={{ maxHeight: 210, borderRadius: "10px" }}
          />
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "#fff"}
          >
            {el.message}
          </Typography>
        </Stack>
      </Box>
      { menu && <MessageOptions/> }
      
    </Stack>
  );
};
/////////////////////////////////////////////////

export const ReplyMsg = ({ el, menu }) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={el.incoming ? "start" : "end"}
    >
      <Box
        padding={1.5}
        sx={{
          backgroundColor: el.incoming
            ? theme.palette.primary.main
            : theme.palette.secondary.main,
          borderRadius: 1.5,
          width: "vex-content",
        }}
      >
        <Stack spacing={2}>
          <Stack
            p={2}
            direction="column"
            spacing={3}
            alignItems="center"
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 13,
            }}
          >
            <Typography variant="body2" color={theme.palette.text}>
              {el.message}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color={el.incoming ? theme.palette.text : "#fff"}
          >
            {el.reply}
          </Typography>
        </Stack>
      </Box>
      { menu && <MessageOptions/> }
    </Stack>
  );
};
