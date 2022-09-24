/* eslint-disable @next/next/no-img-element */
import cn from 'classnames'
import { HTMLAttributes } from 'react'
const variantColorCard = {
  default: {
    root: 'text-black dark:text-light bg-white dark:bg-dark-card',
  },
  primary: {
    root: 'text-white bg-primary',
  },
  success: {
    root: 'text-white bg-success',
  },
  secondary: {
    root: 'text-white bg-secondary',
  },
  info: {
    root: 'text-white bg-info',
  },
  danger: {
    root: 'text-white bg-danger',
  },
  dark: {
    root: 'text-white bg-dark',
  },
  warning: {
    root: 'text-dark bg-warning',
  },
}

const variantImgCard = {
  top: 'mb-auto',
  bottom: 'mt-auto',
}
const variantFooterCard = {
  left: 'justify-start ',
  center: 'justify-center',
  right: 'justify-end',
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variantColorCard
}

export interface CardImgProps extends GlobalProps {
  src: string
  alt?: string
  variant?: keyof typeof variantImgCard
}

export interface CardFooterProps extends GlobalProps {
  variant?: keyof typeof variantFooterCard
}

export function Card({ children, className, variant = 'default', ...rest }: CardProps) {
  return (
    <div
      className={cn(
        'flex flex-col',
        'w-full overflow-hidden',
        'rounded-md border-gray-lightest dark:border-dark-card border-1',
        variantColorCard[variant].root,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export function CardImg({
  children,
  src,
  alt,
  className,
  variant = 'top',
  ...rest
}: CardImgProps) {
  return (
    <img
      className={cn('w-full h-auto', variantImgCard[variant], className)}
      src={src}
      alt={alt}
      loading="lazy"
      {...rest}
    />
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
    <div className={cn('flex flex-col px-7 pt-4 pb-6', className)} {...rest}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className, ...rest }: CardProps) {
  return (
    <div className={cn('flex', className)} {...rest}>
      <h4 className="text-lg">{children}</h4>
    </div>
  )
}

export function CardFooter({
  children,
  className,
  variant = 'left',
  ...rest
}: CardFooterProps) {
  return (
    <div
      className={cn('flex px-7 pb-6 mt-auto', variantFooterCard[variant], className)}
      {...rest}
    >
      {children}
    </div>
  )
}
