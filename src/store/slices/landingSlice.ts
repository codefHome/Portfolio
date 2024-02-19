import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LandingTypes } from '../../types/types';

const initialState: LandingTypes = {
 isResumeVisible:false,
 isHomeVisible:true,
 isWorkVisible:false,
 isExperienceVisible:false,
 openDrawer:false
 
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
      state.openDrawer = false
    },
    setIsHomeVisible(state, action: PayloadAction<boolean>) {
      state.isHomeVisible = action.payload;
      state.isResumeVisible = false
      state.isExperienceVisible=false;
      state.isWorkVisible=false
      state.openDrawer = false
    },
    setIsWorkVisible(state, action: PayloadAction<boolean>) {
      state.isWorkVisible = action.payload;
      state.isResumeVisible = false;
      state.isExperienceVisible=false;
      state.isHomeVisible=false;
      state.openDrawer = false
    },
    setIsExperienceVisible(state, action: PayloadAction<boolean>) {
      state.isExperienceVisible = action.payload;
      state.isResumeVisible = false;
      state.isHomeVisible=false;
      state.isWorkVisible=false
      state.openDrawer = false
    },
    setDrawerState(state, action: PayloadAction<boolean>) {
      state.openDrawer = action.payload;
    },
   
  },
});

export const {
  setIsResumeVisible,
  setIsExperienceVisible,
  setIsHomeVisible,
  setIsWorkVisible,
  setDrawerState

} = landingSlice.actions;

export default landingSlice.reducer;
