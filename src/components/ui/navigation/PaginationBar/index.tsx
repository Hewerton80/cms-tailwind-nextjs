import { HTMLAttributes, useMemo } from 'react'
import Button from '../../forms/Button'
import cn from 'classnames'
import styles from './styles.module.scss'

interface PaginationBarProps extends HTMLAttributes<HTMLDivElement> {
  currentPage: number
  totalPages: number
  totalRecords?: number
  disabled?: boolean
  onChangePage: (toPage: number) => void
}

function PaginationBar({
  className,
  totalPages,
  currentPage,
  totalRecords,
  disabled,
  onChangePage,
  ...rest
}: PaginationBarProps) {
  const arrayPagesItens = useMemo(() => {
    const numButtonsToNavihate = 5
    let initialIndexPage =
      parseInt(String(currentPage / numButtonsToNavihate)) * numButtonsToNavihate
    initialIndexPage = initialIndexPage > 0 ? initialIndexPage - 1 : 0

    return Array.from(Array(totalPages).keys()).slice(
      initialIndexPage,
      initialIndexPage + numButtonsToNavihate
    )
  }, [currentPage, totalPages])

  return (
    <div className={cn(styles.root, className)} {...rest}>
      {totalPages > 0 && (
        <>
          <span className="text-white font-sans text-xs sm:text-base leading-4 mb-2 sm:mb-0">
            Resultados da Busca {(currentPage - 1) * 15 + 1} -{' '}
            {(currentPage - 1) * 15 + 15} de {totalRecords}
          </span>
          <ul className="flex">
            <li>
              <Button
                className={'border-r-0 '}
                onClick={() => onChangePage(currentPage - 1)}
                disabled={currentPage === 1 || disabled}
              >
                {'<'}
              </Button>
            </li>
            {arrayPagesItens.map((page, i) => (
              <li
                key={i + 'page'}
                className={cn(currentPage === page + 1 && styles.active)}
              >
                <Button
                  className={i > 0 ? 'border-l-0 ' : ''}
                  disabled={disabled}
                  onClick={() => i + 1 !== currentPage && onChangePage(page + 1)}
                >
                  {page + 1}
                </Button>
              </li>
            ))}
            <li>
              <Button
                className={'border-l-0 '}
                onClick={() => onChangePage(currentPage + 1)}
                disabled={currentPage === totalPages || disabled}
              >
                {'>'}
              </Button>
            </li>
          </ul>
        </>
      )}
    </div>
  )
}

export default PaginationBar
