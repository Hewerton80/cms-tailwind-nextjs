import { useContext, useEffect } from 'react'
import { DefaultPaginationBar } from '../../components/ui/navigation/PaginationBar/PaginationBar.stories'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'

function PaginataionPage() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([
      { path: '#', text: 'UI Elements' },
      { path: RouteEnum.Pagination, text: 'Pagination' },
    ])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  return (
    <div className="flex">
      <DefaultPaginationBar />
    </div>
  )
}

export default PaginataionPage
