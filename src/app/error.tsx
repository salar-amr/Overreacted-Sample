'use client'

import Typography from '@internal/_infrastructure/ui/dls/typography'
import {
  TypographyColor,
  TypographyTag,
  TypographyVariant
} from '@internal/_infrastructure/ui/dls/typography/typography.d'

export default function Error() {
  return (
    <main>
      <Typography
        tag={TypographyTag.H3}
        variant={TypographyVariant.TITLE}
        color={TypographyColor.SECONDARY}
      >
        Something went wrong!
      </Typography>
    </main>
  )
}
