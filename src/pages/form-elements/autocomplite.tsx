import { useContext, useEffect } from 'react'
import {
  ActiveAndDisabled,
  Async,
  Validations,
  // Validations,
} from '../../components/ui/forms/AutoComplite/AutoComplite.stories'
import { BreadcrumbsContext } from '../../contexts/breadcrumbsContext'
import { RouteEnum } from '../../utils/routes'

function InputTextPage() {
  const { handleSetBreadcrumbs } = useContext(BreadcrumbsContext)

  useEffect(() => {
    handleSetBreadcrumbs([
      { path: '#', text: 'Form Elements' },
      { path: RouteEnum.Autocomplite, text: 'Autocomplite' },
    ])
    return () => handleSetBreadcrumbs([])
  }, [handleSetBreadcrumbs])

  return (
    <div className="flex flex-col gap-4">
      <ActiveAndDisabled />
      <Validations />
      <Async />
    </div>
  )
}

export default InputTextPage
