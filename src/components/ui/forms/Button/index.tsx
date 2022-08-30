import { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './styles.module.css'
import Spinner from '../../feedback/Spinner'

export const buttonVariants = {
  primary: cn(
    'bg-primary text-white',
    'hover:bg-active-primary hover:shadow-sm hover:shadow-primary',
    'active:bg-active-primary focus:ring-primary/40 active:ring-primary/40'
  ),
  success: cn(
    'bg-success text-white',
    'hover:bg-active-success hover:shadow-sm hover:shadow-success',
    'active:bg-active-success focus:ring-success/40 active:ring-success/40'
  ),
  secondary: cn(
    'bg-secondary text-white',
    'hover:bg-active-secondary hover:shadow-sm hover:shadow-secondary',
    'active:bg-active-secondary focus:ring-secondary/40 active:ring-secondary/40'
  ),
  info: cn(
    'bg-info text-white',
    'hover:bg-active-info hover:shadow-sm hover:shadow-info',
    'active:bg-active-info focus:ring-info/40 active:ring-info/40'
  ),
  dark: cn(
    'bg-dark text-white',
    'hover:bg-active-dark hover:shadow-sm hover:shadow-dark',
    'active:bg-active-dark focus:ring-dark/40 active:ring-dark/40'
  ),
  light: cn(
    'bg-light text-dark',
    'hover:bg-active-light hover:shadow-sm hover:shadow-light',
    'active:bg-active-light focus:ring-light/40 active:ring-light/40'
  ),
  danger: cn(
    'bg-danger text-white',
    'hover:bg-active-danger hover:shadow-sm hover:shadow-danger',
    'active:bg-active-danger focus:ring-danger/40 active:ring-danger/40'
  ),
  warning: cn(
    'bg-warning text-white',
    'hover:bg-active-warning hover:shadow-sm hover:shadow-warning',
    'active:bg-active-warning focus:ring-warning/40 active:ring-warning/40'
  ),
}
export type variantType = keyof typeof buttonVariants

// Object.keys(buttonVariants).forEach((variant) => {
//   buttonVariants[variant as variantType] = cn(
//     `bg-${variant} text-white`,
//     `hover:bg-active-${variant} hover:shadow-sm hover:shadow-${variant}`,
//     `active:bg-active-${variant} focus:ring-${variant}/40 active:ring-${variant}/40`
//   )
// })
// console.log(buttonVariants)

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: variantType
  isLoading?: boolean
  rounded?: boolean
}

function Button({
  children,
  className,
  isLoading = false,
  variant = 'info',
  rounded,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={cn(
        'flex items-center justify-center',
        'text-sm px-6 h-11 w-fit cursor-pointer',
        'border-0 ease-linear duration-300 ',
        'disabled:cursor-default disabled:opacity-[0.65]',
        'focus:ring-4 active:ring-4',
        rounded ? 'rounded-[50px]' : 'rounded-[3px]',
        buttonVariants[variant],
        className
      )}
      {...rest}
    >
      {isLoading ? <Spinner size={18} /> : children}
    </button>
  )
}

export default Button
