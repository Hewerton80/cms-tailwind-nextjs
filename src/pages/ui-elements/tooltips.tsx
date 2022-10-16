import { useContext, useEffect } from 'react'
import { DefaultBadges } from '../../components/ui/dataDisplay/Badge/Badge.stories'
import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/layout/Card'
import {
  DefaultTooltips,
  MoreExemplos,
} from '../../components/ui/overlay/Tooltip/Tooltip.stories'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'

function TooltipsPage() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([
      { path: '#', text: 'UI Elements' },
      { path: RouteEnum.Tooltips, text: 'Tooltips' },
    ])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <DefaultTooltips />
      </div>
      <MoreExemplos />
    </div>
  )
}

export default TooltipsPage
