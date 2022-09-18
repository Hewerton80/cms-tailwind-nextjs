import { useContext, useEffect } from 'react'
import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/layout/Card'
import { DefaultBreadcrumbs } from '../../components/ui/navigation/Breadcrumbs/Breadcrumbs.stories'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'

function BreadcrumbsPage() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([
      { path: '#', text: 'UI Elements' },
      { path: RouteEnum.Breadcrumbs, text: '.Breadcrumbs' },
    ])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  return (
    <div className="flex">
      <Card>
        <CardHeader>
          <CardTitle>Default Breadcrumbs</CardTitle>
        </CardHeader>
        <CardBody>
          <DefaultBreadcrumbs />
        </CardBody>
      </Card>
    </div>
  )
}

export default BreadcrumbsPage
