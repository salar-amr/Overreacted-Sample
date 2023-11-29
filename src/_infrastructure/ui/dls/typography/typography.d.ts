import type { ReactNode } from 'react'

export enum TypographyTag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p'
}

export enum TypographyVariant {
  TITLE = 'title',
  PARAGRAPH = 'paragraph',
  TEXT = 'text'
}

export enum TypographyColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  BASE = 'base'
}

export type TypographyProps = {
  children: ReactNode
  tag?: TypographyTag
  variant?: TypographyVariant
  color?: TypographyColor
  className?: string
}
