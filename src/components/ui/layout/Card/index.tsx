import { HTMLAttributes } from 'react'
import cn from 'classnames'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ children, className, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        'flex flex-col',
        'bg-white rounded-md border-gray-lightest border-1 h-fit',
        className
      )}
      {...rest}
    >
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
    <div className={cn('flex px-7 pt-6', className)} {...rest}>
      <h4 className="font-medium text-black">{children}</h4>
    </div>
  )
}
