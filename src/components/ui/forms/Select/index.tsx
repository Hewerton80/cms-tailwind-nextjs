import { SelectHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

function Select({ className, ...rest }: SelectProps) {
  return <select className={cn(styles.root, className)} {...rest} />
}

export default Select
