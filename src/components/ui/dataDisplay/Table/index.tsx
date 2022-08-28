import { HTMLAttributes, ThHTMLAttributes, useEffect } from 'react'
import cn from 'classnames'
import styles from './styles.module.css'

interface TableProps extends HTMLAttributes<HTMLDivElement> {}
interface ThProps extends GlobalProps {}
interface TrProps extends GlobalProps {}
interface TdProps extends GlobalProps {}

export function Table({ children, className, ...rest }: TableProps) {
  return (
    <div className={cn('flex w-full overflow-x-auto', className)} {...rest}>
      <table className="w-full">{children}</table>
    </div>
  )
}

export function Th({ children, className, ...rest }: ThProps) {
  return (
    <th
      className={cn(
        'py-5 px-4 align-top border border-gray-border dark:border-white/10',
        'font-medium text-left',
        className
      )}
      {...rest}
    >
      {children}
    </th>
  )
}

export function Tr({ children, className, ...rest }: TrProps) {
  return (
    <tr className={cn('even:bg-[#f4f5fa] dark:even:bg-dark-hover', className)} {...rest}>
      {children}
    </tr>
  )
}

export function Td({ children, className, ...rest }: TdProps) {
  return (
    <td className={cn('text-sm py-5 px-4', className)} {...rest}>
      {children}
    </td>
  )
}

export default Table
