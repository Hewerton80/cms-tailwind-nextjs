import style from './ButtonGroup.module.css'
import classNames from 'classnames'

interface ButtonGroupProps extends GlobalProps {
  vertical?: boolean
}

export function ButtonGroup({
  children,
  vertical,
  className,
  ...rest
}: ButtonGroupProps) {
  return (
    <div
      className={classNames(style['btn-group'], vertical && style.vertical, className)}
      {...rest}
    >
      {children}
    </div>
  )
}
