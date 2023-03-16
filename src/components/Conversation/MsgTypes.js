import { Divider, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { DownloadSimple, Image } from "phosphor-react";
import { Link } from "react-router-dom";

export const DocMsg = ({ el }) => {
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
            <Image size={48}/>
            <Typography variant="caption">Abstract.png</Typography>
            <IconButton>
                <DownloadSimple/>
            </IconButton>
          </Stack>
          <Typography variant="body2"
                sx={{ color: el.incoming ? theme.palette.primary.main : "#fff" }}>{el.message}</Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

/////////////////////////////////
export const LinkMsg = ({ el }) => {
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

////////////////////////////////////////
export const TextMsg = ({ el }) => {
  const theme= useTheme();
  console.log(theme)
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
    </Stack>
  );
};
///////////////////////////////
export const MediaMsg = ({ el }) => {
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
    </Stack>
  );
};
/////////////////////////////////////////////////

export const ReplyMsg = ({ el }) => {
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
    </Stack>
  );
};
