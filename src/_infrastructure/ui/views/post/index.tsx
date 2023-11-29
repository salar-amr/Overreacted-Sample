import { container } from 'tsyringe'

import Typography from '@internal/_infrastructure/ui/dls/typography'
import {
  TypographyColor,
  TypographyTag,
  TypographyVariant
} from '@internal/_infrastructure/ui/dls/typography/typography.d'

import styles from './post.module.css'
import { PostStateManager } from './post.state'

export default function Post() {
  const postSatateManager = container.resolve(PostStateManager)

  return (
    <main>
      <Typography
        tag={TypographyTag.H2}
        variant={TypographyVariant.TITLE}
        color={TypographyColor.PRIMARY}
        className={styles.title}
      >
        {postSatateManager.post?.title}
      </Typography>
      <Typography
        variant={TypographyVariant.TEXT}
        className={styles.date}
      >
        {postSatateManager.post?.dateString}
      </Typography>
      <Typography className={styles.description}>
        {postSatateManager.post?.body}
      </Typography>
    </main>
  )
}
