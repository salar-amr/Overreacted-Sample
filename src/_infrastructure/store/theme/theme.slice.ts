import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '..'

import { THEME } from './theme.enum'

export interface ThemeState {
  value: THEME
}

const initialState: ThemeState = {
  value: THEME.LIGHT
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
    },
    initializeTheme: (state, action: PayloadAction<THEME>) => {
      state.value = action.payload
    }
  }
})

export const { toggleTheme, initializeTheme } = themeSlice.actions

export const theme = (state: RootState) => state.theme.value

export default themeSlice.reducer
