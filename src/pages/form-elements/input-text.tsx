import { useContext, useEffect } from 'react'
import { DefaultBadges } from '../../components/ui/dataDisplay/Badge/Badge.stories'
import {
  ActiveAndDisabled,
  Validations,
} from '../../components/ui/forms/InputText/InputText.stories'
import { Card, CardBody, CardHeader, CardTitle } from '../../components/ui/layout/Card'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'

function InputTextPage() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([
      { path: '#', text: 'UI Elements' },
      { path: RouteEnum.Badges, text: 'Badges' },
    ])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  return (
    <div className="flex flex-col gap-4">
      <ActiveAndDisabled />
      <Validations />
    </div>
  )
}

export default InputTextPage
