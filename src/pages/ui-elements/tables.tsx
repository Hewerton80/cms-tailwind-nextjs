import { useContext, useEffect } from 'react'
import { TableExample } from '../../components/ui/dataDisplay/Table/Table.stories'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'

function TablesPage() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([
      { path: '#', text: 'UI Elements' },
      { path: RouteEnum.Tables, text: 'Tables' },
    ])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])
  return <TableExample />
}

export default TablesPage
