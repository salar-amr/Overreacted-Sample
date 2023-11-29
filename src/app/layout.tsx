import 'reflect-metadata'
import type { Metadata } from 'next'

import './globals.css'
import { cookies } from 'next/headers'

import { THEME } from '@internal/_infrastructure/store/theme/theme.enum'
import Header from '@internal/_infrastructure/ui/components/header'
import ThemeSwitcher from '@internal/_infrastructure/ui/components/theme-switcher'
import DefaultLayout from '@internal/_infrastructure/ui/layout/default'
import StoreProvider from '@internal/_infrastructure/ui/provider/store.provider'

export const metadata: Metadata = {
  title: 'RoomVu',
  description: 'Blog'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const themeCookie = cookieStore.get('theme')
  const theme = (themeCookie?.value as THEME) ?? THEME.DARK
  return (
    <DefaultLayout theme={theme}>
      <StoreProvider theme={theme}>
        <Header
          title="Overreacted"
          author="Salar"
        />
        <ThemeSwitcher />
        {children}
      </StoreProvider>
    </DefaultLayout>
  )
}
