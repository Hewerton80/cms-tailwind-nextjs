import cn from 'classnames'

const badgesVariantes = {
  primary: 'bg-primary text-white',
  success: 'bg-success text-white',
  secondary: 'bg-secondary text-white',
  danger: 'bg-danger text-white',
  warning: 'bg-warning text-dark',
  info: 'bg-info text-white',
  dark: 'bg-dark text-white',
}
interface BadgeProps extends GlobalProps {
  variant?: keyof typeof badgesVariantes
}

function Badge({ children, variant = 'success', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'flex items-center justify-center',
        'w-fit text-xs py-1.5 px-2 rounded',
        badgesVariantes[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

export default Badge
