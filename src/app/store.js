import { configureStore } from "@reduxjs/toolkit";
// const reduxLogger = require("redux-logger");

import userReducer from "../features/user/userSlice";
import employeeReducer from "../features/employee/employeeSlice";
import postReducer from "../features/post/postSlice";

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    user: userReducer,
    employee: employeeReducer,
    post: postReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
