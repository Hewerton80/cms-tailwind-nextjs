import { HTMLAttributes, useEffect, useRef } from 'react'
import cn from 'classnames'

interface TableProps extends HTMLAttributes<HTMLDivElement> {}
interface TbodyProps extends GlobalProps {}
interface TheadProps extends GlobalProps {}
interface ThProps extends GlobalProps {}
interface TrProps extends GlobalProps {}
interface TdProps extends GlobalProps {}

export function Table({ children, className, ...rest }: TableProps) {
  return (
    <div className={cn('flex w-full overflow-x-auto', className)} {...rest}>
      <table className="w-full text-sm">{children}</table>
    </div>
  )
}

export function Th({ children, className, ...rest }: ThProps) {
  return (
    <th
      className={cn('py-5 px-4 align-top', 'font-medium text-left', className)}
      {...rest}
    >
      {children}
    </th>
  )
}

export function Tr({ children, ...rest }: TrProps) {
  return <tr {...rest}>{children}</tr>
}

export function Tbody({ children, ...rest }: TbodyProps) {
  const tbodyRef = useRef<HTMLTableSectionElement>(null)

  useEffect(() => {
    if (tbodyRef?.current) {
      const trs = tbodyRef.current.querySelectorAll('tr:nth-of-type(odd)')
      trs.forEach((tr) => {
        tr?.classList?.add('bg-[#f4f5fa]', 'dark:bg-dark-hover')
      })
    }
  }, [])

  return (
    <tbody ref={tbodyRef} {...rest}>
      {children}
    </tbody>
  )
}

export function Thead({ children, ...rest }: TheadProps) {
  return <thead {...rest}>{children}</thead>
}

export function Td({ children, className, ...rest }: TdProps) {
  return (
    <td className={cn('text-sm py-5 px-4', className)} {...rest}>
      {children}
    </td>
  )
}

export default Table
