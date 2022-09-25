import { useContext, useEffect } from 'react'
import {
  ActiveAndDisabled,
  Validations,
} from '../../components/ui/forms/Select/Select.stories'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'

function InputTextPage() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([
      { path: '#', text: 'Form Elements' },
      { path: RouteEnum.Select, text: 'Select' },
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
