import { useContext, useEffect } from 'react'
import { DefaultTabs } from '../../components/ui/navigation/Tabs/Tabs.stories'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'

function TabsPage() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([
      { path: '#', text: 'UI Elements' },
      { path: RouteEnum.Tabs, text: 'Tabs' },
    ])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])
  return <DefaultTabs />
}

export default TabsPage
