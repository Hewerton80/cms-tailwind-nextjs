import { ImSpinner2 } from 'react-icons/im'
import colors from 'tailwindcss/colors'

interface SpinnerProps {
  color?: string
  size?: number
}

function Spinner({ color = colors.white, size = 18 }: SpinnerProps) {
  return (
    <ImSpinner2
      className="animate-spin"
      size={size}
      style={{
        color,
      }}
    />
  )
}

export default Spinner
