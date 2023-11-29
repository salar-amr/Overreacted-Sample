'use client'
import Image from 'next/image'

import useTheme from '@internal/_infrastructure/hooks/use-theme'
import { THEME } from '@internal/_infrastructure/store/theme/theme.enum'

import styles from './theme-switcher.module.css'

export default function ThemeSwitcher() {
  const { theme, toggle } = useTheme()

  const mode = {
    [THEME.DARK]: {
      src: '/moon-icon.png',
      alt: 'moon'
    },
    [THEME.LIGHT]: {
      src: '/sun-icon.png',
      alt: 'sun'
    }
  }

  return (
    <div className={styles.container}>
      <Image
        src={mode[theme].src}
        alt={mode[theme].alt}
        width={40}
        height={40}
        onClick={toggle}
      />
    </div>
  )
}
