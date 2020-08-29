import { configureStore } from "@reduxjs/toolkit";


import gameSlice from "../lib/slices/gameSlice";

export default configureStore({
  reducer: {
    game: gameSlice,
  },
  devTools: true,
});
