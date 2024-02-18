import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LandingTypes } from '../../types/types';

const initialState: LandingTypes = {
 isResumeVisible:false,
 isHomeVisible:true,
 isWorkVisible:false,
 isExperienceVisible:false,
 
};

const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    setIsResumeVisible(state, action: PayloadAction<boolean>) {
      state.isResumeVisible = action.payload;
      state.isExperienceVisible=false;
      state.isHomeVisible=false;
      state.isWorkVisible=false
    },
    setIsHomeVisible(state, action: PayloadAction<boolean>) {
      state.isHomeVisible = action.payload;
      state.isResumeVisible = false
      state.isExperienceVisible=false;
      state.isWorkVisible=false
    },
    setIsWorkVisible(state, action: PayloadAction<boolean>) {
      state.isWorkVisible = action.payload;
      state.isResumeVisible = false;
      state.isExperienceVisible=false;
      state.isHomeVisible=false;
    },
    setIsExperienceVisible(state, action: PayloadAction<boolean>) {
      state.isExperienceVisible = action.payload;
      state.isResumeVisible = false;
      state.isHomeVisible=false;
      state.isWorkVisible=false
    },
   
  },
});

export const {
  setIsResumeVisible,
  setIsExperienceVisible,
  setIsHomeVisible,
  setIsWorkVisible

} = landingSlice.actions;

export default landingSlice.reducer;
