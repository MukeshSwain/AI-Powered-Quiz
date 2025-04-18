import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import quizReducer from "./slices/quizSlice";
 import questionReducer from "./slices/questionSlice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "quiz", "questions"], // Only persist specific reducers (e.g., "auth")
};

// Combine multiple reducers
const rootReducer = combineReducers({
    auth: authReducer,
  quiz: quizReducer,
  questions: questionReducer
   // Example future reducer
});

export default persistReducer(persistConfig, rootReducer);
