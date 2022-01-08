import { TableHTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {}

export function Table({ children, className, ...rest }: TableProps) {
  return (
    <table className={cn(styles.root, className)} {...rest}>
      {children}
    </table>
  )
}

export default Table
