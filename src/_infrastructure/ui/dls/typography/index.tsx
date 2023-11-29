import {
  TypographyColor,
  TypographyProps,
  TypographyTag,
  TypographyVariant
} from './typography.d'
import styles from './typography.module.css'

export default function Typography({
  children,
  tag = TypographyTag.P,
  variant = TypographyVariant.PARAGRAPH,
  color = TypographyColor.SECONDARY,
  className = ''
}: TypographyProps) {
  const Tag = tag

  const cls = `${styles[variant]} ${styles[color]} ${className}`

  return <Tag className={cls}>{children}</Tag>
}
