import { createSlice } from "@reduxjs/toolkit";
import { useDispatch as dispatch } from "react-redux";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // can also be STARRED, SHARED
  },
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
      state.sidebar.type = action.payload.type;
    },
  },
});

export const ToggleSidebar = () => {
  return async () => {
    dispatch(appSlice.actions.toggleSidebar());
  };
};
export const UpdateSidebarType = (type) => {
  return async () => {
    dispatch(
      appSlice.actions.updateSidebarType({
        type,
      })
    );
  };
};

export const { toggleSidebar, updateSidebarType } = appSlice.actions;
export default appSlice.reducer;
