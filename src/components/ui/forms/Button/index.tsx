import { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './styles.module.css'
import Spinner from '../../feedback/Spinner'

export const buttonVariants = {
  primary: {
    root: cn(
      'border-primary hover:bg-active-primary hover:shadow-sm hover:shadow-primary',
      'active:bg-active-primary focus:ring-primary/40 active:ring-primary/40'
    ),
    outline: 'bg-transparent text-primary hover:bg-primary hover:text-white',
    withoutOutline: 'bg-primary text-white',
  },
  secondary: {
    root: cn(
      'border-secondary hover:bg-active-secondary hover:shadow-sm hover:shadow-secondary',
      'active:bg-active-secondary focus:ring-secondary/40 active:ring-secondary/40'
    ),
    outline: 'bg-transparent text-secondary hover:bg-secondary hover:text-white',
    withoutOutline: 'bg-secondary text-white',
  },
  success: {
    root: cn(
      'border-success hover:bg-active-success hover:shadow-sm hover:shadow-success',
      'active:bg-active-success focus:ring-success/40 active:ring-success/40'
    ),
    outline: 'bg-transparent text-success hover:bg-success hover:text-white',
    withoutOutline: 'bg-success text-white',
  },
  info: {
    root: cn(
      'border-info hover:bg-active-info hover:shadow-sm hover:shadow-info',
      'active:bg-active-info focus:ring-info/40 active:ring-info/40'
    ),
    outline: 'bg-transparent text-info hover:bg-info hover:text-white',
    withoutOutline: 'bg-info text-white',
  },
  dark: {
    root: cn(
      'border-dark hover:bg-active-dark hover:shadow-sm hover:shadow-dark',
      'active:bg-active-dark focus:ring-dark/40 active:ring-dark/40'
    ),
    outline: 'bg-transparent text-dark hover:bg-dark hover:text-white',
    withoutOutline: 'bg-dark text-white',
  },
  light: {
    root: cn(
      'border-light hover:bg-active-light hover:shadow-sm hover:shadow-light',
      'active:bg-active-light focus:ring-light/40 active:ring-light/40'
    ),
    outline: 'bg-transparent text-light hover:bg-light hover:text-white',
    withoutOutline: 'bg-light text-dark',
  },
  danger: {
    root: cn(
      'border-danger hover:bg-active-danger hover:shadow-sm hover:shadow-danger',
      'active:bg-active-danger focus:ring-danger/40 active:ring-danger/40'
    ),
    outline: 'bg-transparent text-danger hover:bg-danger hover:text-white',
    withoutOutline: 'bg-danger text-white',
  },
  warning: {
    root: cn(
      'border-warning hover:bg-active-warning hover:shadow-sm hover:shadow-warning',
      'active:bg-active-warning focus:ring-warning/40 active:ring-warning/40'
    ),
    outline: 'bg-transparent text-warning hover:bg-warning hover:text-white',
    withoutOutline: 'bg-warning text-white',
  },
}
export type variantType = keyof typeof buttonVariants

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: variantType
  isLoading?: boolean
  rounded?: boolean
  outlined?: boolean
}

function Button({
  children,
  className,
  isLoading = false,
  variant = 'info',
  rounded,
  outlined,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={cn(
        'flex items-center justify-center',
        'text-sm px-6 h-11 w-fit cursor-pointer',
        'border ease-linear duration-200 ',
        'disabled:cursor-default disabled:opacity-[0.65]',
        'focus:ring-4 active:ring-4',
        rounded ? 'rounded-[50px]' : 'rounded-[3px]',
        buttonVariants[variant].root,
        outlined
          ? buttonVariants[variant].outline
          : buttonVariants[variant].withoutOutline,
        className
      )}
      {...rest}
    >
      {isLoading ? <Spinner size={18} /> : children}
    </button>
  )
}

export default Button
