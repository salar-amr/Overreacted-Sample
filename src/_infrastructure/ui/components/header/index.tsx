'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Typography from '@internal/_infrastructure/ui/dls/typography'
import {
  TypographyColor,
  TypographyTag
} from '@internal/_infrastructure/ui/dls/typography/typography.d'

import { HeaderProps } from './header'
import styles from './header.module.css'

export default function Header({ title, author }: HeaderProps) {
  const p = usePathname()
  const isHome = p === '/'

  return (
    <header className={styles.container}>
      <Link
        href="/"
        className={isHome ? '' : styles.unicorn}
      >
        {title}
      </Link>
      <div>
        <i>by</i>
        <Typography
          tag={TypographyTag.H1}
          color={TypographyColor.BASE}
        >
          {author}
        </Typography>
      </div>
    </header>
  )
}
