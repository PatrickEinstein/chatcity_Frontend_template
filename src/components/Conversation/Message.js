import { Box, Stack } from "@mui/system";
import React from "react";
import { Chat_History } from "../../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  TimeLine,
} from "./MsgTypes";
import { useSelector } from "react-redux";

function Message({ menu }) {
  const NewChatHistory = useSelector((state) => state.chatHistory);
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {/* {Chat_History.map((el) => { */}
        {NewChatHistory?.map((el) => {
          switch (el?.type) {
            case "divider":
              return <TimeLine el={el} />;

            case "msg":
              switch (el?.subtype) {
                case "img":
                  return <MediaMsg el={el} menu={menu} />;
                case "doc":
                  return <DocMsg el={el} menu={menu} />;
                case "Link":
                  return <LinkMsg el={el} menu={menu} />;
                case "reply":
                  return <ReplyMsg el={el} menu={menu} />;

                default:
                  return <TextMsg el={el} menu={menu} />;
              }

              break;

            default:
              return <></>;
              break;
          }
        })}
      </Stack>
    </Box>
  );
}

export default Message;
