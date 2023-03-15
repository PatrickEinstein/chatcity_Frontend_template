import React from "react";
import { Outlet } from "react-router-dom";
import { Avatar, Box, Divider, Stack, Switch } from "@mui/material";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { IconButton } from "@mui/material";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useTheme, styled } from "@mui/material/styles";
import useSettings from "../../hooks/useSettings"
import { useState } from "react";
///////////////////////////SWITCH STYLE
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));
////////////////////////////////// END OF SWITCH


const DashboardLayout = () => {
  const [selected, setSelected] = useState(0);
  
  const theme = useTheme();
  console.log(theme);

  const {onToggleMode} = useSettings()
  

  return (
    <>
    <Stack direction="row" sx={{ height: "100%" }}>  
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
                      color: theme.palette.mode === "light" ?  "#000" : theme.palette.text.primary  ,
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
                  <IconButton sx={{ width: "max-content", color:"white" }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                //otherwise render it in a box like this
                <IconButton
                  onClick={() => setSelected(selected)}
                  sx={{
                    width: "max-content",
                    color: theme.palette.mode ==="light" ?  "#000" : theme.palette.text.primary  ,
                  }}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>

          
          <Stack spacing ={4}>
            {/* SWITCH */}
          <AntSwitch onChange={onToggleMode} defaultChecked />
          {/* AVATAR */}
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>

      <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
