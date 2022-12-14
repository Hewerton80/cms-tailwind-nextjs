import { useContext, useEffect } from 'react'
import { DefaultAlerts } from '../../components/ui/feedback/Alert/Alert.stories'
import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/layout/Card'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Exercitationem`

function AlertsPage() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([
      { path: '#', text: 'UI Elements' },
      { path: RouteEnum.Alerts, text: 'Alerts' },
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
          <DefaultAlerts />
        </CardBody>
      </Card>
    </div>
  )
}

export default AlertsPage
