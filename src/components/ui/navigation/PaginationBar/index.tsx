import { HTMLAttributes, useCallback, useMemo } from 'react'
import { Button } from '../../forms/Button'
import cn from 'classnames'
import { getRange } from '../../../../utils/getRange'
import { getBodyElement } from '../../../../utils/getBodyElement'
import { ButtonGroup } from '../../layout/ButtonGroup'

interface PaginationBarProps extends HTMLAttributes<HTMLDivElement> {
  currentPage: number
  totalPages: number
  totalRecords: number
  perPage: number
  disabled?: boolean
  hidden?: boolean
  onChangePage: (toPage: number) => void
}

function PaginationBar({
  className,
  totalPages,
  currentPage,
  totalRecords,
  perPage,
  disabled,
  hidden = false,
  onChangePage,
  ...rest
}: PaginationBarProps) {
  const paginationLabel = useMemo(() => {
    const startRange = (currentPage - 1) * perPage + 1
    let endRange = (currentPage - 1) * perPage + perPage
    endRange = endRange < totalRecords ? endRange : totalRecords
    return (
      <>
        Resultados da Busca {startRange}
        {' - '}
        {endRange} de {totalRecords}
      </>
    )
  }, [currentPage, perPage, totalRecords])

  const arrayPagesItens = useMemo(() => {
    const maximumNumberOfButtonsToNavigate = 5
    let initialIndexPage =
      parseInt(String(currentPage / maximumNumberOfButtonsToNavigate)) *
      maximumNumberOfButtonsToNavigate
    initialIndexPage = initialIndexPage > 0 ? initialIndexPage - 1 : 0

    return getRange(totalPages).slice(
      initialIndexPage,
      initialIndexPage + maximumNumberOfButtonsToNavigate
    )
  }, [currentPage, totalPages])

  const handleChangePage = useCallback(
    (toPage: number) => {
      onChangePage(toPage)
      const bodyElement = getBodyElement()
      if (bodyElement && document?.documentElement) {
        bodyElement.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    },
    [onChangePage]
  )

  if (hidden) {
    return <></>
  }

  return (
    <div className={cn('flex items-start justify-between w-full', className)} {...rest}>
      <span className="text-sm">{paginationLabel}</span>
      {totalPages > 0 && (
        <ButtonGroup>
          <Button
            variantColor="primary"
            variantStyle="outlined"
            size="sm"
            onClick={() => handleChangePage(currentPage - 1)}
            disabled={currentPage === 1 || disabled}
          >
            {'<'}
          </Button>
          {arrayPagesItens.map((page, i) => (
            <Button
              key={i + 'page'}
              variantColor="primary"
              variantStyle={currentPage === page + 1 ? 'contained' : 'outlined'}
              size="sm"
              disabled={disabled}
              onClick={() => i + 1 !== currentPage && handleChangePage(page + 1)}
            >
              {page + 1}
            </Button>
          ))}
          <Button
            variantColor="primary"
            variantStyle="outlined"
            size="sm"
            onClick={() => handleChangePage(currentPage + 1)}
            disabled={currentPage === totalPages || disabled}
          >
            {'>'}
          </Button>
        </ButtonGroup>
      )}
    </div>
  )
}

export default PaginationBar
