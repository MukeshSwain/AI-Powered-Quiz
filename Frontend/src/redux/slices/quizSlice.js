import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizHistory: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    
    setQuizHistory: (state, action) => {
      state.quizHistory = action.payload;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { setQuizHistory } = quizSlice.actions;

export default quizSlice.reducer;
