import cn from 'classnames'
import Spinner from '../../feedback/Spinner'
import { forwardRef } from 'react'

export const buttonVariants = {
  primary: {
    root: 'border-primary',
    hover: 'hover:bg-active-primary hover:shadow-sm hover:shadow-primary',
    active: 'active:bg-active-primary focus:ring-primary/40 active:ring-primary/40',
    contained: 'bg-primary text-white',
    outline: 'bg-transparent text-primary hover:bg-primary hover:text-white',
    texted: 'bg-transparent text-primary',
  },
  secondary: {
    root: 'border-secondary',
    hover: 'hover:bg-active-secondary hover:shadow-sm hover:shadow-secondary',
    active: 'active:bg-active-secondary focus:ring-secondary/40 active:ring-secondary/40',
    contained: 'bg-secondary text-white',
    outline: 'bg-transparent text-secondary hover:bg-secondary hover:text-white',
    texted: 'bg-transparent text-secondary',
  },
  success: {
    root: 'border-success',
    hover: 'hover:bg-active-success hover:shadow-sm hover:shadow-success',
    active: 'active:bg-active-success focus:ring-success/40 active:ring-success/40',
    contained: 'bg-success text-white',
    outline: 'bg-transparent text-success hover:bg-success hover:text-white',
    texted: 'bg-transparent text-success',
  },
  info: {
    root: 'border-info',
    hover: 'hover:bg-active-info hover:shadow-sm hover:shadow-info',
    active: 'active:bg-active-info focus:ring-info/40 active:ring-info/40',
    contained: 'bg-info text-white',
    outline: 'bg-transparent text-info hover:bg-info hover:text-white',
    texted: 'bg-transparent text-info',
  },
  dark: {
    root: 'border-dark',
    hover: 'hover:bg-active-dark hover:shadow-sm hover:shadow-dark',
    active: 'active:bg-active-dark focus:ring-dark/40 active:ring-dark/40',
    contained: 'bg-dark text-white',
    outline: 'bg-transparent text-dark hover:bg-dark hover:text-white',
    texted: 'bg-transparent text-dark',
  },
  light: {
    root: 'border-light',
    hover: 'hover:bg-active-light hover:shadow-sm hover:shadow-light',
    active: 'active:bg-active-light focus:ring-light/40 active:ring-light/40',
    contained: 'bg-light text-dark',
    outline: 'bg-transparent text-light hover:bg-light hover:text-white',
    texted: 'bg-transparent text-light',
  },
  danger: {
    root: 'border-danger',
    hover: 'hover:bg-active-danger hover:shadow-sm hover:shadow-danger',
    active: 'active:bg-active-danger focus:ring-danger/40 active:ring-danger/40',
    contained: 'bg-danger text-white',
    outline: 'bg-transparent text-danger hover:bg-danger hover:text-white',
    texted: 'bg-transparent text-danger',
  },
  warning: {
    root: 'border-warning',
    hover: 'hover:bg-active-warning hover:shadow-sm hover:shadow-warning',
    active: 'active:bg-active-warning focus:ring-warning/40 active:ring-warning/40',
    contained: 'bg-warning text-white',
    outline: 'bg-transparent text-warning hover:bg-warning hover:text-white',
    texted: 'bg-transparent text-warning',
  },
}

const sizeButton = {
  sm: 'h-8 px-4 py-3',
  md: 'h-11 px-6 py-3.5',
  lg: 'h-12 px-12 py-4',
}

export type variantColorType = keyof typeof buttonVariants

export interface ButtonProps extends GlobalProps {
  variantColor?: variantColorType
  variantStyle?: 'contained' | 'outlined' | 'texted'
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
  isLoading?: boolean
  rounded?: boolean
  disabled?: boolean
  full?: boolean
  size?: keyof typeof sizeButton
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

// eslint-disable-next-line react/display-name
export const Button = forwardRef(
  (
    {
      children,
      className,
      leftIcon,
      rightIcon,
      isLoading = false,
      variantColor = 'info',
      size = 'md',
      variantStyle = 'contained',
      rounded,
      full,
      disabled,
      ...rest
    }: ButtonProps,
    ref: any
  ) => {
    const isDisabled = disabled || isLoading
    const isTexted = variantStyle === 'texted'
    const isContained = variantStyle === 'contained'
    const isOutlined = variantStyle === 'outlined'

    return (
      <button
        disabled={isDisabled}
        className={cn(
          'relative flex items-center justify-center',
          'text-sm cursor-pointer ease-linear duration-200',
          'disabled:cursor-default disabled:opacity-[0.65]',
          buttonVariants[variantColor].root,
          isContained && buttonVariants[variantColor].contained,
          isTexted
            ? cn(buttonVariants[variantColor].texted, 'hover:underline')
            : cn(sizeButton[size], 'border'),
          isOutlined && buttonVariants[variantColor].outline,
          !isDisabled && !isTexted && 'focus:ring-4 active:ring-4',
          !isDisabled && !isTexted && buttonVariants[variantColor].hover,
          !isDisabled && !isTexted && buttonVariants[variantColor].active,
          rounded ? 'rounded-[50px]' : 'rounded-[3px]',
          full ? 'w-full' : 'w-fit',
          className
        )}
        ref={ref}
        {...rest}
      >
        {isLoading ? (
          <Spinner size={18} className="" />
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
)

// export  forwardRef(Button)
