import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface LandingTypes {
  isHovered:boolean;
}

const initialState: LandingTypes = {
 isHovered:false
 
};

const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    setIsHovered(state, action: PayloadAction<boolean>) {
      state.isHovered = action.payload;
    },
   
  },
});

export const {
  setIsHovered,

} = landingSlice.actions;

export default landingSlice.reducer;
