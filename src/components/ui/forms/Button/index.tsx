import cn from 'classnames'
import Spinner from '../../feedback/Spinner'

export const buttonVariants = {
  primary: {
    root: 'border-primary',
    hover: 'hover:bg-active-primary hover:shadow-sm hover:shadow-primary',
    active: 'active:bg-active-primary focus:ring-primary/40 active:ring-primary/40',
    outline: 'bg-transparent text-primary hover:bg-primary hover:text-white',
    withoutOutline: 'bg-primary text-white',
  },
  secondary: {
    root: 'border-secondary',
    hover: 'hover:bg-active-secondary hover:shadow-sm hover:shadow-secondary',
    active: 'active:bg-active-secondary focus:ring-secondary/40 active:ring-secondary/40',
    outline: 'bg-transparent text-secondary hover:bg-secondary hover:text-white',
    withoutOutline: 'bg-secondary text-white',
  },
  success: {
    root: 'border-success',
    hover: 'hover:bg-active-success hover:shadow-sm hover:shadow-success',
    active: 'active:bg-active-success focus:ring-success/40 active:ring-success/40',
    outline: 'bg-transparent text-success hover:bg-success hover:text-white',
    withoutOutline: 'bg-success text-white',
  },
  info: {
    root: 'border-info',
    hover: 'hover:bg-active-info hover:shadow-sm hover:shadow-info',
    active: 'active:bg-active-info focus:ring-info/40 active:ring-info/40',
    outline: 'bg-transparent text-info hover:bg-info hover:text-white',
    withoutOutline: 'bg-info text-white',
  },
  dark: {
    root: 'border-dark',
    hover: 'hover:bg-active-dark hover:shadow-sm hover:shadow-dark',
    active: 'active:bg-active-dark focus:ring-dark/40 active:ring-dark/40',
    outline: 'bg-transparent text-dark hover:bg-dark hover:text-white',
    withoutOutline: 'bg-dark text-white',
  },
  light: {
    root: 'border-light',
    hover: 'hover:bg-active-light hover:shadow-sm hover:shadow-light',
    active: 'active:bg-active-light focus:ring-light/40 active:ring-light/40',
    outline: 'bg-transparent text-light hover:bg-light hover:text-white',
    withoutOutline: 'bg-light text-dark',
  },
  danger: {
    root: 'border-danger',
    hover: 'hover:bg-active-danger hover:shadow-sm hover:shadow-danger',
    active: 'active:bg-active-danger focus:ring-danger/40 active:ring-danger/40',
    outline: 'bg-transparent text-danger hover:bg-danger hover:text-white',
    withoutOutline: 'bg-danger text-white',
  },
  warning: {
    root: 'border-warning',
    hover: 'hover:bg-active-warning hover:shadow-sm hover:shadow-warning',
    active: 'active:bg-active-warning focus:ring-warning/40 active:ring-warning/40',
    outline: 'bg-transparent text-warning hover:bg-warning hover:text-white',
    withoutOutline: 'bg-warning text-white',
  },
}
export type variantType = keyof typeof buttonVariants

const sizeButton = {
  sm: cn('h-8 px-4 py-3'),
  md: cn('h-11 px-6 py-3.5'),
  lg: cn('h-12 px-12 py-4'),
}

export interface ButtonProps extends GlobalProps {
  variant?: variantType
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
  isLoading?: boolean
  rounded?: boolean
  outlined?: boolean
  disabled?: boolean
  full?: boolean
  size?: keyof typeof sizeButton
  onClick?: () => void
}

function Button({
  children,
  className,
  leftIcon,
  rightIcon,
  isLoading = false,
  variant = 'info',
  size = 'md',
  rounded,
  full,
  outlined,
  disabled,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || isLoading
  return (
    <button
      disabled={isDisabled}
      className={cn(
        'relative flex items-center justify-center',
        'text-sm cursor-pointer border ease-linear duration-200',
        'disabled:cursor-default disabled:opacity-[0.65]',
        buttonVariants[variant].root,
        sizeButton[size],
        !isDisabled && 'focus:ring-4 active:ring-4',
        !isDisabled && buttonVariants[variant].hover,
        !isDisabled && buttonVariants[variant].active,
        rounded ? 'rounded-[50px]' : 'rounded-[3px]',
        full ? 'w-full' : 'w-fit',
        buttonVariants[variant][outlined ? 'outline' : 'withoutOutline'],
        className
      )}
      {...rest}
    >
      {isLoading ? (
        <Spinner size={18} />
      ) : (
        <>
          {leftIcon && <span className="mr-4 text-lg">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-4 text-lg">{rightIcon}</span>}
        </>
      )}
    </button>
  )
}

export default Button
