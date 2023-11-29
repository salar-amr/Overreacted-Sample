import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import themeReducer from './theme/theme.slice'

export const makeStore = () => {
  return configureStore({
    reducer: { theme: themeReducer }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore
