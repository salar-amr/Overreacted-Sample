import Link from 'next/link'

import Typography from '@internal/_infrastructure/ui/dls/typography'
import {
  TypographyColor,
  TypographyTag,
  TypographyVariant
} from '@internal/_infrastructure/ui/dls/typography/typography.d'

import { PostProps } from './post'
import styles from './post.module.css'

export default function Post({ url, title, body, date }: PostProps) {
  return (
    <li className={styles.article}>
      <Link href={url}>
        <Typography
          tag={TypographyTag.H4}
          variant={TypographyVariant.TITLE}
          color={TypographyColor.PRIMARY}
          className={styles.title}
        >
          {title}
        </Typography>
        <Typography
          variant={TypographyVariant.TEXT}
          className={styles.date}
        >
          {date}
        </Typography>
        <Typography className={styles.description}>{body}</Typography>
      </Link>
    </li>
  )
}
