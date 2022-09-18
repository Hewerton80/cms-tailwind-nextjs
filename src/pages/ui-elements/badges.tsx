import { useContext, useEffect } from 'react'
import { DefaultBadges } from '../../components/ui/dataDisplay/Badge/Badge.stories'
import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/layout/Card'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'

function BadgesPage() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([
      { path: '#', text: 'UI Elements' },
      { path: RouteEnum.Badges, text: 'Badges' },
    ])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  return (
    <div className="flex">
      <Card>
        <CardHeader>
          <CardTitle>Default Alerts</CardTitle>
        </CardHeader>
        <CardBody>
          <DefaultBadges />
        </CardBody>
      </Card>
    </div>
  )
}

export default BadgesPage
