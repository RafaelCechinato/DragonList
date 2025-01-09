import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dragon_selected: {}
};

const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {
    selectDragon: (state, action) => {
      state.dragon_selected = action.payload;
    },
    cleanSelectedDragon: (state) => {
      state.dragon_selected = {};
    }
  },
});

export const { selectDragon, cleanSelectedDragon } = dragonSlice.actions;

export default dragonSlice.reducer;
