import { ReactNode } from 'react'
import cn from 'classnames'
import { Variant } from '../../../../types/Global'

interface BadgeProps {
  children?: ReactNode
  className?: string
  variant?: Variant
}

function Badge({ children, variant = 'success', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'text-xs py-1.5 px-2 rounded',
        {
          'bg-primary text-white': variant === 'primary',
          'bg-success text-white': variant === 'success',
          'bg-secondary text-white': variant === 'secondary',
          'bg-danger text-white': variant === 'danger',
          'bg-warning text-dark': variant === 'warning',
          'bg-info text-white': variant === 'info',
        },
        className
      )}
    >
      {children}
    </span>
  )
}

export default Badge
