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
import { SHAREDDOCS, SHAREDLINKS } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";

function SharedMessages() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            <IconButton onClick={() => dispatch(updateSidebarType("CONTACT"))}>
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2"> Shared Messages</Typography>
          </Stack>
        </Box>
        <Tabs
          sx={{
            px: 2,
            pt: 2,
          }}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>
        {/* BODY */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflow: "scroll",
          }}
          padding={3}
          spacing={value === 1 ? 1 : 3}
        >
          {(() => {
            switch (value) {
              case 0:
                return (
                  <Grid container spacing={2}>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((el) => (
                      <Grid item xs={4}>
                        <img
                          src={faker.image.avatar()}
                          alt={faker.name.fullName()}
                        />
                      </Grid>
                    ))}
                  </Grid>
                );
              case 1:
                return SHAREDLINKS.map((el) => <LinkMsg el={el} />);
              case 2:
                return SHAREDDOCS.map((el) => <DocMsg el={el} />)

              default:
                break;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
}

export default SharedMessages;
