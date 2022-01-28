import { isUndefined } from './isType'
import breakpoints from '../../assets/breakpoints.json'
export const isMobile = () => {
  if (!isUndefined(window?.innerWidth)) {
    return window.innerWidth < breakpoints.md
  }
  return false
}
