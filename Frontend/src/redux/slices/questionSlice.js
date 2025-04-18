import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizQuestions: [],
};

export const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuizQuestions: (state, action) => {
      state.quizQuestions = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuizQuestions } = questionSlice.actions;

export default questionSlice.reducer;
