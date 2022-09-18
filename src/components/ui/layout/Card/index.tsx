import { HTMLAttributes } from 'react'
import cn from 'classnames'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ children, className, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        'flex flex-col',
        'w-full',
        'bg-white rounded-md border-gray-lightest border-1 h-fit',
        'dark:bg-dark-card dark:border-dark-card',
        className
      )}
      {...rest}
    >
      {' '}
      {children}
    </div>
  )
}

export function CardHeader({ children, className, ...rest }: CardProps) {
  return (
    <div
      className={cn('flex items-center justify-between', 'px-7 pt-6', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export function CardActions({ children, className, ...rest }: CardProps) {
  return (
    <div className={cn('flex items-center', className)} {...rest}>
      {children}
    </div>
  )
}

export function CardBody({ children, className, ...rest }: CardProps) {
  return (
    <div className={cn('flex flex-col px-7 py-6', className)} {...rest}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className, ...rest }: CardProps) {
  return (
    <div className={cn('flex', className)} {...rest}>
      <h4 className="font-medium text-black dark:text-light">{children}</h4>
    </div>
  )
}

export function CardFooter({ children, className, ...rest }: CardProps) {
  return (
    <div className={cn('flex px-7 pb-6', className)} {...rest}>
      {children}
    </div>
  )
}
