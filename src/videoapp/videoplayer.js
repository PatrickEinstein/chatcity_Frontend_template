import React, { useContext } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SocketContext } from "./socketcontex";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Socket } from "socket.io-client";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme) => ({
  video: {
    width: "300px",
    [theme.breakpoints.down("xs")]: {
      width: "100px",
    },
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
  },
}));

function Videoplayer() {
  const { call, callaccepted, userVideo, myVideo, stream, callended, name } =
    useContext(SocketContext);

  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container className={classes.gridContainer}>
        {/* OWN VIDEO */}

        {stream && (
          <Paper className={classes.paper}>
            <Grid item xs={6}>
              <Item>
                <Typography variant="h5" gutterBottom>
                  {" "}
                  {name || "Name"}
                </Typography>
                <video
                  playsInline
                  muted
                  ref={myVideo}
                  autoPlay
                  className={classes.video}
                />
              </Item>
            </Grid>
          </Paper>
        )}

        {/* USERS VIDEO */}

        {callaccepted && !callended && (
          <Paper className={classes.paper}>
            <Grid item xs={6}>
              <Item>
                <Typography variant="h5" gutterBottom>
                  {" "}
                  {call.name || "Name"}
                </Typography>
                <video
                  playsInline
                  ref={userVideo}
                  autoPlay
                  className={classes.video}
                />
              </Item>
            </Grid>
          </Paper>
        )}
      </Grid>
    </Box>
  );
}

export default Videoplayer;
