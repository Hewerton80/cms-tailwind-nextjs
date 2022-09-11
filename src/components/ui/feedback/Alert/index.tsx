import { HTMLAttributes } from 'react'
import cn from 'classnames'

export const alertVariants = {
  primary: {
    root: 'text-primary bg-primary/20 border-primary/10',
  },
  success: {
    root: 'text-success bg-success/20 border-success/10',
  },
  secondary: {
    root: 'text-secondary bg-secondary/20 border-secondary/10',
  },
  info: {
    root: 'text-info bg-info/20 border-info/10',
  },
  danger: {
    root: 'text-danger bg-danger/20 border-danger/10',
  },
  dark: {
    root: 'text-dark bg-dark/20 border-dark/10',
  },
  warning: {
    root: 'text-warning bg-warning/20 border-warning/10',
  },
}

export type alertVariants = keyof typeof alertVariants

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant: alertVariants
}

function Alert({ variant = 'info', children, className, ...rest }: AlertProps) {
  return (
    <div
      className={cn(
        'flex items-center',
        'px-5 py-3 w-full text-sm border-1 rounded-[4px]',
        alertVariants[variant].root,
        className
      )}
      {...rest}
    >
      <span>{children}</span>
    </div>
  )
}

export default Alert
