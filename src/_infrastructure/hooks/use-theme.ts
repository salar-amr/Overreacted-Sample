import { useAppDispatch, useAppSelector } from '@internal/_infrastructure/store'
import { toggleTheme } from '@internal/_infrastructure/store/theme/theme.slice'

import { THEME } from '../store/theme/theme.enum'

export default function useTheme() {
  const theme = useAppSelector((store) => store.theme.value)
  const dispatch = useAppDispatch()
  const toggle = () => {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
    document.documentElement.dataset.theme = newTheme
    document.cookie = `theme=${encodeURIComponent(newTheme)}`
    dispatch(toggleTheme())
  }

  return { theme, toggle }
}
