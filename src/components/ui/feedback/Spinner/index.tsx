import classNames from 'classnames'
import { ImSpinner2 } from 'react-icons/im'
import colors from 'tailwindcss/colors'
interface SpinnerProps extends GlobalProps {
  color?: string
  size?: number
}

function Spinner({ color = colors.white, size = 18, className, ...rest }: SpinnerProps) {
  return (
    <ImSpinner2
      className={classNames('spinner', 'animate-spin', className)}
      size={size}
      style={{ color }}
      {...rest}
    />
  )
}

export default Spinner
