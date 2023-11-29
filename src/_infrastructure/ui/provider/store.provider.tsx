'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'

import { AppStore, makeStore } from '@internal/_infrastructure/store'
import { THEME } from '@internal/_infrastructure/store/theme/theme.enum'
import { initializeTheme } from '@internal/_infrastructure/store/theme/theme.slice'

export default function StoreProvider({
  theme,
  children
}: {
  theme: THEME
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(initializeTheme(theme))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
