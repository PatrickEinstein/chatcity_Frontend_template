import { faker } from "@faker-js/faker";
import { Avatar, IconButton, Divider, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box, Stack } from "@mui/system";
import { Gear } from "phosphor-react";
import React, { useState } from "react";
import AntSwitch from "../../components/AntSwitch";
import { Nav_Buttons, Profile_Menu } from "../../data";
import useSettings from "../../hooks/useSettings";
import Logo from "../../assets/Images/logo.ico";

const SideBar = () => {
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();
  const theme = useTheme();

  const [anchorEl1, setAnchorEl1] = useState(null);

  const handleClick = (event) => {
    setAnchorEl1(event.currentTarget);
    //from my pov
    //this on clicks sets a vslue inside the anchor
    // this makes the anchor non-empty hence 1
    // then the open props in the menu takes a value of 1 and opens
  };

  const handleClose = () => {
    setAnchorEl1(null);
  };

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.neutral,
        height: "100%",
        width: 100,
        boxShadow: "0px 2px 2px",
      }}
    >
      <Stack
        direction="column"
        alignItems={"center"}
        justifyContent="space-between"
        sx={{ height: "100%" }}
        spacing={3}
      >
        <Stack alignItems={"center"} spacing={4}>
          {/* The APP ICON ON DASHBOARD */}
          <Box
            sx={{
              backgroundolor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img src={Logo} alt="chatcity logo" />
          </Box>
          {/* The FIRST ICON ON DASHBOARD */}

          {/* NEXT 3 ICONS */}
          <Stack
            sx={{ width: "max-content" }}
            direction="column"
            alignItems="center"
            padding={3}
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                //when the selected icon has the so-so-so index num
                //render it in a box like this with white background
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{
                      width: "max-content",
                      color: "#rrr",
                    }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                //otherwise render it in a blackground
                <IconButton
                  onClick={() => setSelected(el.index)}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
              )
            )}
            <Divider sx={{ width: "48px" }} />

            {/* GEAR ICON */}
            {selected === 3 ? (
              //if the id of the icon selected is 3, render it in a box like this

              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ width: "max-content", color: "white" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              //otherwise render it in a box like this
              <IconButton
                onClick={() => setSelected(selected)}
                sx={{
                  width: "max-content",
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>

        <Stack spacing={4}>
          {/* SWITCH */}
          <AntSwitch onChange={onToggleMode} defaultChecked />
          {/* AVATAR */}
          <Avatar
            id="simple-menus"
            src={faker.image.avatar()}
            aria-haspopup="true"
            //  aria-expanded ={open ? "true" : undefined}
            onClick={handleClick}
          />
          <Menu
            id="basic-menus"
            anchorEl1={anchorEl1}
            keepMounted
            open={Boolean(anchorEl1)}
            MenuListProps={{
              "aria-labelledby": "simple-menus",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            onClose={handleClose}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((el) => (
                <MenuItem onClick={handleClose}>
                  <Stack
                    sx={{
                      width: 100,
                      direction: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem> */}
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
