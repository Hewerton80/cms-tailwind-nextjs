import { Button, ButtonProps } from '../Button'
import cn from 'classnames'

type ButtonPropsOmited = Omit<
  ButtonProps,
  'leftIcon' | 'rightIcon' | 'children' | 'full' | 'variantStyle' | 'size' | 'rounded'
>

const sizeButton = {
  sm: { dimensions: '!h-8 !w-8', textIcon: '!text-base' },
  md: { dimensions: '!h-11 !w-11', textIcon: '!text-lg' },
  lg: { dimensions: '!h-12 !w-12', textIcon: '!text-xl' },
}

interface IconButtonProps extends ButtonPropsOmited {
  icon?: JSX.Element
  size?: keyof typeof sizeButton
}

function IconButton({ icon, className, size = 'md', ...rest }: IconButtonProps) {
  return (
    <Button
      className={cn('rounded-full !px-0 !py-0', sizeButton[size].dimensions, className)}
      {...rest}
    >
      <span className={sizeButton[size].textIcon}>{icon}</span>
    </Button>
  )
}

export default IconButton
