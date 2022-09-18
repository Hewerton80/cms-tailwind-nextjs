import { Button, ButtonProps } from '../Button'
import cn from 'classnames'

type ButtonPropsOmited = Omit<
  ButtonProps,
  'leftIcon' | 'rightIcon' | 'children' | 'full' | 'variantStyle' | 'size'
>

const sizeButton = {
  sm: '!h-8 !w-8',
  md: '!h-11 !w-11',
  lg: '!h-12 !w-12',
}

interface IconButtonProps extends ButtonPropsOmited {
  icon?: JSX.Element
  size?: keyof typeof sizeButton
}

function IconButton({ icon, className, size = 'md', ...rest }: IconButtonProps) {
  return (
    <Button
      className={cn('rounded-full !px-0 !py-0', sizeButton[size], className)}
      {...rest}
    >
      <span className="!text-lg">{icon}</span>
    </Button>
  )
}

export default IconButton
