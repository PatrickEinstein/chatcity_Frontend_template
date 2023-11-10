import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // can also be STARRED, SHARED
  },
  chatHistory: []
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    //Toggle Sidebar
    toggleSidebar: (state, action) => {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType: (state, action) => {
      state.sidebar.type = action.payload;
    },
    updateChatHistory: (state, action) => {
      console.log("Action Payload:", action.payload);
      state.chatHistory.push(action.payload);
    },
  },
});

export const { toggleSidebar, updateSidebarType, updateChatHistory } =
  appSlice.actions;
export default appSlice.reducer;
