import { Inter } from 'next/font/google'

import { THEME } from '@internal/_infrastructure/store/theme/theme.enum'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  theme
}: {
  children: React.ReactNode
  theme: THEME
}) {
  return (
    <html
      lang="en"
      data-theme={theme}
    >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
